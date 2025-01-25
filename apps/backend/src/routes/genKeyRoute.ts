import express from "express";
import crypto from "crypto";
import { db } from "../db/db";
import { smileKeys } from "../db/schema";

export function generateSecureKey(): string {
  return crypto.randomBytes(16).toString("hex");
}

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const genratedKey = generateSecureKey();
    await db.insert(smileKeys).values({
      key: genratedKey,
    });
    res.status(200).json({ key: genratedKey });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
