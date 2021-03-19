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
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        stage: process.env.STAGE,
        db: process.env.DB_HOST,
        input: event,
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
