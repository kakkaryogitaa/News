import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "News Pulse AI",
  description: "AI Powered News Intelligence Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}