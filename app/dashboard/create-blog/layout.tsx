import { Toaster } from "sonner";

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
