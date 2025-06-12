'use client'
import React from 'react'
import CopyIcon from './icons/CopyIcon'
import ChatBubble from './ChatBubble'
import { toast } from 'react-toastify';

export default function CopyEmailButton() {

    const notify = () => toast(<ChatBubble />, {
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
                notify();

            })
            .catch(err => {
                console.error('Error al copiar el email: ', err);
                alert('Error al copiar el email. Por favor, intenta manualmente.');
            });
    }
    return (
        <button onClick={copyEmailToClipboard} className='btn btn-soft btn-xs sm:btn-sm md:btn-md btn-accent hover:scale-105 transition-all ease-in-out duration-300'>
            <CopyIcon />
            Copiar Email
        </button>
    )
}
