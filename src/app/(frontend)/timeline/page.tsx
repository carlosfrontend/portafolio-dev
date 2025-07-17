'use client'
import { PostTitle } from '@/components/PostTitle';
import { PostSubitle } from '@/components/PostSubtitle';
import CarIcon from '@/components/icons/CarIcon';
import { AcademicCapIcon, ComputerDesktopIcon, DocumentChartBarIcon, LanguageIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

export default function TimeLinePage() {
    return (
        <div className='flex flex-col justify-start items-center min-h-dvh bg-base-100 text-base-content'>
            <header className="grid grid-auto-rows-auto place-items-center gap-5 md:gap-10 p-6 md:p-12 bg-base-100">
                <div className="flex flex-col items-center">
                    <PostTitle>Mi Viaje Profesional</PostTitle>
                    <PostSubitle>
                        Un camino de aprendizaje y desarrollo constante
                    </PostSubitle>
                </div>
            </header>
            <section className='w-full max-w-4xl px-4 py-16 md:px-8'>
                <article className='pb-16'>

                    <div className='grid grid-cols-1 place-items-center justify-center'>
                        <ul className="timeline timeline-vertical timeline-compact max-w-full md:max-w-xl">
                            <li>
                                <div className="timeline-start text-right md:text-end pr-4 text-sm py-6 md:text-base font-jetBrainsMono text-base-content">
                                    2023-Actualidad
                                </div>
                                <div className="timeline-middle">

                                    <ComputerDesktopIcon className="size-8 dark:text-sky-300/90 text-sky-800/90" />
                                </div>
                                <div className="timeline-end timeline-box bg-base-200 p-4 rounded-lg shadow-md text-left">
                                    <h3 className="font-bold text-2xl  dark:text-sky-300/90 text-sky-800/90">Programador Web Frontend</h3>
                                    <p className="text-lg text-base-content/80 pt-2">
                                        Desde mi inmersión en el desarrollo web, me he enfocado en construir interfaces de usuario interactivas y eficientes.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        He cultivado mis habilidades como programador Frontend de forma autodidacta, a través de plataformas rigurosas como <strong>The Odin Project</strong> y <strong>freeCodeCamp</strong>, complementado con el seguimiento constante de referentes de la comunidad como <em>Fazt Web</em>, <em>Carlos Azaustre</em> y <em>Midudev</em> entre otros.
                                    </p>
                                    <p className="text-lg text-base-content/80 pt-2">
                                        A través de esta <strong>formación inmersiva</strong> y la <strong>creación de proyectos</strong>, he dominado el ecosistema Frontend con tecnologías clave como <strong>React</strong>, <strong>Next.js</strong> y <strong>Tailwind CSS</strong>.
                                    </p>

                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Mi objetivo es convertir ideas en experiencias digitales fluidas, aplicando las mejores prácticas de UX y optimización.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Cada proyecto personal ha sido una oportunidad para resolver desafíos de diseño y funcionalidad, y perfeccionar mi código.
                                    </p>

                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Busco activamente un puesto dónde pueda aportar mi <strong>entusiasmo y capacidad de resolución</strong>, contribuyendo al crecimiento de un equipo innovador.
                                    </p>

                                </div>
                                <hr className="bg-neutral" />
                            </li>

                            <li>
                                <hr className="bg-neutral" />
                                <div className="timeline-start text-right md:text-end pr-4 text-sm py-6 md:text-base font-jetBrainsMono text-base-content">
                                    2016-2023
                                </div>
                                <div className="timeline-middle">
                                    <DocumentChartBarIcon className="size-8 dark:text-cyan-300/90 text-cyan-800/90" />
                                </div>
                                <div className="timeline-end timeline-box bg-base-200 p-4 rounded-lg shadow-md text-left">
                                    <h3 className="font-bold text-2xl dark:text-cyan-300/90 text-cyan-800/90">Auxiliar Administrativo</h3>
                                    <h4 className='font-bold text-sm divider'>Servicio Madrileño de Salud</h4>
                                    <p className="text-lg text-base-content/80">
                                        Gestión de documentación, organización de archivos y soporte en tareas administrativas, optimizando flujos de trabajo internos.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Durante mi tiempo como auxiliar administrativo en centros de salud, tuve la oportunidad de ser el primer contacto para muchos pacientes, ayudándoles a sentirse atendidos y escuchados desde el momento en que ingresaban al centro.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Me encargaba de gestionar citas, responder a sus dudas y coordinar documentación médica, siempre con la meta de facilitarles el proceso y que se sintieran en buenas manos.
                                    </p>
                                </div>
                                <hr className="bg-neutral" />
                            </li>

                            <li>
                                <hr className="bg-neutral" />
                                <div className="timeline-start text-right md:text-end pr-4 text-sm py-6 md:text-base font-jetBrainsMono text-base-content">
                                    2003-2015
                                </div>
                                <div className="timeline-middle">
                                    <AcademicCapIcon className="size-8 dark:text-yellow-500/90 text-yellow-800/90" />
                                </div>
                                <div className="timeline-end timeline-box bg-base-200 p-4 rounded-lg shadow-md text-left">
                                    <h3 className="font-bold text-2xl dark:text-yellow-500/90 text-yellow-800/90">Dinamizador Formador Nuevas Tecnologías</h3>
                                    <h4 className='font-bold text-sm divider'>Arje Formación S.L.</h4>
                                    <p className="text-lg text-base-content/80">
                                        Impartiendo formación y dinamizando el uso de herramientas tecnológicas para mejorar habilidades digitales en diversos grupos.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        En el proyecto <strong>REDINT</strong>, tuve la suerte de ayudar a vecinos de Getafe a descubrir y aprovechar las nuevas tecnologías en su día a día.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Como dinamizador, me dedicaba a acompañar a personas de todas las edades, desde jóvenes hasta mayores, en sus primeros pasos digitales y a quienes buscaban mejorar sus habilidades.
                                    </p>
                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Organizaba talleres, ofrecía apoyo personalizado y creaba un ambiente acogedor en nuestros centros de acceso gratuito, donde todos se sentían cómodos aprendiendo.
                                    </p>

                                    <p className='text-lg text-base-content/80 pt-2'>
                                        Ver cómo aumentaba su confianza y autonomía digital fue, sin duda, lo más gratificante de esta experiencia.
                                    </p>
                                </div>
                                <hr className="bg-neutral" />
                            </li>

                            <li>
                                <hr className="bg-neutral" />
                                <div className="timeline-start text-right md:text-end pr-4 text-sm py-6 md:text-base font-jetBrainsMono text-base-content">
                                    2003
                                </div>
                                <div className="timeline-middle">
                                    <VideoCameraIcon className='size-8 dark:text-emerald-300/90 text-emerald-800/90' />
                                </div>
                                <div className="timeline-end timeline-box bg-base-200 p-4 rounded-lg shadow-md text-left">
                                    <h3 className="font-bold text-2xl dark:text-emerald-300/90 text-emerald-800/90">Operador de Cámaras Remotas y Escenografía Virtual</h3>
                                    <h4 className='font-bold text-sm divider'>
                                        Expansión TV - Grupo Recoletos
                                    </h4>
                                    <p className="text-lg text-base-content/80">
                                        En mi rol como Operador de Cámaras en televisión, utilicé tecnología avanzada para capturar imágenes de alta calidad en entornos virtuales. Colaboré con realizadores y productores, asegurando que cada toma estuviera perfectamente encuadrada e iluminada, contribuyendo a la creación de programas visualmente atractivos.
                                    </p>
                                </div>
                                <hr className="bg-neutral" />
                            </li>

                            <li>
                                <hr className="bg-neutral" />
                                <div className="timeline-start text-right md:text-end pr-4 text-sm py-6 md:text-base font-jetBrainsMono text-base-content">
                                    2001-2003
                                </div>
                                <div className="timeline-middle">
                                    <PhotoIcon className="size-8 dark:text-lime-300/90 text-lime-800/90" />
                                </div>
                                <div className="timeline-end timeline-box bg-base-200 p-4 rounded-lg shadow-md text-left">
                                    <h3 className="font-bold text-2xl dark:text-lime-300/90 text-lime-800/90">Técnico Superior en Imágen</h3>
                                    <h4 className='font-bold text-sm divider'>I.    E.S. Puerta Bonita</h4>
                                    <p className="text-lg text-base-content/80">
                                        Formación técnica en captación de imágenes y tratamiento digital de las mismas, con especialidad en fotografia, video e iluminación.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className='w-full px-4 py-8 md:px-28'>
                    <h2 className='text-xl md:text-2xl font-bold text-center text-accent mb-8'>Más información</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card bg-base-200 shadow-xl p-6">
                            <div className='flex items-center justify-between gap-4 mb-4'>
                                <h3 className="card-title text-xl text-accent font-bold text-content ">Idiomas</h3>
                                <LanguageIcon className='size-10' />
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between">
                                    <span className="font-semibold text-base-content">Español</span>
                                    <div className="badge badge-secondary ">Nativo</div>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="font-semibold text-base-content">Inglés</span>
                                    <div className="flex gap-2">
                                        <div className="badge badge-ghost">Nivel intermedio</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="card bg-base-200 shadow-xl p-6">
                            <div className="flex items-center flex-col justify-center gap-4">
                                <CarIcon className='size-15 text-base-content' />
                                <h3 className="card-title text-xl text-accent font-bold mb-4">Carnet de Conducir</h3>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}