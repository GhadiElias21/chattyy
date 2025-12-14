"use client";

import { create } from "zustand";
import { IUser } from "@/types/auth";
import { API } from "@/lib/api";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { apiClient } from "@/lib/apiClient";

interface IProfileState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: Partial<IUser>) => Promise<void>;
  updateStatus: (status: IUser["status"]) => Promise<void>;
  clearProfile: () => void;
}

const useProfileStore = create<IProfileState>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      // Your backend returns the user directly, not wrapped in { user }
      const user = await apiClient.get<IUser>(API.user.me);

      set({
        user: {
          ...user,
          _id: user._id.toString ? user._id.toString() : String(user._id),
        },
        loading: false,
      });
    } catch (err: unknown) {
      set({
        error: getErrorMessage(err),
        loading: false,
      });
    }
  },

  updateProfile: async (profileData: Partial<IUser>) => {
    set({ loading: true, error: null });
    try {
      // Check your backend response structure
      // Might be { user: IUser } or just IUser
      const response = await apiClient.patch<IUser | { user: IUser }>(
        API.user.updateProfile,
        profileData
      );

      // Handle both response formats
      const updatedUser = "user" in response ? response.user : response;

      set({
        user: {
          ...updatedUser,
          _id: updatedUser._id.toString
            ? updatedUser._id.toString()
            : String(updatedUser._id),
        },
        loading: false,
      });
    } catch (err: unknown) {
      set({
        error: getErrorMessage(err),
        loading: false,
      });
    }
  },

  updateStatus: async (status: IUser["status"]) => {
    set({ loading: true, error: null });
    try {
      const response = await apiClient.patch<IUser | { user: IUser }>(
        API.user.updateStatus,
        { status }
      );

      const updatedUser = "user" in response ? response.user : response;

      set({
        user: {
          ...updatedUser,
          _id: updatedUser._id.toString
            ? updatedUser._id.toString()
            : String(updatedUser._id),
        },
        loading: false,
      });
    } catch (err: unknown) {
      set({
        error: getErrorMessage(err),
        loading: false,
      });
    }
  },

  clearProfile: () => {
    set({
      user: null,
      error: null,
    });
  },
}));

export default useProfileStore;
