import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectCard } from "@/components/ProjectCard";
import { PostTitle } from "@/components/PostTitle";
import { PostSubitle } from "@/components/PostSubtitle";
import type { PROJECTS_QUERYResult } from "@/sanity/types";

export default async function ProjectsPage() {
    const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

    return (
        <div className="">
            <header className="grid grid-auto-rows-auto place-items-center gap-5 md:gap-10 p-6 md:p-12">
                <div className="flex flex-col items-center">
                    <PostTitle>Proyectos</PostTitle>
                    <PostSubitle>Algunos trabajos y experimentos personales</PostSubitle>
                </div>
            </header>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 md:gap-14 p-6 md:p-12">
                {(projects as PROJECTS_QUERYResult).map((project) => (
                    <ProjectCard key={project._id} {...project} />
                ))}
            </div>
        </div>
    );
}
