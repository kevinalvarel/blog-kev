import { Toaster } from "sonner";
import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Kev",
  description: "Dashboard Kev",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main suppressHydrationWarning>
          {children}
          <Toaster position="top-right" />
        </main>
      </body>
    </html>
  );
}
