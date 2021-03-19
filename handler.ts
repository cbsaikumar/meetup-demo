import * as AWS from "aws-sdk";

const Lambda = new AWS.Lambda();

export const hello = async (event) => {
  const params = {
    FunctionName: "invoke-another-lambda-demo-dev-test",
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
        event,
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