"use server";

import Logo from "@/components/Logo";
import crypto from "crypto";
import { notFound } from "next/navigation";

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIGJAoGBALpEJRFwojUhIoWvQcGqqsBIushz2iW/3YG4crBYSlALnDi6oZqz6H42
+WL+UTJQXXcexeberZBk4vXmcqz1t+04CugJSaeV2cvELsfhKDNiFiAkoRcQdJHk
moUzdZn5h9as7WdObzU6OzsQaYGxh2ZHGBk8Jg4uCEpwjwxrsbnBAgMBAAE=
-----END RSA PUBLIC KEY-----
`;

// All encrypted values start with this string so we can check if the token is valid
const checkString = "jumbohack";

// Takes an encrypted token from the URL and decrypts it using the public key above
// Tokens are expected to decrypt to a string in the format "jumbohack:{name}:{certificate title}"
// The name and certificate title are then displayed on the page
// Is this all secure? Who knows. Does it matter? Not really. Is this overkill for a simple certificate page? Absolutely.
export default async function Certificate(props) {
  const token = decodeURIComponent(props.params.token);
  // Try to decrypt the token. If it fails, the token is invalid
  let decrypted;
  try {
    decrypted = crypto
      .publicDecrypt(publicKey, Buffer.from(token, "base64"))
      .toString("utf8");
  } catch {
    return notFound();
  }
  const [head, name, cert] = decrypted.split(":");
  // Check that the decrypted value starts with the checkString
  if (head !== checkString) return notFound();
  return (
    <div>
      <Logo />
      <h1>Certificate</h1>
      <p>
        Congratulations {name}! You are awarded the certificate for {cert}
      </p>
    </div>
  );
}
