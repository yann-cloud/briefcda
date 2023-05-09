import express  from "express";
import { getCategories, getCategory, postCategories } from "../CONTROLLER/categoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category/{name}", getCategory);
router.post("/addcategory", postCategories);


export default router;