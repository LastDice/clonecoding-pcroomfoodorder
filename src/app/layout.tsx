import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[클론코딩] PC방 음식 주문 시스템",
  description: "by 마지막남은뚜또 (LastDice)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={"overflow-hidden w-[1647px] h-[1016px]" + inter.className}>{children}</body>
    </html>
  );
}
