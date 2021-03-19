import * as AWS from "aws-sdk";
import * as fs from "fs";

const S3 = new AWS.S3();
const Lambda = new AWS.Lambda();

function generatePolicy(principal_id, effect, resource) {
  return {
    principalId: principal_id,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
}
export const hello = async (event) => {
  const params = {
    FunctionName: "plugins-demo-dev-test",
    Payload: JSON.stringify({
      first: "Ravi",
      second: "Bhargava",
      third: "Mrinal",
    }),
  };

  const response = await Lambda.invoke(params).promise();

  console.log(response);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Successfully invoked",
      },
      null,
      2
    ),
  };
};

export const updloadFile = async (event) => {
  try {
    const body = fs.readFileSync("lambda.png");
    const params = {
      Bucket: "demo-meetup",
      Key: "lambda.png",
      Body: body,
    };

    const resp = await S3.putObject(params).promise();

    console.log(resp);
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Something went wrong",
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "File upload successful",
      },
      null,
      2
    ),
  };
};

export const test = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from anotherLambda",
        event,
      },
      null,
      2
    ),
  };
};

export const authorizer = async (event) => {
  if (event.authorizationToken === "Bearer myapikey")
    return generatePolicy("1", "Allow", event.methodArn);
  else return generatePolicy("1", "Deny", event.methodArn);
};
