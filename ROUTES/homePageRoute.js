import express from "express";
import { getHomepage } from "../CONTROLLER/homePage.js";

const router = express.Router();

router.get("/", getHomepage);

export default router;