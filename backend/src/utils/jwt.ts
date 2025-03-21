import jwt, { SignOptions } from "jsonwebtoken";

export const signJwt = (payload: object, options: SignOptions = {}) => {
  const private_key = Buffer.from(
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    "base64",
  ).toString("ascii");

  return jwt.sign(payload, private_key, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const publicKey = Buffer.from(
      process.env.ACCESS_TOKEN_PUBLIC_KEY,
      "base64",
    ).toString("ascii");

    return jwt.verify(token, publicKey) as T;
  } catch (e) {
    console.error(e);
    return null;
  }
};
