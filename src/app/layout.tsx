import type { Metadata } from "next";
import { Inter_Tight, } from "next/font/google";
import "@/app/(frontend)/globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic';
import { SanityLive } from '@/sanity/lib/live';
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";


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
  title: "Carlos Pulido | Desarrollador Frontend - Portafolio y Blog",
  description: "Explora el portafolio de Carlos Pulido, un desarrollador frontend especializado en crear interfaces de usuario modernas y experiencias web interactivas. Descubre proyectos innovadores y artículos sobre desarrollo.",

  alternates: {
    canonical: 'https://carlospulido-portafolio.vercel.app',
  },

  authors: [{ name: 'Carlos Pulido' }],

  keywords: [
    'Carlos Pulido',
    'Desarrollador Frontend',
    'Portafolio',
    'Programador Web',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'GSAP',
    'Diseño Web',
    'Desarrollo Web',
    'UX/UI',
    'Blog de desarrollo',
    'España',
    'TypeScript'
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },


  metadataBase: new URL('https://carlospulido-portafolio.vercel.app'),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CrispWithNoSSR = dynamic(
    () => import('@/components/Crisp'),
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
          <main className="w-full bg-base-200">
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
