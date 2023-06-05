import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Min_Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
    </html>
  );
}
