# s3-replicator
Replicates S3 objects to configured bucket

## Setup
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

## Use
* Objects that you put into the source bucket will be replicated into the destination bucket

&copy; 2017 Evan Chiu. This project is licensed under the terms of the MIT license.
