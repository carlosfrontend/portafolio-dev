'use client';

import Link from 'next/link'
import React from 'react'
import BriefCaseIcon from './icons/BriefCase'
import { SparklesIcon } from './icons/SparklesIcon'

export default function Stats() {
    return (
        <div className=' mt-6 flex justify-start gap-4  items-stretch flex-wrap w-full md:justify-center md:gap-2'>
            <Link href="/projects" className='hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-lg group'>
                <div className="shadow">
                    <div className="stat w-full gap-2 md:w-[200px] bg-base-200 overflow-hidden">
                        <div className="stat-title group-hover:text-base-content">Proyectos recientes</div>
                        <div className="stat-value text-accent text-shadow-primary/80 group-hover: group-hover:text-shadow-2xs flex justify-around items-center">4 <BriefCaseIcon />
                        </div>
                        <div className="stat-desc group-hover:text-base-content">21% más que el mes pasado</div>
                    </div>
                </div>

            </Link>

            <Link href="/blog" className='hover:scale-105 transition-all duration-300 hover:shadow-lg group'>
                <div className="shadow">
                    <div className="stat w-full gap-2 md:w-[200px] border-none bg-base-200">
                        <div className="stat-title group-hover:text-base-content">Entradas de blog</div>
                        <div className="stat-value text-accent text-shadow-primary/80 group-hover: group-hover:text-shadow-2xs flex justify-evenly items-center">5<SparklesIcon />
                        </div>
                        <div className="stat-desc block group-hover:text-base-content">De lectura rápida</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
