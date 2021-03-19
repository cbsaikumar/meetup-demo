import * as AWS from "aws-sdk";
import * as fs from "fs";

const S3 = new AWS.S3();

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
        event,
      },
      null,
      2
    ),
  };
};