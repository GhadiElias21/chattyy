"use client";

import { create } from "zustand";
import { IAuthState, IUser } from "@/types/auth";
import { API } from "@/lib/api";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { apiClient } from "@/lib/apiClient";

const useAuthStore = create<IAuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ loading: true, error: null });

    try {
      const data = await apiClient.post<{ user: IUser; message: string }>(
        API.auth.login,
        { email, password }
      );

      set({ user: data.user, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },

  signup: async (
    email: string,
    password: string,
    username: string,
    displayName: string
  ) => {
    set({ loading: true, error: null });
    try {
      const data = await apiClient.post<{ user: IUser; message: string }>(
        API.auth.signup,
        { email, password, username, displayName }
      );

      set({ user: data.user, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await apiClient.post(API.auth.logout);

      set({ user: null, loading: false });
    } catch (err: unknown) {
      set({ error: getErrorMessage(err), loading: false });
    }
  },

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const data = await apiClient.get<{ user: IUser }>(API.user.me);

      set({ user: data.user || null, loading: false });
    } catch (err: unknown) {
      set({ user: null, error: getErrorMessage(err), loading: false });
    }
  },
}));

export default useAuthStore;
