'use client'
import { useTheme } from 'next-themes'
import IconWithToolTip from './IconWithToolTip';
import { getSkills } from '@/consts/consts';
import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { TooltipProvider } from '@radix-ui/react-tooltip';

export default function InfiniteScrollIcons() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !resolvedTheme) {
        return (
            <article className="overflow-hidden">
                <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Habilidades</h3>
                <div className="min-h-18 skeleton flex items-center justify-center">
                    Cargando habilidades...
                </div>
            </article>
        )
    }

    const skills = getSkills(resolvedTheme);

    return (
        <div className=" overflow-hidden">
            <h3 className='md:divider text-center py-10 text-3xl md:text:4xl text-accent font-bold'>Habilidades</h3>
            <Marquee gradient={false} speed={40} pauseOnHover pauseOnClick className='skillsMarkee mask-x-from-60% mask-x-to-100% motion-safe:animate-["scroll"] w-full'>
                <TooltipProvider delayDuration={300}>
                    <div className='flex items-center'>
                        {skills.map((skill) => (
                            <IconWithToolTip
                                key={skill.name}
                                icon={skill.icon}
                                tooltipContent={skill.name}
                                ariaLabel={skill.aria}
                            />
                        ))}
                    </div>
                </TooltipProvider>
            </Marquee>
        </div>
    )
}
