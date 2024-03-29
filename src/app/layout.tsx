import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "조민택 포트폴리오 | mintaek5555@gmail.com",
  description: "ABOUT | SKILL | PROJECT",
  icons: {
    icon: '/favicion.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="home" className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
