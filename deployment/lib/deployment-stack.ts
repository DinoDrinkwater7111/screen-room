import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambdaPython from '@aws-cdk/aws-lambda-python-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class DeploymentStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        new lambdaPython.PythonFunction(this, 'function', {
            runtime: lambda.Runtime.PYTHON_3_9,
            entry: '',
        });

        // example resource
        // const queue = new sqs.Queue(this, 'DeploymentQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
    }
}
