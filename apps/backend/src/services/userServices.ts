import { db } from "../db/db";
import { users, userSchema } from "../db/schema";
import { eq } from "drizzle-orm";

interface createUserInput {
  googleId: string;
  name: string;
  email: string;
  picture: string;
}

export const createUser = async (input: createUserInput) => {
  const parsedUser = userSchema.parse(input);
  const user = await db.insert(users).values(parsedUser);
  return user;
};

export const getUserByGoogleId = async (googleId: string) => {
  const res = await db.select().from(users).where(eq(users.googleId, googleId));
  return res[0];
};
