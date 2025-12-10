import { Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  displayName: string;
  avatar?: string;
  status: "online" | "offline" | "away" | "busy";
  lastSeen: Date;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserPublic {
  _id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  status: "online" | "offline" | "away" | "busy";
  lastSeen: Date;
  bio?: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  displayName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: IUserPublic;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  error?: string;
}
