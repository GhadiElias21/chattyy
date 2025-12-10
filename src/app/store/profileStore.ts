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
}

const useProfileStore = create<IProfileState>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const data = await apiClient.get<{ user: IUser }>(API.user.me);
      set({ user: data.user, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },

  updateProfile: async (profileData: Partial<IUser>) => {
    set({ loading: true, error: null });
    try {
      const data = await apiClient.patch<{ user: IUser; message: string }>(
        API.user.updateProfile,
        profileData
      );
      set({ user: data.user, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },

  updateStatus: async (status: IUser["status"]) => {
    set({ loading: true, error: null });
    try {
      const data = await apiClient.patch<{ user: IUser; message: string }>(
        API.user.updateStatus,
        { status }
      );
      set({ user: data.user, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },
}));

export default useProfileStore;
