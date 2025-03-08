import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={"mx-auto max-w-[1600px] p-5"}>{children}</main>
      </body>
    </html>
  );
}
