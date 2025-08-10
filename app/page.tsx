import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <ThemeToggle />

      <SignOutButton>
        <Button>Sign out</Button>
      </SignOutButton>
    </div>
  );
}
