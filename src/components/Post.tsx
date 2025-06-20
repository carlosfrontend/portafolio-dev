import { PostAuthor } from "@/components/PostAuthor";
import { PostCategories } from "@/components/PostCategories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PostPublishedAt } from "@/components/PostPublishedAt";
import { PostTitle } from "@/components/PostTitle";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
    const { title, author, mainImage, body, publishedAt, categories } = props;

    return (
        <article className="grid lg:grid-cols-12 gap-y-12">
            <header className="lg:col-span-12 flex flex-col gap-4 items-start">
                <div className="flex gap-4 items-center">
                    <PostCategories categories={categories} />
                    <PostPublishedAt publishedAt={publishedAt} />
                </div>
                <PostTitle>{title}</PostTitle>
                <PostAuthor author={author} />
            </header>
            {mainImage ? (
                <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
                    <Image
                        src={urlFor(mainImage).width(400).height(400).url()}
                        width={400}
                        height={400}
                        alt=""
                    />
                </figure>
            ) : null}
            {body ? (
                <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
                    <PortableText value={body} components={components} />
                </div>
            ) : null}
        </article>
    );
}