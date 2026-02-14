const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

if (!username || !password) {
  throw new Error("Missing credentials");
}

console.log("Credentials received successfully");
console.log("Username:", username);
// Never log passwords in real projects



