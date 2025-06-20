import { POST_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

type PostAuthorProps = {
    author: NonNullable<POST_QUERYResult>['author']
}

export function PostAuthor({ author }: PostAuthorProps) {
    return author?.image || author?.name ? (
        <div className="flex items-center gap-2">
            {author?.image ? (
                <Image
                    src={urlFor(author.image).width(80).height(80).url()}
                    width={80}
                    height={80}
                    alt={author.name || ''}
                    className="bg-pink-50 size-10 shadow-inner rounded-full"
                />
            ) : null}
            {author?.name ? (
                <p className="text-base-content/80">{author.name}</p>
            ) : null}
        </div>
    ) : null
}