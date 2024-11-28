import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood, toggleStock } from "../controllers/foodController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.post("/remove", removeFood);
router.post("/toggle-stock", toggleStock);

export default router;
