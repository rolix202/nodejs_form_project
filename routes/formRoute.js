import express from "express";
import { getForm, getSuccess, postForm } from "../controllers/formController.js";

const router = express.Router()

router.get("/form", getForm)

router.post("/form", postForm)

router.get("/success", getSuccess)

export default router