"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserAuthContext from "@/app/context/userAuthContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, userRole, isAuthenticated } = useContext(UserAuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      if (!user) {
        router.push("/signin");
      } else if (userRole !== "admin") {
        router.push("/403");
      }
    }
  }, [user, userRole, isAuthenticated]);

  return user && userRole === "admin" ? <>{children}</> : null;
}
