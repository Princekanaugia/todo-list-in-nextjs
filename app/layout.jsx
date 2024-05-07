import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/navigationbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List App",
  description: "its a To Do List App which store your List Data in database, build in nextjs, mongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}