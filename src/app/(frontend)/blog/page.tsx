import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { PostTitle } from '@/components/PostTitle'
import { PostSubitle } from "@/components/PostSubtitle";
import { POSTS_QUERYResult } from "@/sanity/types";

export default async function Page() {
    const { data }: { data: POSTS_QUERYResult } = await sanityFetch({ query: POSTS_QUERY });
    const posts = data;

    return (
        <div>
            <header className="grid grid-auto-rows-auto place-items-center gap-5 md:gap-10 p-6 md:p-12 bg-base-100">
                <div className="flex flex-col items-center">
                    <PostTitle>CodeSpacio</PostTitle>
                    <PostSubitle>Un espacio de programación</PostSubitle>
                </div>
            </header>
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 md:gap-8 p-6 md:p-8 bg-base-100 w-full">
                {posts.map((post) => (
                    <PostCard key={post._id} {...post} />
                ))}
            </div>
        </div>
    )
}