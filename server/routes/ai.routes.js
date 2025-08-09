import express from "express";
import { generateEmail } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/generate", generateEmail);

export default router;
