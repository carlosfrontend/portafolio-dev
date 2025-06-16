'use client'
import InfiniteScrollIcons from '@/components/InfiniteScrollIcons';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutPage() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const container1 = useRef<HTMLDivElement>(null);
    const container2 = useRef<HTMLDivElement>(null);
    const container3 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to('.mouseIcon', {
            scrollTrigger: {
                trigger: '.mouseIcon',
                scrub: true,
                start: 'center center',
                end: 'center +=300'

            },
            opacity: 0,
            duration: 1
        })
    }, { revertOnUpdate: true });

    useGSAP(() => {
        gsap.from(container1.current, {
            scrollTrigger: {
                trigger: container1.current,
                start: 'top 300px',
                end: 'top +=200px',
                scrub: true
            },
            opacity: 0,
            top: 100,
            duration: .5
        })
    }, { scope: container1 });

    useGSAP(() => {
        gsap.from(container2.current, {
            scrollTrigger: {
                trigger: container2.current,
                scrub: true,
                start: 'start center',
                end: 'center center',
            },
            opacity: 0,
            top: 100,
            duration: .5
        })
    }, { scope: container2 });

    useGSAP(() => {
        gsap.from(container3.current, {
            scrollTrigger: {
                trigger: container3.current,
                scrub: true,
                start: 'start center',
                end: 'bottom bottom',
            },
            opacity: 0,
            top: 100,
            duration: .5
        })
    }, { scope: container3 });

    return (

        <div className='flex flex-col justify-center items-center min-h-dvh'>
            <section className='w-full pt-20 md:w-[640px]'>

                <header className='pt-40 max-h-screen flex flex-col justify-center items-center'>
                    <h1 className='text-center text-5xl md:text-6xl font-extrabold !mb-0 !mt-0 text-accent'>Carlos Pulido</h1>
                    <h2 className='pt-2 text-xl md:text-2xl text-center font-semibold !mb-0 !mt-0'>Desarrollador Frontend</h2>
                    {/* Mouse icon */}
                    <svg className='mouseIcon size-20 pt-5 animate-bounce' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 284 511.24">
                        <path fill='currentColor' fillRule="nonzero" d="M125.1 494.24h33.8c29.72 0 56.74-12.17 76.34-31.76 19.59-19.59 31.76-46.62 31.76-76.34V270.52l-.73.03H17v115.59c0 29.72 12.17 56.75 31.76 76.34 19.59 19.59 46.62 31.76 76.34 31.76zm9.35-201.59c0-4.17 3.38-7.55 7.56-7.55a7.55 7.55 0 0 1 7.55 7.55v24.61l6.74-7.05c2.86-3.01 7.64-3.13 10.65-.26 3.01 2.86 3.13 7.64.26 10.65l-19.37 20.29a7.533 7.533 0 0 1-5.83 2.76 7.57 7.57 0 0 1-5.84-2.76L116.8 320.6c-2.87-3.01-2.75-7.79.26-10.65 3.01-2.87 7.79-2.75 10.65.26l6.74 7.06v-24.62zM149.56 51a7.55 7.55 0 0 1-7.55 7.55c-4.18 0-7.56-3.38-7.56-7.55V26.38l-6.74 7.06c-2.86 3.01-7.64 3.13-10.65.26-3.01-2.86-3.13-7.64-.26-10.65l19.37-20.29A7.537 7.537 0 0 1 142.01 0c2.35 0 4.45 1.07 5.83 2.76l19.37 20.29c2.87 3.01 2.75 7.79-.26 10.65-3.01 2.87-7.79 2.75-10.65-.26l-6.74-7.06V51zm.94 74.63c4.76 1.43 9.02 4.04 12.45 7.46 5.37 5.37 8.72 12.8 8.72 20.94v37.14c0 8.13-3.36 15.56-8.73 20.93a29.867 29.867 0 0 1-12.44 7.47v33.98h115.77l.73.03v-54.23c0-29.72-12.17-56.75-31.76-76.34-19.6-19.59-46.62-31.76-76.34-31.76h-8.4v34.38zm-17 93.93c-4.73-1.43-8.98-4.03-12.41-7.45-5.4-5.37-8.75-12.78-8.75-20.94v-37.14c0-8.16 3.34-15.58 8.71-20.95a29.86 29.86 0 0 1 12.45-7.46V91.25h-8.4c-29.72 0-56.75 12.17-76.34 31.76C29.17 142.6 17 169.63 17 199.35v54.2h116.5v-33.99zm25.4 291.68h-33.8c-34.41 0-65.69-14.07-88.36-36.74C14.07 451.84 0 420.55 0 386.14V199.35c0-34.41 14.07-65.69 36.74-88.36s53.95-36.74 88.36-36.74h33.8c34.42 0 65.7 14.08 88.36 36.74 22.67 22.67 36.74 53.95 36.74 88.36v186.79c0 34.41-14.07 65.7-36.74 88.36-22.66 22.66-53.94 36.74-88.36 36.74z" />
                        <path fill="#FFF" d="M142 133.52h.01c11.28 0 20.51 9.29 20.51 20.52v37.13c0 11.23-9.28 20.52-20.51 20.52H142c-11.23 0-20.52-9.24-20.52-20.52v-37.13c0-11.29 9.24-20.52 20.52-20.52z" />
                    </svg>
                </header>

                <article className='pt-16 p-6' ref={container1}>
                    <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Introducción</h3>
                    <div className='prose prose-xl lg:prose-xl text-pretty text-justify  p-4'>
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
                            Aquí podrás ver algunos de mis proyectos y, si te apetece, ¡echar un vistazo a mi blog donde comparto lo que voy descubriendo y aprendiendo!
                        </p>
                        <p>
                            Ah, y también te dejo un pequeño timeline de mi etapa anterior más abajo, para que veas un poco mi recorrido antes de llegar hasta aquí.
                        </p>
                        <p>
                            Cuando no estoy frente al código, me verás viajando o haciendo senderismo.
                        </p>
                    </div>
                </article >
                <article className='pt-20 ' ref={container2}>
                    <InfiniteScrollIcons />
                </article>
                <article className='py-20 p-6' ref={container3}>
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
