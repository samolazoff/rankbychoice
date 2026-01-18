"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    // TODO: API call
    setTimeout(() => {
      setLoading(false)
      alert("Registered (mock)")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-500 transition disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  )
}
