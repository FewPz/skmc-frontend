import { Router } from "express";
import { generateKey } from "@utils/keygen";

const adminRouter = Router();

adminRouter.post("/generate-key", generateKey);

export default adminRouter;
