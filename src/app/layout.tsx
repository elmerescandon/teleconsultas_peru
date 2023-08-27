import { Providers } from "@/redux/provider";
import "../styles/globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "MediConnect",
    description:
        "At MediConnect, our mission is to revolutionize the way healthcare is delivered by providing a user-friendly telemedicine platform that connects patients with qualified doctors from the comfort of their homes. We aim to empower patients with accessible, convenient, and high-quality medical consultations while enabling doctors to expand their reach and impact more lives.",
};

const lato = localFont({
    src: [
        {
            path: "../extras/font/Lato-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../extras/font/Lato-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../extras/font/Lato-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../extras/font/Lato-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../extras/font/Lato-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../extras/font/Lato-BlackItalic.ttf",
            weight: "900",
            style: "italic",
        },
        {
            path: "../extras/font/Lato-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../extras/font/Lato-LightItalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../extras/font/Lato-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../extras/font/Lato-ThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${lato.className}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
