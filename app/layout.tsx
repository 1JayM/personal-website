import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay Mardikar | Personal Portfolio",
  description:
    "Explore Jay Mardikar's projects, experience, education, and certifications across business and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
