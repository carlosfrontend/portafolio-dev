import { PortableText } from "next-sanity"
import { components } from "@/sanity/portableTextComponents"
import { PostTitle } from "@/components/PostTitle"
import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
    const { title, mainImage, body, description, githubUrl, previewUrl, tags } = props

    return (
        <article className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="mb-6 space-y-4">
                <Link
                    href="/projects"
                    className="btn btn-soft transform bg-secondary text-accent-content hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <span className="mr-2">&laquo;</span> <span>Volver</span>
                </Link>
                <PostTitle>{title}</PostTitle>

                {(tags ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag: string) => (
                            <span key={tag} className="badge badge-outline text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {description && (
                    <p className="text-base text-muted">{description}</p>
                )}

                <div className="flex gap-4 mt-2">
                    {previewUrl && (
                        <Link
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary text-accent-content"
                        >
                            Ver Proyecto
                        </Link>
                    )}
                    {githubUrl && (
                        <Link
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Código en GitHub
                        </Link>
                    )}
                </div>
            </header>

            {mainImage && (
                <figure className="relative w-full h-64 sm:h-80 lg:h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={urlFor(mainImage).width(800).height(600).url()}
                        alt={mainImage.alt || "Project Image"}
                        width={800}
                        height={600}
                        className="transition-transform duration-300 transform hover:scale-105 object-cover w-full h-full"
                        priority={false}
                    />
                </figure>
            )}

            {body && (
                <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl mx-auto">
                    <PortableText value={body} components={components} />
                </div>
            )}
        </article>
    )
}
