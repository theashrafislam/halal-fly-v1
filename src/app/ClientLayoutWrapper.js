"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Providers from "@/store/providers";

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const hideLayout = pathname === "/checkout";

    return (
        <>
            {!hideLayout && (
                <header>
                    <Navbar />
                </header>
            )}

            <main className="flex-grow lg:pt-0">
                <Providers>{children}</Providers>
            </main>

            {!hideLayout && (
                <footer>
                    <Footer />
                </footer>
            )}
        </>
    );
}