import { useSession } from "next-auth/react";

export function useCheckSession() {
    const { data: session } = useSession();
    return session;
  }
  