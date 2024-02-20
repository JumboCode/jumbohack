const crypto = require("crypto");
const fs = require("fs");

// Generates a new RSA key pair for use in certificate token crypto
// The private key is used to encrypt tokens, then the public key is used to decrypt them
// So in theory, only the server can generate valid tokens, then anyone can decrypt and view them
// *** NFT vibes? ***
const generateKeyPair = () => {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  fs.writeFileSync(__dirname + "/id_rsa_pub.pem", keyPair.publicKey);
  fs.writeFileSync(__dirname + "/id_rsa_priv.pem", keyPair.privateKey);
};

generateKeyPair();
