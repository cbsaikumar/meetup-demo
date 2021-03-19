export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Successfull",
        event,
      },
      null,
      2
    ),
  };
};