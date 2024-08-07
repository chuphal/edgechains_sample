import express from "express";
import { coldemail, getColdemail } from "../controllers/coldemail.js";
import authentication from "../middlewares/authentication.js";

const router = express.Router();

router.post("/", coldemail);

router.get("/get", authentication, getColdemail);

export default router;
