import { Noto_Sans } from "next/font/google";
import "../styles/index.scss"
import Navbar from "@/components/Navbar";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "E-commerce page for appnovia internship application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
