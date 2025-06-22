import { PostAuthor } from '@/components/PostAuthor'
import { PostCategories } from '@/components/PostCategories'
import { POSTS_QUERYResult } from '@/sanity/types'
import { PostPublishedAt } from '@/components/PostPublishedAt'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard(props: POSTS_QUERYResult[0]) {
    const { title, author, mainImage, publishedAt, categories } = props

    return (
        <Link className="card shadow-sm shadow-base-content/10 bg-transparent transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg group" href={`/blog/${props.slug!.current}`}>
            <article className="flex flex-col gap-4 justify-start items-start p-6">
                <div className="py-6">
                    <PostCategories categories={categories} />
                </div>
                <div>
                    <h2 className="py-2">
                        <span>{title}</span>
                    </h2>
                    <div className="py-2">
                        <PostAuthor author={author} />
                        <PostPublishedAt publishedAt={publishedAt} />
                    </div>
                </div>
                <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
                    {mainImage ? (
                        <Image
                            src={urlFor(mainImage).width(400).height(200).url()}
                            width={400}
                            height={200}
                            alt={mainImage.alt || title || ''}
                            className='transition-transform duration-300 transform ease-in-out hover:scale-120'
                        />
                    ) : null}
                </div>
            </article>
        </Link>
    )
}