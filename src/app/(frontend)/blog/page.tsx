import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { PostTitle } from '@/components/PostTitle'

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <PostTitle>Blog de programación</PostTitle>
            <div className="flex flex-col gap-24 py-12">
                {posts.map((post) => (
                    <PostCard key={post._id} {...post} />
                ))}
            </div>
        </main>
    )
}