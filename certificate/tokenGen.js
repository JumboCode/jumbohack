const fs = require("fs");
const crypto = require("crypto");

const people = [
  {
    email: "alice@mail.com",
    name: "Alice",
    type: "award winner",
    track: "Education",
    criteria: "Creativity",
  },
  {
    email: "bob@mail.com",
    name: "Bob",
    type: "award winner",
    track: "Environmentalism",
    criteria: "Imapact",
  },
  {
    email: "eve@mail.com",
    name: "Eve",
    type: "certificate",
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
  const namesCerts = people.map(({ email, name, type, track, criteria }) => {
    const value = `${type}:${name}:${track}:${criteria}`;
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
