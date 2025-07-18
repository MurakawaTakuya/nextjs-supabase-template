import { redirect } from "next/navigation";

import { FetchDataSteps } from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-12">
      <div className="w-full max-w-2xl flex flex-col items-center gap-12">
        <div className="w-full">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center justify-center">
            <InfoIcon size="16" strokeWidth={2} />
            This is a protected page that you can only see as an authenticated
            user
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center w-full">
          <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto w-full bg-background">
            {JSON.stringify(data.claims, null, 2)}
          </pre>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-4 text-center">Next Steps</h2>
          <FetchDataSteps />
        </div>
      </div>
    </div>
  );
}
