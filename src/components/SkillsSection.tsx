'use client'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfiniteScrollIcons from '@/components/InfiniteScrollIcons';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SkillsSection() {
    const skillsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (skillsRef.current) {
            gsap.from(skillsRef.current, {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 85%',
                    end: 'bottom 78%',
                    scrub: true,
                },
                opacity: 0,
                y: 50
            });
        }
    }, [skillsRef]);
    return (
        <article ref={skillsRef} className='w-full my-20 md:w-[640px]'>
            <InfiniteScrollIcons />
        </article>
    )
}