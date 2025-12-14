// /types/auth.d.ts
export interface IUser {
  _id: string; // MongoDB _id as string
  username: string;
  displayName: string;
  email: string;
  avatar?: string;
  status?: "online" | "offline" | "away" | "busy";
  lastSeen?: string; // ISO string
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    username: string,
    displayName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}
