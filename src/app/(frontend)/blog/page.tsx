import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { internalGroqTypeReferenceTo, Slug } from "@/sanity/types";


export default async function PostsPage() {
    const { data: posts } = await sanityFetch({
        query: POSTS_QUERY
    });
    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold">Post index</h1>
            <ul className="grid grid-cols-1 divide-y divide-blue-100">
                {posts.map((post: {
                    _id: string;
                    title: string | null;
                    slug: Slug | null;
                    author: {
                        _ref: string;
                        _type: "reference";
                        _weak?: boolean;
                        [internalGroqTypeReferenceTo]?: "author";
                    } | null;
                }) => (
                    <li key={post._id}>
                        <Link
                            className="block p-4 hover:text-blue-500"
                            href={`/blog/${post?.slug?.current}`}
                        >
                            {post?.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Link href="/">&larr; Return home</Link>
        </main>
    );
}