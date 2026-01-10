import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Rank by choice",
    description: "The easiest way to build a true ranking",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${inter.variable}`}>
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    );
}
