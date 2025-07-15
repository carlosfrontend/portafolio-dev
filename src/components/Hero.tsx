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
import { useRef, useLayoutEffect } from 'react';


export default function Hero({ blogCount, projectCount }: { blogCount: number, projectCount: number }) {
  gsap.registerPlugin(useGSAP, SplitText);

  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const linkButtonRef = useRef<HTMLAnchorElement>(null);

  const splitTextTitleInstance = useRef<SplitText | null>(null);
  const splitTextSubtitleInstance = useRef<SplitText | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);


  useGSAP(() => {
    document.fonts.ready.then(() => {
      if (!titleRef.current || !subtitleRef.current || !linkButtonRef.current) {
        console.warn("Algunas referencias de elementos no están disponibles para la animación principal.");
        return;
      }

      gsap.set([titleRef.current, subtitleRef.current, linkButtonRef.current], { clearProps: "all" });

      splitTextTitleInstance.current = SplitText.create(titleRef.current, { type: "words" });
      splitTextSubtitleInstance.current = SplitText.create(subtitleRef.current, { type: "words" });

      gsap.set(splitTextTitleInstance.current.words, { y: 10, autoAlpha: 0, filter: 'blur(3px)' });
      gsap.set(splitTextSubtitleInstance.current.words, { y: 8, autoAlpha: 0, filter: 'blur(2px)' });
      gsap.set(linkButtonRef.current, { opacity: 0, scale: 0.9 });


      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(splitTextTitleInstance.current.words, {
        y: 0,
        autoAlpha: 1,
        filter: 'blur(0px)',
        stagger: 0.06,
        duration: 0.4,
      }, "start")

        .to(splitTextSubtitleInstance.current.words, {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          stagger: 0.04,
          duration: 0.3,
        }, "<0.15")

        .to(linkButtonRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }, "<0.1");

      tlRef.current = tl;

    });
  }, { scope: titleRef });


  useLayoutEffect(() => {
    return () => {
      if (splitTextTitleInstance.current) {
        splitTextTitleInstance.current.revert();
        splitTextTitleInstance.current = null;
      }
      if (splitTextSubtitleInstance.current) {
        splitTextSubtitleInstance.current.revert();
        splitTextSubtitleInstance.current = null;
      }

      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, []);


  return (
    <section className='relative min-h-[100dvh] flex flex-col justify-start md:top-10 items-center'>
      <div className=' w-full md:w-[480px] shadow-base-300 flex flex-col justify-between md:shadow-md  shadow-none md:bg-base-100 rounded-md'>

        <a
          href={'https://www.linkedin.com/in/carlosfrontend/'}
          rel='noopener noreferrer'
          target='_blank'
          className='group'
          title='Visita mi perfil de LinkedIn'
          tabIndex={0}
        >
          <figure className='flex justify-center w-full p-4 mt-10 '>
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
          <h2 ref={titleRef} className=' text-pretty text-base-content text-4xl font-extrabold'>
            Hola, soy Carlos Pulido
          </h2>
          <h3 ref={subtitleRef} className='text-2xl text-base-content font-medium py-4'>
            Desarrollador Web Frontend
          </h3>

          <Link ref={linkButtonRef} href='#about' className='btn btn-primary w-full md:w-auto py-6 text-lg md:text-sm md:py-0 '>
            Conóceme
          </Link>
        </div>

        <div className='flex w-full p-4 md:w-full self-center gap-4 justify-center items-stretch  flex-wrap flex-col md:flex-row'>
          <a
            href={'/Carlos_Pulido_CV_ES_.pdf'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center items-center md:btn-md btn-info transition-all ease-in-out duration-300 hover:scale-105 sm:py-5 sm-px-2 py-6 text-lg md:text-sm md:py-0'>
              {' '}
              <DownloadIcon />
              Descargar CV
            </button>
          </a>
          <a
            href={'mailto:carlosfrontend@hotmail.com'}
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center md:btn-md btn-secondary hover:scale-105 ease-in-out transition-all duration-300 sm:py-5 sm-px-2 py-6 text-lg md:text-sm md:py-0'>
              <EmailIcon />
              Enviar Email
            </button>
          </a>
          <CopyEmailButton>Copiar Email</CopyEmailButton>
          <Stats blogCount={blogCount} projectCount={projectCount} />
        </div>
      </div>
    </section>
  );
}