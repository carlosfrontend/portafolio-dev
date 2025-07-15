
import type { ToastOptions, SocialLinks } from "@/types/types"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import GitHubIcon from "@/components/icons/GitHubIcon"
import XIcon from "@/components/icons/XIcon"
import DiscordIcon from "@/components/icons/DiscordIcon"
import {
    HTML5, CSSNew, JavaScript, TailwindCSS, AstroLight, TypeScript, Vite, Vitest,
    VisualStudioCode, Ubuntu, AstroDark, NPM, ReactDark, ReactLight, PnpmDark,
    PnpmLight, Bun, Git, GitHubLight, GitHubDark, Nextjs, DaisyUI
} from '@ridemountainpig/svgl-react';
import { Skill } from "@/types/types"

export const LINKS: { name: string, path: string }[] = [
    {
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Timeline',
        path: '/timeline'
    },
    {
        name: 'Proyectos',
        path: '/projects'
    },
    {
        name: 'Blog',
        path: '/blog'
    }
]


export const TOAST_OPTIONS: ToastOptions = {
    position: "top-right" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const SOCIAL_LINKS: SocialLinks = [
    {
        href: "https://www.linkedin.com/in/carlosfrontend/",
        title: "Visita mi perfil de LinkedIn",
        icon: LinkedinIcon,
        srTitle: "Linkedin",
    }, {
        href: "https://github.com/carlosfrontend",
        title: "Visita mi perfil de GitHub",
        icon: GitHubIcon,
        srTitle: "GitHub",
    }, {
        href: "https://twitter.com/carlosfrontend",
        title: "Visita mi perfil de Twitter",
        icon: XIcon,
        srTitle: "Twitter",
    },
    {
        href: "https://discord.com/invite/2wyag2pN6q",
        title: "Únete a mi servidor de Discord",
        icon: DiscordIcon,
        srTitle: "Discord",
    }
]

export const getSkills = (resolvedTheme: string | undefined): Skill[] => {
    const ReactIcon = resolvedTheme === 'business' ? ReactDark : ReactLight;
    const AstroIcon = resolvedTheme === 'business' ? AstroDark : AstroLight;
    const PnpmIcon = resolvedTheme === 'business' ? PnpmDark : PnpmLight;
    const GitHubIcon = resolvedTheme === 'business' ? GitHubDark : GitHubLight;

    return [
        { icon: Vite, name: "Vite", aria: "Logotipo de Vite" },
        { icon: HTML5, name: "HTML5", aria: 'Logotipo de HTML' },
        { icon: CSSNew, name: "CSS3", aria: 'Logotipo de CSS' },
        { icon: JavaScript, name: "JavaScript", aria: 'Logotipo de JavaScript' },
        { icon: TailwindCSS, name: "Tailwind CSS", aria: 'Logotipo de TailwindCSS' },
        { icon: ReactIcon, name: "React", aria: 'Logotipo de React' },
        { icon: Nextjs, name: "Next.js", aria: 'Logotipo de Nextjs' },
        { icon: Git, name: "Git", aria: 'Logotipo de Git' },
        { icon: GitHubIcon, name: "GitHub", aria: 'Logotipo de GitHub' },
        { icon: AstroIcon, name: "Astro", aria: 'Logotipo de AstroJS' },
        { icon: TypeScript, name: "TypeScript", aria: 'Logotipo de TypeScript' },
        { icon: VisualStudioCode, name: "Visual Studio Code", aria: 'Logotipo de Visual Studio Code' },
        { icon: Ubuntu, name: "Ubuntu", aria: 'Logotipo de Ubuntu' },
        { icon: Vitest, name: "Vitest", aria: 'Logotipo de Vitest' },
        { icon: NPM, name: "npm", aria: 'Logotipo de npm' },
        { icon: PnpmIcon, name: "pnpm", aria: 'Logotipo de pnpm' },
        { icon: Bun, name: "Bun", aria: 'Logotipo de Bun' },
        { icon: DaisyUI, name: "DaisyUI", aria: 'Logotipo de DaisyUI' },
    ];
};