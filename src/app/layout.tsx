import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artisan hub",
  description: "Discover skilled members in our community. View their work and reach them on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
