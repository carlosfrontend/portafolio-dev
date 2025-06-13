'use client'
import CopyIcon from './icons/CopyIcon'
import ChatBubble from './ChatBubble'
import { toast } from 'react-toastify';
import { TOAST_OPTIONS } from '@/consts/consts';
import { ReactNode } from 'react'

export default function CopyEmailButton({ children }: { children: ReactNode }) {

    const notifySuccess = () => toast.success(
        <ChatBubble>
            Gracias por copiar mi email!. <br />Ahora puedes pegarlo en en tu cliente de correo electrónico para enviarme un mensaje.
        </ChatBubble>, TOAST_OPTIONS);

    const notifyError = (error: { message: string }) => toast.error(
        <ChatBubble>
            Oops! Algo ha salido mal <br />Vuelve a intentarlo dentro de unos minutos: {error.message}
        </ChatBubble>, TOAST_OPTIONS);

    const copyEmailToClipboard = () => {
        const email = 'carlosfrontend@hotmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                notifySuccess()
            })
            .catch((err) => {
                notifyError({ message: err.message });
            });
    }
    return (
        <button onClick={copyEmailToClipboard} className='btn btn-soft btn-md flex justify-center items-center sm:btn-sm md:btn-md btn-accent hover:scale-105 transition-all ease-in-out duration-300 sm:py-5 sm:px-2'>
            <CopyIcon />
            {children}
        </button>
    )
}
