const middy = require("@middy/core");
const cors = require("@middy/http-cors");

exports.handler = middy(async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  };
}).use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
