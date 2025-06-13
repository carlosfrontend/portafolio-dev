import React from 'react'
import { type SocialLink } from '@/types/types'

export default function SocialLink({ href, title, srTitle, icon }: SocialLink) {
    return (
        <a href={href} target='_blank' className="transition ease-in-out hover:scale-110 duration-300" rel='noopener noreferrer' title={title}>
            <span className='sr-only'>{srTitle}</span>
            {icon && React.createElement(icon)}
        </a>
    )
}
