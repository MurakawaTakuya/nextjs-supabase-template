'use client';

import { AuthButton } from "@/components/auth/auth-button";
import { EnvVarWarning } from "@/components/tutorial/env-var-warning";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  const { user, loading } = useAuth();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Next.js Supabase Starter</Link>
          {!loading && user && (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          )}
        </div>
        {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
      </div>
    </nav>
  );
}
