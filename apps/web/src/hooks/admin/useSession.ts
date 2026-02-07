"use client";

import { Session } from "@/src/types/admin/types";
import { useState, useEffect } from "react";


export function useSession(): Session {
  const [user, setUser] = useState<Session["user"]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/auth/session", {
          credentials: "include", // Important: sends cookies
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user || null);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, isLoading };
}