export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Successful",
        STAGE: process.env.STAGE,
        DB_HOST: process.env.DB_HOST,
        event,
      },
      null,
      2
    ),
  };
};
