import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My first Next App",
    description: "Generated by create next app",
    keywords: "nueva app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
