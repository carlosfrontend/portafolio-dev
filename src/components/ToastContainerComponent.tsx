'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContainerComponent = () => {
    return (
        <ToastContainer
            toastClassName={() =>
                "bg-base-200 rounded-md cursor-pointer p-10 max-w-sm"
            }
        />
    )
}