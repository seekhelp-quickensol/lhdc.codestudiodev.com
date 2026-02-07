"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/shadcn/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { signUp } from "@/src/lib/auth/actions";
import { Eye, EyeOff } from "lucide-react";


export default function SignUpForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    startTransition(async () => {
      const result = await signUp(formData); // call server action

      if (!result.success) {
        setError(result.error || "Sign in failed");
        return;
      }

      router.push(callbackUrl);
      // router.refresh();
    });
  };

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto no-scrollbar">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="mb-1.5 block text-sm font-medium text-secondary dark:text-gray-400" htmlFor="name">Full name</label>
          <input
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={isPending}
            placeholder="John Doe"

          />
        </div>

        <div className="space-y-2">
          <label className="mb-1.5 block text-sm font-medium text-secondary dark:text-gray-400" htmlFor="email">Email address</label>
          <input
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isPending}
            placeholder="you@example.com"

          />
        </div>

        <div className="space-y-2 relative">
          <label className="mb-1.5 block text-sm font-medium text-secondary dark:text-gray-400" htmlFor="password">Password</label>
          <input
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            disabled={isPending}
            placeholder="••••••••"

            minLength={8}
          />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          <p className="text-xs text-gray-500">
            Must be at least 8 characters
          </p>
        </div>

        <Button
          type="submit"
          className="w-100"
          disabled={isPending}
        >
          {isPending ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </div>
  );
}
