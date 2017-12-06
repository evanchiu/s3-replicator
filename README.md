# s3-replicator

Replicates S3 objects to configured bucket

## Deploy with CloudFormation

Prerequisites: [Node.js](https://nodejs.org/en/) and [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed

* Create an [AWS](https://aws.amazon.com/) Account and [IAM User](https://aws.amazon.com/iam/) with the `AdministratorAccess` AWS [Managed Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html)
* Run `aws configure` to put store that user's credentials in `~/.aws/credentials`
* Create an S3 bucket for storing the Lambda code and store its name in a shell variable with:
  * `export CODE_BUCKET=bucket`
* Create the S3 bucket that you'll want to replicate into, store its name in shell variable:
  * `export DEST_BUCKET=bucket`
* Choose a name, but do NOT create the S3 bucket that you'll want to replicate from, store its name in shell variable:
  * `export SOURCE_BUCKET=bucket`
* Npm install:
  * `npm install`
* Build:
  * `npm run build`
* Upload package to S3, transform the CloudFormation template:
  * `npm run package`
* Deploy to CloudFormation:
  * `npm run deploy`

## Deploy from the AWS Serverless Application Repository
* Hit "Deploy" from the [application](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~s3-replicator) page

## Use
* Objects that you put into the source bucket will be replicated into the destination bucket

## Links
* [s3-replicator](https://github.com/evanchiu/s3-replicator) on Github
* [s3-replicator](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~s3-replicator) on the AWS Serverless Application Repository

## License
&copy; 2017 [Evan Chiu](https://evanchiu.com). This project is available under the terms of the MIT license.
