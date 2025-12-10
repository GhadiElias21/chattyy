// import { Request, Response } from "express";
// import { Message } from "../models/Message";
// import { Conversation } from "../models/Conversation";
// import { User } from "../models/User";
// import { AuthRequest } from "../middleware/authMiddleware";

// export const getUserStats = async (req: AuthRequest, res: Response) => {
//   try {
//     const userId = req.userId;

//     const totalMessages = await Message.countDocuments({ sender: userId });

//     const groups = await Conversation.countDocuments({
//       participants: userId,
//       isGroup: true,
//     });

//     // simple streak logic (placeholder)
//     const dayStreak = Math.floor(totalMessages / 50);

//     // simple level logic
//     const level = Math.floor(totalMessages / 100);

//     const xp = totalMessages % 100;

//     const activeFriends = await User.countDocuments({ status: "online" });

//     res.json({
//       totalMessages,
//       groups,
//       dayStreak,
//       level,
//       xp,
//       nextLevelXP: 100,
//       activeFriends,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", err });
//   }
// };
