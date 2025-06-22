import Link from 'next/link'

export default function NotFound() {

    return (
        <div>
            <h2>Este artículo no existe</h2>
            <p>No se pudo encontrar el recurso solicitado</p>
            <p>
                Ver <Link href="/blog">todos los artículos</Link>
            </p>
        </div>
    )
}