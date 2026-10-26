const { JWT_SECRET = "some-secret-key" } = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing ");
}

export { JWT_SECRET };
