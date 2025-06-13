import { FC } from "react";
import { ToastPosition } from "react-toastify";

export type ToastOptions = {
    position: ToastPosition;
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: number | undefined;
}

export type SocialLink = {
    href: string;
    title: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
    srTitle: string;
}

export type SocialLinks = SocialLink[]