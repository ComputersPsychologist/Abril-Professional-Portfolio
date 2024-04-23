import Cursor from "@/components/Cursor/Cursor";
import Nav from "@/components/Nav/Nav";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abril Wainstein - Professional Model",
  description: "My modeling portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
