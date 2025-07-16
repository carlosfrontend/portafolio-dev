import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from '@/sanity/lib/queries'
import { Project } from '@/components/Project'
import { notFound } from 'next/navigation'
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { unstable_ViewTransition as ViewTransition } from "react";

type RouteProps = {
    params: Promise<{ slug: string }>;
};

const getProject = async (params: RouteProps["params"]) =>
    sanityFetch({
        query: PROJECT_QUERY,
        params: await params,
    });

export async function generateMetadata({
    params,
}: RouteProps): Promise<Metadata> {

    const { data: project } = await getProject(params);

    if (!project) {
        return {}
    }

    const metadata: Metadata = {
        title: project?.seo.title,
        description: project?.seo.description,
        metadataBase: new URL("https://carlospulido-portafolio.vercel.app"),
    }

    if (project.seo.image) {
        metadata.openGraph = {
            images: {
                url: urlFor(project.seo.image).width(1200).height(630).url(),
                width: 1200,
                height: 630,
            },
        };
        metadata.twitter = {
            images: {
                url: urlFor(project.seo.image).width(1200).height(630).url(),
            },
        };
    }

    if (project.seo.noIndex) {
        metadata.robots = "noindex";
    }

    return metadata

}


export default async function ProjectPage({ params }: RouteProps) {
    const { data: project } = await getProject(params);

    if (!project) {
        notFound()
    }

    return (
        <ViewTransition name={`project-${project._id}`}>
            <Project {...project} />
        </ViewTransition>
    )
}