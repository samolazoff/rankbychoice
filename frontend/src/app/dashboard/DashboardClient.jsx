"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardClient() {
    
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token")

    if (!token) {
      router.replace("/login")
    }
  }, [router])

  return (
    <div className="p-8 container mx-auto">
      <h2 className="text-3xl font-semibold">
        Dashboard
      </h2>

      <p className="mt-4 text-slate-600">
        Your rankings will appear here.
      </p>
    </div>
  )
}
