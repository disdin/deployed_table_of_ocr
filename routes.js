import express from "express";
import getRecords from "./Controllers/getRecords.js";

const router=express.Router();

router.post("/getRecords",getRecords); 

export {router};