import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Call Doctors Zanzibar | 24/7 Medical Care",
  description:
    "24/7 house-call medical care, hotel doctor visits and telemedicine for travellers and residents in Zanzibar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}