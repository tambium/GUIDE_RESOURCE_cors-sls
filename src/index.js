exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": true,
    },
  };
};
