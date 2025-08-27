import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // pilih sesuai kebutuhan
});
export const metadata: Metadata = {
  title: "Kev - Blog",
  description: "Blog pribadi Kev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
