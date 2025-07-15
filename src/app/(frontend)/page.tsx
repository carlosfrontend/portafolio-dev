import Hero from '@/components/Hero'
import InfiniteScrollIcons from '@/components/InfiniteScrollIcons'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'


export default async function Home() {
  const blogCount = await client.fetch(`count(*[_type == "post"])`)
  const projectCount = await client.fetch(`count(*[_type == "project"])`)
  return (
    <>
      <Hero blogCount={blogCount} projectCount={projectCount} />
      <section id='about' className='flex flex-col py-10 items-center bg-base-100'>
        <article className='w-full pt-16 md:w-[640px]'>

          <header className='flex flex-col justify-center items-center'>
            <h1 className='text-center md:text-6xl  bg-gradient-to-r from-accent to-primary bg-clip-text text-5xl font-extrabold text-transparent'>Carlos Pulido</h1>
            <h2 className='pt-2 text-xl md:text-2xl text-center font-semibold !mb-0 !mt-0'>Desarrollador Frontend</h2>
          </header>

          <div >
            <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Sobre mí</h3>
            <div className='prose prose-xl lg:prose-xl text-pretty text-left  p-6'>
              <p>¡Hola!, muchas gracias por pasarte por mi rincón en la web.</p>
              <p>
                Aunque vengo de sector administrativo, hace un tiempo descubrí mi verdadera pasión por el desarrollo <strong>frontend</strong>.
              </p>
              <p>
                Disfruto un montón el proceso de obtener una idea y ver cómo cobra vida en la web, que se vea genial y que cualquiera la pueda usar sin complicaciones.
              </p>


              <p>
                Siempre estoy al día de las tendencias y tecnologías actuales y tengo amplia experiencia en la creación de interfaces de usuario modernas y responsivas.
              </p>
              <p>
                Aquí podrás ver algunos de mis <Link href="/projects" className='link link-hover font-bold'>proyectos</Link> y, si te apetece, echar un vistazo a mi <Link href="/blog" className='link link-hover font-bold'>blog</Link> dónde comparto lo que voy descubriendo y aprendiendo.
              </p>
              <p>
                Ah, y también te dejo un <em>timeline</em> con mi <Link href="/timeline" className='link link-hover font-bold'>trayectoria profesional</Link> de mi etapa anterior más abajo, para que veas un poco mi recorrido antes de llegar hasta aquí.
              </p>
              <p>
                Cuando no estoy frente al código, me verás viajando o haciendo senderismo.
              </p>
            </div>
          </div >

        </article >
        <article className='w-full my-20 md:w-[640px]'>
          <InfiniteScrollIcons />
        </article>
      </section>
    </>
  );
}
