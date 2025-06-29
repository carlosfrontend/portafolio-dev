'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CustomNotFound() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    if (!isClient) return null
    return (
        <div className='flex flex-col justify-start pt-40 items-center h-screen gap-4'>
            <h1 className='text-6xl'>404</h1>
            <p className='text-2xl'>Página no encontrada</p>
            <Link className='btn btn-primary' href={'/'}>Ir a la página principal</Link>
        </div>
    )
}
