import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <ThemeToggle />
    </div>
  );
}
