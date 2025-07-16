import { PROJECTS_QUERYResult } from '@/sanity/types'
import { urlFor, getBlurDataUrl } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard(props: PROJECTS_QUERYResult[0]) {
    const { title, mainImage, slug, description, tags } = props
    const blurDataUrl = mainImage ? getBlurDataUrl(mainImage) : undefined;

    return (
        <div
            className="card hover:border hover:border-base-content transform bg-base-200 hover:scale-105 transition-all duration-300 ease-in-out group"

        >
            <article className="flex flex-col gap-4 justify-start items-start p-6">
                <h4 className="text-xl font-semibold">{title}</h4>
                <Link
                    href={`/projects/${slug!.current}`}
                    className="btn btn-soft transform bg-secondary text-accent-content hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <span>Saber más</span><span className="ml-2">&raquo;</span>
                </Link>
                {(tags ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag) => (
                            <span key={tag} className="badge badge-sm badge-outline">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {description && (
                    <p className="text-sm text-muted">{description}</p>
                )}

                {mainImage && (
                    <div className="w-full rounded-lg overflow-hidden flex">
                        <Image
                            src={urlFor(mainImage).width(400).height(200).url()}
                            width={400}
                            height={200}
                            alt={mainImage.alt || title || ''}
                            className="transition-transform duration-300 transform ease-in-out group-hover:scale-110 object-cover w-full"
                            priority={false}
                            placeholder='blur'
                            blurDataURL={blurDataUrl}
                            loading='eager'
                        />
                    </div>
                )}
            </article>
        </div>
    )
}
