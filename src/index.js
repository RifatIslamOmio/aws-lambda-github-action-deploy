exports.handler = async event => {
  const response = {
    statusCode: 200,
    body: event,
    message: "Succefully invoked"
  };
  return response;
};
