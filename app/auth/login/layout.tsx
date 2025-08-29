import "../../globals.css";
import React from "react";
import { Toaster } from "sonner";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          {children}
          <Toaster position="top-right" />
        </main>
      </body>
    </html>
  );
}
