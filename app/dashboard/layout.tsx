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
  return <main>{children}</main>;
}
