/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = "production";
process.chdir(__dirname);
const { join } = require("path");
const serverless = require("serverless-http");
const { config } = require("./.next/required-server-files.json");
const sharp = require("sharp");
const NextServer = require("next/dist/server/next-server").default;
const nextServer = new NextServer({
  hostname: "localhost",
  port: 8080,
  dir: join(__dirname),
  dev: false,
  customServer: false,
  conf: config,
});
const handler = nextServer.getRequestHandler();
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
module.exports.handler = async (event, context) => {
  console.log(event);
  if (event.rawPath === "/_next/image") {
    try {
      const { url, w, q } = event.queryStringParameters;
      const Key = `${process.env.STAGE}/kulakin/landing-page${url}`;
      const { Body, ContentType } = await s3.getObject({ Key, Bucket: "erhanesia-webapp" }).promise();
      const image = await sharp(Body);
      const result = await image
        .resize({ width: parseInt(w) })
        .toFormat(url.split(".").pop(), { quality: parseInt(q) })
        .toBuffer();
      const base64 = result.toString("base64");
      return {
        statusCode: 200,
        body: base64,
        headers: { "Content-Type": ContentType, "Cache-Control": "public, max-age=2592000, must-revalidate" },
        isBase64Encoded: true,
      };
    } catch (err) {
      console.error(err);
      return { statusCode: 204 };
    }
  }
  const res = await serverless(handler)(event, context);
  console.log(res);
  return res;
};
