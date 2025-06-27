import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/components/Post'
import { notFound } from 'next/navigation'
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";


type RouteProps = {
    params: Promise<{ slug: string }>;
};

const getPost = async (params: RouteProps["params"]) =>
    sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

export async function generateMetadata({
    params,
}: RouteProps): Promise<Metadata> {

    const { data: post } = await getPost(params);

    if (!post) {
        return {}
    }

    const metadata: Metadata = {
        title: post?.seo.title,
        description: post?.seo.description,
    }

    if (post.seo.image) {
        metadata.openGraph = {
            images: {
                url: post.seo.image
                    ? urlFor(post.seo.image).width(1200).height(630).url()
                    : `/api/og?id=${post._id}`,
                width: 1200,
                height: 630,
            },
        };
        metadata.twitter = {
            images: {
                url: post.seo.image
                    ? urlFor(post.seo.image).width(1200).height(630).url()
                    : `/api/og?id=${post._id}`,
                width: 1200,
                height: 630,
            },
        };
    }

    if (post.seo.noIndex) {
        metadata.robots = "noindex";
    }

    return metadata

}

export default async function PostPage({ params }: RouteProps) {
    const { data: post } = await getPost(params);


    if (!post) {
        notFound()
    }

    return (
        <Post {...post} />
    )
}