import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | numbers",
    default: "numbers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
