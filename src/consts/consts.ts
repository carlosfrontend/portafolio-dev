
import type { ToastOptions } from "@/types/types"
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