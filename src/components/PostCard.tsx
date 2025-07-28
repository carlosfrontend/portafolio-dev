import { PostAuthor } from '@/components/PostAuthor'
import { PostCategories } from '@/components/PostCategories'
import { POSTS_QUERYResult } from '@/sanity/types'
import { PostPublishedAt } from '@/components/PostPublishedAt'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { getBlurDataUrl } from '@/sanity/lib/image'

export function PostCard(props: POSTS_QUERYResult[0]) {
    const { title, author, mainImage, publishedAt, categories } = props
    const blurDataUrl = mainImage ? getBlurDataUrl(mainImage) : undefined

    return (
        <div className="card hover:border hover:border-base-content transform bg-base-200 hover:scale-105 transition-all duration-300 ease-in-out group">
            <article className="flex flex-col gap-4 justify-start items-start p-6">
                <div className="md:col-start-9 w-full md:col-span-4 rounded-xs overflow-hidden flex">
                    {mainImage ? (
                        <Image
                            src={urlFor(mainImage).width(400).height(200).url()}
                            width={400}
                            height={200}
                            alt={mainImage.alt || title || ''}
                            className='transition-transform duration-300 transform ease-in-out group-hover:scale-120 object-cover object-center w-full'
                            placeholder="blur"
                            blurDataURL={blurDataUrl}
                            loading='eager'
                        />
                    ) : null}
                </div>
                <div>
                    <h4 className="py-2 text-xl font-semibold">
                        <span>{title}</span>
                    </h4>
                    <Link
                        href={`/blog/${props.slug!.current}`}
                        className="btn btn-soft transform bg-secondary text-accent-content hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <span>Saber más</span><span className="ml-2">&raquo;</span>
                    </Link>
                    <div>
                        <PostAuthor author={author} />
                        <PostPublishedAt publishedAt={publishedAt} />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <PostCategories categories={categories} />
                </div>
            </article>
        </div>
    )
}