export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Successful",
        event,
      },
      null,
      2
    ),
  };
};