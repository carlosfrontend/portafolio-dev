import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/components/Post'
import { notFound } from 'next/navigation'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({ query: POST_QUERY, params: await params })

    if (!post) {
        notFound()
    }

    return (
        <Post {...post} />
    )
}