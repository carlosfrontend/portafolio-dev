'use client'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutSection() {
    const aboutHeaderRef = useRef<HTMLDivElement>(null)
    const aboutContentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (aboutHeaderRef.current) {
            gsap.from(aboutHeaderRef.current, {
                scrollTrigger: {
                    trigger: aboutHeaderRef.current,
                    start: 'top 85%',
                    end: 'bottom 50%',
                    scrub: true,
                },
                opacity: 0,
                y: 50,
            });
        }

        if (aboutContentRef.current) {
            gsap.from(aboutContentRef.current.children, {
                scrollTrigger: {
                    trigger: aboutContentRef.current,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    scrub: true,
                },
                opacity: 0,
                y: 50,
                stagger: 0.2,
            });
        }
    }, { scope: aboutContentRef });

    return (<article className='w-full pt-16 md:w-[640px]'>

        <header className='flex flex-col justify-center items-center'>
            <h1 className='text-center md:text-6xl  bg-gradient-to-r from-accent to-primary bg-clip-text text-5xl font-extrabold text-transparent'>Carlos Pulido</h1>
            <h2 className='pt-2 text-xl md:text-2xl text-center font-semibold !mb-0 !mt-0'>Desarrollador Frontend</h2>
        </header>

        <div >
            <h3 ref={aboutHeaderRef} className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Sobre mí</h3>
            <div ref={aboutContentRef} className='prose prose-xl lg:prose-xl text-pretty text-left  p-6'>
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
    )
}