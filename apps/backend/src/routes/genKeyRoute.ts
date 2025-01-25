import express from "express";
import crypto from "crypto";
import { db } from "../db/db";
import { smileKeys } from "../db/schema";

export function generateSecureKey(): string {
  return crypto.randomBytes(16).toString("hex");
}

const router = express.Router();

router.post("/", async (req, res) => {
  const { count } = req.body;
  try {
    const keys = Array.from({ length: count }, () => generateSecureKey());
    await db.insert(smileKeys).values(keys.map((key) => ({ key })));
    res.status(200).json({ keys });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
