exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
