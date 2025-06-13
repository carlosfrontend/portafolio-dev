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