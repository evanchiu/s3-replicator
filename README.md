# s3-replicator
Replicates S3 objects to configured buckets

## Setup
* Create an [AWS](https://aws.amazon.com/) Account and [IAM User](https://aws.amazon.com/iam/) with the `AdministratorAccess` AWS [Managed Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html)
* Run `aws configure` to put store that user's credentials in `~/.aws/credentials`
* Create an S3 bucket for storing the Lambda code and store its name in a shell variable with:
  * `export CODE_BUCKET=bucket`
* Create the S3 buckets that you'll want to replicate into, store their names in shell variable:
  * `export DEST_BUCKETS=bucket1,bucket2,bucketN`
* Npm install:
  * `npm install`
* Build:
  * `npm run build`
* Upload package to S3, transform the CloudFormation template:
  * `npm run package`
* Deploy to CloudFormation:
  * `npm run deploy`

## Use
* This will create a new S3 Bucket, dev-s3-replicator-*username*-sourcebucket-*cloudformation-id*
* Objects that you put into that bucket will be replicated to the destination buckets

&copy; 2017 Evan Chiu. This project is licensed under the terms of the MIT license.
