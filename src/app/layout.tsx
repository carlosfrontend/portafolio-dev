import type { Metadata } from "next";
import { Inter_Tight, } from "next/font/google";
import "@/app/(frontend)/globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic';
import { SanityLive } from '@/sanity/lib/live';


const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", 'Segoe UI', "Roboto, Oxygen", " Ubuntu", " Cantarell", 'Open Sans', 'Helvetica Neue', "sans-serif"],
  preload: true,
});


export const metadata: Metadata = {
  title: "Portafolio de Carlos Pulido - Desarrollador Web Frontend",
  description: "Explora el portafolio de Carlos Pulido, desarrollador web frontend. Descubre proyectos que demuestran experiencia en la creación de interfaces de usuario modernas y responsivas."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CrispWithNoSSR = dynamic(
    () => import('../components/Crisp'),
  )

  return (
    <html lang="es" suppressHydrationWarning>
      <CrispWithNoSSR />
      <body className={`${inter.className}  antialiased min-h-dvh `}>
        <ToastContainer />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          themes={["corporate", "business"]}

        >
          <Navbar />
          <main className="min-h-dvh">
            {children}
            <SanityLive />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
