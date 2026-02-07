// app/auth/unauthorized/page.tsx

import Link from "next/link";

import { ShieldAlert } from "lucide-react";
import { Button } from "@/shadcn/ui/button";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <ShieldAlert className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>

        {/* Title & Message */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Access Denied
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You don't have permission to view this page.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This area is restricted to administrators only.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">Go to Homepage</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/auth/signin">Sign in with Different Account</Link>
          </Button>
        </div>

        {/* Optional: Support hint */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
          If you believe this is an error, please contact your administrator.
        </p>
      </div>
    </div>
  );
}