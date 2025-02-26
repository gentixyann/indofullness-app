import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "マ！？インドフルネス",
  description:
    "マインドフルネスがコスモを生み出すのなら、その逆のカオスを生み出す装置がインドフルネスである。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
