import express from "express";
import { db } from "../db/db";
import { keys } from "../db/schema/keys";
import { generateKey } from "../utils/keygen";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const key = generateKey(32);
    const result = await db.insert(keys).values({
      key,
    });
    res.json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

export default router;
