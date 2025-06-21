import Hero from '@/components/Hero'
import { client } from '@/sanity/lib/client'

export const revalidate = 60

export default async function Home() {
  const blogCount = await client.fetch(`count(*[_type == "post"])`)
  return (
    <Hero blogCount={blogCount} />
  );
}
