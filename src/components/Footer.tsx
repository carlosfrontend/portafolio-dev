'use client'
import { SOCIAL_LINKS } from '@/consts/consts';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathName: string = usePathname()
  if (pathName.match(/\/studio\/*/)) return null
  return (
    <footer className='footer mt-auto flex sm:footer-horizontal bg-base-100   text-base-content items-center justify-center gap-6 p-10 flex-col'>
      <aside className='flex flex-col items-center'>
        <p className='text-base-content/80'>Desarrollado por Carlos Pulido</p>
        <p className='text-base-content/80'>en {new Date().getFullYear()}</p>
      </aside>
      <nav className='flex self-center gap-6'>
        {
          SOCIAL_LINKS.map(({ href, icon, srTitle }) => (
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              key={href}
              className='transition ease-in-out hover:scale-110 duration-300'
              title={srTitle}
            >
              <span className='sr-only'>{srTitle}</span>
              {icon && React.createElement(icon)}
            </a>
          ))
        }
      </nav>
    </footer>
  );
}
