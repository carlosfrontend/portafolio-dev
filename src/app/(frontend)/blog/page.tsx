import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { PostTitle } from '@/components/PostTitle'
import { PostSubitle } from "@/components/PostSubtitle";

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <div className="">
            <header className="grid grid-auto-rows-auto place-items-center gap-5 md:gap-10 p-6 md:p-12">
                <PostTitle>CodeSpacio</PostTitle>
                <PostSubitle>Un espacio de programación</PostSubitle>
            </header>
            <div className="grid grid-auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 md:gap-10 p-6 md:p-12">
                {posts.map((post) => (
                    <PostCard key={post._id} {...post} />
                ))}
            </div>
        </div>
    )
}