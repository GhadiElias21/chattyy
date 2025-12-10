import { Request, Response } from "express";
import { User } from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

// Get profile of logged-in user
export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { displayName, bio, avatar } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.userId,
      { displayName, bio, avatar },
      { new: true }
    ).select("-password");

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

export const updateStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { status } = req.body;

    if (!["online", "offline", "away", "busy"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updated = await User.findByIdAndUpdate(
      req.userId,
      { status, lastSeen: new Date() },
      { new: true }
    ).select("-password");

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};
