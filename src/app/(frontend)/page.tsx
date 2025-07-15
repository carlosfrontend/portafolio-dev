import AboutSection from '@/components/AboutSection'
import Hero from '@/components/Hero'
import SkillsSection from '@/components/SkillsSection'
import { client } from '@/sanity/lib/client'


export default async function Home() {
  const blogCount = await client.fetch(`count(*[_type == "post"])`)
  const projectCount = await client.fetch(`count(*[_type == "project"])`)

  return (
    <>
      <Hero blogCount={blogCount} projectCount={projectCount} />
      <section id='about' className='flex flex-col py-10 items-center bg-base-100'>
        <AboutSection />
        <SkillsSection />
      </section>
    </>
  );
}
