import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { db } from "src/db/db";
import { keys } from "src/db/schema/keys";
import { z } from "zod";

const generateKeySchema = z.object({
  userId: z.number().positive(),
});

export const generateKey = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    if (currentUser.role !== "ADMIN") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const { userId } = generateKeySchema.parse(req.body);

    const key = nanoid(32);
    await db.insert(keys).values({
      key,
      userId,
    });
    return res
      .status(200)
      .json({ message: "Key generated successfully", key: key });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
