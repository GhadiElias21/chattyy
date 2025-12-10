import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  getProfile,
  updateProfile,
  updateStatus,
} from "../controllers/user.controller";
// import { getUserStats } from "../controllers/userStats.controller";

const router = Router();

router.get("/me", authMiddleware, getProfile);
router.patch("/update", authMiddleware, updateProfile);
router.patch("/status", authMiddleware, updateStatus);

// router.get("/stats", authMiddleware, getUserStats);

export default router;
