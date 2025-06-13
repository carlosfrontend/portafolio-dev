
import type { ToastOptions, SocialLinks } from "@/types/types"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import GitHubIcon from "@/components/icons/GitHubIcon"
import XIcon from "@/components/icons/XIcon"
import DiscordIcon from "@/components/icons/DiscordIcon"

export const LINKS: { name: string, path: string }[] = [
    {
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Sobre mí',
        path: '/about'
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