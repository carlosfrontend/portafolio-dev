import Link from 'next/link'
import React from 'react'
import BriefCaseIcon from './icons/BriefCase'
import { SparklesIcon } from './icons/SparklesIcon'

export default function Stats({ blogCount, projectCount }: { blogCount: number, projectCount: number }) {

    return (
        <div className=' py-10 flex flex-col md:flex-row justify-start gap-4  items-center flex-wrap w-full md:justify-center '>
            <Link href="/projects" className='hover:scale-105 border-1 transition-all duration-300 ease-in-out group w-full md:w-[210px]'>

                <div className="stat w-full gap-2 bg-base-100  text-primary">
                    <div className="text-base-content ">Proyectos recientes</div>
                    <div className="stat-value  text-base-content flex justify-around items-center">{projectCount} <BriefCaseIcon />
                    </div>
                    <div className="stat-desc group-hover:text-base-content">21% más que el mes pasado</div>
                </div>

            </Link>

            <Link href="/blog" className='hover:scale-105 transition-all border-1 ease-in-out duration-300 group w-full md:w-[210px]'>
                <div className="stat rounded-box w-full gap-2  border-none bg-base-100">
                    <div className="group-hover:text-base-content text-base-content">Entradas de blog</div>
                    <div className="stat-value text-base-content text-shadow-primary/80 flex justify-around items-center">{blogCount}<SparklesIcon />
                    </div>
                    <div className="stat-desc block group-hover:text-base-content">De lectura rápida</div>

                </div>
            </Link>
        </div>
    )
}
