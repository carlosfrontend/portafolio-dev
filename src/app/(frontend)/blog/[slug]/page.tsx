import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/components/Post'
import { notFound } from 'next/navigation'
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { unstable_ViewTransition as ViewTransition } from "react";

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
        metadataBase: new URL("https://carlospulido-portafolio.vercel.app"),
    }

    if (post.seo.image) {
        metadata.openGraph = {
            images: {
                url: urlFor(post.seo.image).width(1200).height(630).url(),
                width: 1200,
                height: 630,
            },
        };
        metadata.twitter = {
            images: {
                url: urlFor(post.seo.image).width(1200).height(630).url(),
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
        <ViewTransition>
            <Post {...post} />
        </ViewTransition>
    )
}