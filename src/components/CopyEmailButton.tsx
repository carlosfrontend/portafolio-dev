'use client'
import CopyIcon from './icons/CopyIcon'
import ChatBubble from './ChatBubble'
import { toast } from 'react-toastify';
import ChatBubbleError from './ChatBubbleError';

export default function CopyEmailButton() {

    const notifySuccess = () => toast.success(<ChatBubble />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyError = (error: { message: string }) => toast.error(<ChatBubbleError message={error.message} />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const copyEmailToClipboard = () => {
        const email = 'carlosfrontend@hotmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                notifySuccess();
            })
            .catch((err) => {
                notifyError({ message: err.message });
            });
    }
    return (
        <button onClick={copyEmailToClipboard} className='btn btn-soft btn-md sm:btn-sm md:btn-md btn-accent hover:scale-105 transition-all ease-in-out duration-300'>
            <CopyIcon />
            Copiar Email
        </button>
    )
}
