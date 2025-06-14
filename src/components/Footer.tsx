'use client'

import Image from 'next/image';
import BrandLogo from '@/assets/images/logo.webp';
import { SOCIAL_LINKS } from '@/consts/consts';
import React from 'react';

export default function Footer() {

  return (
    <footer className='footer sm:footer-horizontal bg-base-100   text-base-content items-center p-4 shadow-md '>
      <aside className='grid-flow-col items-center'>
        <Image
          src={BrandLogo}
          alt='Brand Logo'
          width={33}
          height={33}
          priority
        />
        <p>Hecho por Carlos Pulido en {new Date().getFullYear()}  </p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-center'>
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
