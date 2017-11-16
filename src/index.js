const aws = require('aws-sdk');
const s3 = new aws.S3();
const path = require('path');

const destBuckets = process.env.DEST_BUCKETS.split(',');

exports.handler = function main(event, context) {
  // Fail on mising data
  if (!destBuckets) {
    context.fail('Error: Environment variable DEST_BUCKETS missing');
    return;
  }
  if (event.Records === null) {
    context.fail('Error: Event has no records.');
    return;
  }

  // Make a task for each combination of record and destBucket
  let tasks = [];
  for (let i = 0; i < event.Records.length; i++) {
    for (let j = 0; j < destBuckets.length; j++) {
      tasks.push(replicatePromise(event.Records[i], destBuckets[j]));
    }
  }

  Promise.all(tasks)
    .then(() => { context.succeed(); })
    .catch(() => { context.fail(); });
};

function replicatePromise(record, destBucket) {
  return new Promise((resolve, reject) => {
    // The source bucket and source key are part of the event data
    var srcBucket = record.s3.bucket.name;
    var srcKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    // Modify destKey if an alternate copy location is preferred
    var destKey = srcKey;
    var msg = 'copying ' + srcBucket + ':' + srcKey + ' to ' + destBucket + ':' + destKey;

    console.log('Attempting: ' + msg);
    s3.copyObject({
      Bucket: destBucket,
      Key: destKey,
      CopySource: encodeURIComponent(srcBucket + '/' + srcKey),
      MetadataDirective: 'COPY'
    }, (err, data) => {
      if (err) {
        console.log('Error:' + msg);
        console.log(err, err.stack); // an error occurred
        return reject('Error:' + msg);
      } else {
        console.log('Success: ' + msg);
        return resolve('Success: ' + msg);
      }
    });
  });
}
