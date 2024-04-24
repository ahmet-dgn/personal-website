import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmet Can Doğan - Front-End Developer",
  description:
    "I specialize in building the frontend of websites and web applications, ensuring they contribute to the overall success of the product.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
