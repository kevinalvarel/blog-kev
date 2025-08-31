import { Toaster } from "sonner";
import "../../globals.css";

export default function CreateBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
