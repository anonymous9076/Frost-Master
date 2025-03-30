"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserAuthContext from "@/app/context/userAuthContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, userRole } = useContext(UserAuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (userRole !== "admin") {
      router.push("/403");
    }
  }, [user, userRole]);

  return user && userRole === "admin" ? <>{children}</> : null;
}
