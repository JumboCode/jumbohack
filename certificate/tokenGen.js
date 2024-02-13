const fs = require("fs");
const crypto = require("crypto");

const people = [
  {
    name: "Alice",
    email: "alice@mail.com",
    cert: "Best Hacker",
  },
  {
    name: "Bob",
    email: "bob@mail.com",
    cert: "Best Hair",
  },
];

const host = "http://localhost:3000";

function generateTokens() {
  let privateKey;
  try {
    privateKey = fs.readFileSync(__dirname + "/id_rsa_priv.pem", "utf8");
  } catch {
    console.log("Private key not found, please run keyGen.js first");
    return;
  }
  const namesCerts = people.map(({ name, email, cert }) => {
    const value = `jumbohack:${name}:${cert}`;
    const token = crypto
      .privateEncrypt(privateKey, Buffer.from(value))
      .toString("base64");
    return {
      email,
      certUrl: `${host}/certificate/${encodeURIComponent(token)}`,
    };
  });
  fs.writeFileSync(
    __dirname + "/tokens.txt",
    namesCerts.map(({ email, certUrl }) => `${email}: ${certUrl}`).join("\n")
  );
}

generateTokens();
