import Link from 'next/link'

export default function NotFound() {

    return (
        <div className='flex flex-col justify-start pt-40 items-center h-screen gap-4'>
            <h1 className='text-6xl text-center'>404</h1>
            <p className='text-2xl text-center'>No se pudo encontrar el artículo solicitado</p>

            <Link className='btn btn-primary' href="/blog">Ver todos los artículos</Link>

        </div>
    )
}