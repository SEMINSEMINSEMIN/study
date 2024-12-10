import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    /**
     * By adding Inter to the <body> element, the font will be applied throughout your application.
     * cf) 'antialiased': Tailwind class, smooths out the font.
     */
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
