'use client'

import { HTML5, CSSNew, JavaScript, TailwindCSS, AstroLight, TypeScript, Vite, Vitest, VisualStudioCode, Ubuntu, AstroDark, NPM, ReactDark, ReactLight, PnpmDark, PnpmLight, Bun, Git, GitHubLight, GitHubDark, Nextjs, DaisyUI } from '@ridemountainpig/svgl-react'
import { useTheme } from 'next-themes'

import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'

export default function InfiniteScrollIcons() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !resolvedTheme) {
        return (
            <article className="overflow-hidden">
                <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Habilidades</h3>
                <div className="h-18 flex items-center justify-center">
                    Cargando habilidades...
                </div>
            </article>
        )
    }

    const ReactIcon = resolvedTheme === 'business' ? ReactDark : ReactLight;
    const AstroIcon = resolvedTheme === 'business' ? AstroDark : AstroLight;
    const PnpmIcon = resolvedTheme === 'business' ? PnpmDark : PnpmLight;
    const GitHubIcon = resolvedTheme === 'business' ? GitHubDark : GitHubLight;

    return (
        <div className=" overflow-hidden">
            <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Habilidades</h3>
            <Marquee gradient={false} speed={20} className='skillsMarkee mask-x-from-60% mask-x-to-100% motion-safe:animate-["scroll"]'>
                <Vite className="size-18 aspect-video mx-4" aria-label="Logotipo de Vite" />
                <HTML5 className="size-18 aspect-video mx-4" aria-label='Logotipo de HTML' />
                <CSSNew className="size-18 aspect-video mx-4" aria-label='Logotipo de CSS' />
                <TailwindCSS className="size-18 aspect-video mx-4" aria-label='Logotipo de TailwindCSS' />
                <JavaScript className="size-18 aspect-video mx-4" aria-label='Logotipo de JavaScript' />
                <ReactIcon className="size-18 aspect-video mx-4" aria-label='Logotipo de React' /> {/* Usa la variable calculada */}
                <Nextjs className="size-18 aspect-video mx-4" aria-label='Logotipo de Nextjs' />
                <Git className="size-18 aspect-video mx-4" aria-label='Logotipo de Git' />
                <GitHubIcon className="size-18 aspect-video mx-4" aria-label='Logotipo de GitHub' /> {/* Usa la variable calculada */}
                <AstroIcon className="size-18 aspect-video mx-4" aria-label='Logotipo de AstroJS' /> {/* Usa la variable calculada */}
                <TypeScript className="size-18 aspect-square mx-4" aria-label='Logotipo de TypeScript' />
                <VisualStudioCode className="size-18 aspect-square mx-4" aria-label='Logotipo de Visual Studio Code' />
                <Ubuntu className="size-18 aspect-square mx-4" aria-label='Logotipo de Ubuntu' />
                <Vitest className="size-18 aspect-square mx-4" aria-label='Logotipo de Vitest' />
                <NPM className="size-18 aspect-square mx-4" aria-label='Logotipo de npm' />
                <PnpmIcon className="size-18 aspect-video mx-4" aria-label='Logotipo de pnpm' /> {/* usa la variable calculada */}
                <Bun className="size-18 aspect-square mx-4" aria-label='Logotipo de Bun' />
                <DaisyUI className="size-18 aspect-square mx-4" aria-label='Logotipo de DaisyUI' />
            </Marquee>
        </div>
    )
}
