import express from "express";
import { approvePost, createPost, deletePost } from "../Controllers/postController.js";
import { adminMiddleware, authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createPost);
router.patch("/:id/approve", authMiddleware, adminMiddleware, approvePost);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deletePost);
export default router