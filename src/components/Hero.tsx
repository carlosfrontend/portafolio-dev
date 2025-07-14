'use client'
import Link from 'next/link';
import ProfilePicture from '@/assets/images/profile_picture.webp';
import Image from 'next/image';
import DownloadIcon from '@/components/icons/DownloadIcon';
import EmailIcon from './icons/EmailIcon';
import CopyEmailButton from './CopyEmailButton';
import Stats from './Stats';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';


export default function Hero({ blogCount, projectCount }: { blogCount: number, projectCount: number }) {
  gsap.registerPlugin(useGSAP, SplitText);
  const title = useRef<HTMLDivElement>(null);
  const subtitle = useRef<HTMLDivElement>(null);
  const linkButton = useRef<HTMLAnchorElement>(null);


  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitTextTitle = SplitText.create(title.current, { type: "words" });
      const splitTextSubtitle = SplitText.create(subtitle.current, { type: "words" });
      gsap.from(splitTextTitle.words, {
        y: 10,
        autoAlpha: 0,
        stagger: 0.2,
        filter: 'blur(10px)',
        duration: 1
      })

      gsap.from(
        splitTextSubtitle.words, {
        y: 8,
        autoAlpha: 0,
        stagger: 0.2,
        filter: 'blur(10px)',
        delay: 1
      }
      )
      gsap.from(linkButton.current, {
        scale: 1.1,
        opacity: 0,
        delay: 2
      })
      gsap.to(linkButton.current, {
        scale: 1,
        opacity: 1,
        delay: 2
      })
    })

  });

  return (
    <article className='relative h-full bg-base-200 flex justify-center items-center bg-none py-2 '>
      <div className=' w-96 md:w-[480px] shadow-base-300 flex flex-col justify-between md:shadow-md bg-none shadow-none md:bg-base-100 rounded-md'>

        <a
          href={'https://www.linkedin.com/in/carlosfrontend/'}
          rel='noopener noreferrer'
          target='_blank'
          className='group'
          title='Visita mi perfil de LinkedIn'
          tabIndex={0}
        >
          <figure className='flex justify-center mt-10 w-full p-4 '>
            <div className='w-24 rounded-full text-success md:text-base-content avatar avatar-online'>
              <span className='text-xs text-center  absolute -inset-6 left-20 w-[15ch]  md:left-14 md:w-[30ch] md:top-0. font-semibold pt-6'>
                Disponible para trabajar
              </span>
              <Image
                src={ProfilePicture}
                alt='Profile Picture'
                className='rounded-full bg-base-100  opacity-85 transition-opacity duration-300 group-hover:opacity-100  group-hover: backdrop-blur-md'
              />
            </div>
          </figure>
        </a>
        <div className='card-body w-full  items-center justify-center text-center text-primary-content p-4'>
          <p ref={title} className=' text-pretty text-base-content text-4xl font-extrabold'>
            Hola, soy  Carlos Pulido
          </p>
          <h2 ref={subtitle} className='text-2xl text-base-content font-medium py-4'>
            Desarrollador Web Frontend
          </h2>

          <Link ref={linkButton} href='/about' className='btn btn-primary w-full md:w-auto '>
            Conóceme
          </Link>
        </div>

        <div className='flex min-w-[180px] p-4 md:w-full self-center gap-4 justify-center items-stretch  flex-wrap flex-col md:flex-row'>
          <a
            href={'/Carlos_Pulido_CV_ES_.pdf'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center items-center md:btn-md btn-info transition-all ease-in-out duration-300 hover:scale-105 sm:py-5 sm-px-2'>
              {' '}
              <DownloadIcon />
              Descargar CV
            </button>
          </a>
          <a
            href={'mailto:carlosfrontend@hotmail.com'}
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center md:btn-md btn-secondary hover:scale-105 ease-in-out transition-all duration-300 sm:py-5 sm-px-2'>
              <EmailIcon />
              Enviar Email
            </button>
          </a>
          <CopyEmailButton>Copiar Email</CopyEmailButton>
          <Stats blogCount={blogCount} projectCount={projectCount} />
        </div>
      </div>
    </article>
  );
}
