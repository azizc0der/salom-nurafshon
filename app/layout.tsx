import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Salom Nurafshon",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}
