const redis = require("redis");

const client = redis.createClient({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || "127.0.0.1",
  password: process.env.REDIS_PASSWORD || null
});

client.on("connect", () => {
  console.log("Client connected to redis");
});

client.on("ready", () => {
  console.log("Client connected to redis and ready to use...");
});

client.on("error", (err) => {
  console.log(err.message);
});

client.on("end", () => {
  console.log("Client disconnected from Redis!");
});

process.on("SIGINT", () => {
  client.quit();
});

module.exports = client;
