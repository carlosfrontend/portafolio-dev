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
                scale: 0.8,
                y: 80,
                rotateX: -90,
                ease: 'power4.out',
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
                    Ah, y también te dejo un <Link href="/timeline" className='link link-hover font-bold'><em>timeline</em></Link> con la trayectoria profesional de mi etapa anterior, para que veas un poco mi recorrido antes de llegar hasta aquí.
                </p>
                <p>
                    Cuando no estoy frente al código, me verás viajando o haciendo senderismo.
                </p>
            </div>
        </div >

    </article >
    )
}