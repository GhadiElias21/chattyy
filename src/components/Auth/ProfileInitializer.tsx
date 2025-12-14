"use client";

import { useEffect, useRef } from "react";
import useProfileStore from "@/app/store/profileStore";

export default function ProfileInitializer() {
  const { fetchProfile, user, loading } = useProfileStore();

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && !user && !loading) {
      initialized.current = true;
      fetchProfile();
    }
  }, [fetchProfile, user, loading]);

  return null;
}
