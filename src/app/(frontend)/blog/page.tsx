import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { PostTitle } from '@/components/PostTitle'
import { PostSubitle } from "@/components/PostSubtitle";

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <div className="">
            <header className="grid grid-auto-rows-auto place-items-center gap-5 md:gap-10 p-6 md:p-12 bg-base-100">
                <div className="flex flex-col items-center">
                    <PostTitle>CodeSpacio</PostTitle>
                    <PostSubitle>Un espacio de programación</PostSubitle>
                </div>
            </header>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 md:gap-14 p-6 md:p-12 bg-base-100">
                {posts.map((post) => (
                    <PostCard key={post._id} {...post} />
                ))}
            </div>
        </div>
    )
}