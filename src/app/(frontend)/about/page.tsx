'use client'
import InfiniteScrollIcons from '@/components/InfiniteScrollIcons';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function AboutPage() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container1 = useRef<HTMLDivElement>(null);
    const container2 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(container1.current, {
            scrollTrigger: {
                trigger: container1.current,
                scrub: true,
                start: 'top 650',
                end: 'center 400',
            },
            opacity: 0,
            top: 100,
        })
    }, { scope: container1 });

    useGSAP(() => {
        gsap.from(container2.current, {
            scrollTrigger: {
                trigger: container2.current,
                scrub: true,
                start: 'start 600',
                end: 'top center',
            },
            opacity: 0,
            top: 100,
            duration: .5
        })
    }, { scope: container2 });

    return (

        <div className='flex flex-col justify-center items-center min-h-dvh'>
            <section className='w-full pt-16 md:w-[640px]'>

                <header className='max-h-screen flex flex-col justify-center items-center'>
                    <h1 className='text-center md:text-6xl  bg-gradient-to-r from-accent to-primary bg-clip-text text-5xl font-extrabold text-transparent'>Carlos Pulido</h1>
                    <h2 className='pt-2 text-xl md:text-2xl text-center font-semibold !mb-0 !mt-0'>Desarrollador Frontend</h2>
                </header>

                <article ref={container1}>
                    <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Introducción</h3>
                    <div className='prose prose-xl lg:prose-xl text-pretty text-justify  p-6'>
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
                            Ah, y también te dejo un pequeño timeline de mi etapa anterior más abajo, para que veas un poco mi recorrido antes de llegar hasta aquí.
                        </p>
                        <p>
                            Cuando no estoy frente al código, me verás viajando o haciendo senderismo.
                        </p>
                    </div>
                </article >
                <article className=' ' ref={container1}>
                    <InfiniteScrollIcons />
                </article>
                <article className='pb-16' ref={container2}>
                    <h3 className='md:divider text-center py-16 text-3xl md:text:5xl text-accent font-bold'>Línea de tiempo</h3>
                    <div className='grid grid-cols-1 place-items-center justify-center'>
                        <ul className="timeline timeline-vertical md:timeline-box p-6">
                            <li>
                                <div className="timeline-start">2023-Actualidad</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box ">Programador Web Frontend</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2016-2023</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Auxiliar Administrativo</div>
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2003-2015</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Dinamizador Formador Nuevas Tecnologías</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2003</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Operador de cámaras remotas con Últimate y escenografía virtual</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2001-2003</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Técnico Superior en Imágen</div>
                                <hr />
                            </li>
                        </ul>
                    </div>

                </article>
            </section >
        </div>

    )
}
