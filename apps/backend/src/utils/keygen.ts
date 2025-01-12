import { customAlphabet } from "nanoid";

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export const generateKey = (length: number) => {
  const nanoid = customAlphabet(alphabet, length);
  return nanoid();
};


