import { PostAuthor } from "@/components/PostAuthor";
import { PostCategories } from "@/components/PostCategories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PostPublishedAt } from "@/components/PostPublishedAt";
import { PostTitle } from "@/components/PostTitle";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { getBlurDataUrl } from "@/sanity/lib/image";
import { RelatedPosts } from "./RelatedPosts";


export function Post(props: NonNullable<POST_QUERYResult>) {
    const {
        _id,
        title,
        author,
        mainImage,
        body,
        publishedAt,
        categories,
        relatedPosts
    } = props;
    const blurDataUrl = mainImage ? getBlurDataUrl(mainImage) : undefined

    return (
        <article className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="mb-6">
                <Link href="/blog" className="btn btn-soft transform bg-secondary text-accent-content hover:scale-105 transition-all duration-300 ease-in-out"><span className="mr-2">&laquo;</span> <span>Volver</span></Link>
                <div className="flex flex-wrap gap-4 items-center mt-4">
                    <PostCategories categories={categories} />
                    <PostPublishedAt publishedAt={publishedAt} />
                </div>
                <PostTitle>{title}</PostTitle>
                <PostAuthor author={author} />
            </header>
            {mainImage ? (
                <figure className="relative w-full h-64 sm:h-80 lg:h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={urlFor(mainImage).width(800).height(600).url()}
                        alt="Post Image"
                        width={800}
                        height={600}
                        className="transition-transform duration-300 transform hover:scale-105 object-cover w-full h-full"
                        priority={false}
                        placeholder="blur"
                        blurDataURL={blurDataUrl}
                    />
                </figure>
            ) : null}
            {body ? (
                <div className="prose text-lg  xl:prose-xl mx-auto">
                    <PortableText value={body} components={components} />
                    <RelatedPosts
                        relatedPosts={relatedPosts}
                        documentId={_id}
                        documentType="post"
                    />
                </div>
            ) : null}
        </article>
    );
}
