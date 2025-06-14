import Link from 'next/link';
import ProfilePicture from '@/assets/images/profile_picture.webp';
import Image from 'next/image';
import DownloadIcon from '@/components/icons/DownloadIcon';
import EmailIcon from './icons/EmailIcon';
import CopyEmailButton from './CopyEmailButton';
import Stats from './Stats';

export default function Hero() {
  return (
    <div className='relative top-0 min-h-dvh flex justify-center items-center bg-none md:bg-base-200'>
      <div className=' w-96 md:w-[480px] flex flex-col justify-between mdshadow-md bg-none shadow-none md:bg-base-100'>

        <a
          href={'https://www.linkedin.com/in/carlosfrontend/'}
          rel='noopener noreferrer'
          target='_blank'
          className='group'
          title='Visita mi perfil de LinkedIn'
          tabIndex={0}
        >
          <figure className='flex justify-center pt-10 '>
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
        <div className='card-body  items-center justify-center text-center text-primary-content'>
          <h1 className=' text-pretty text-base-content text-4xl font-extrabold'>
            Hola, soy{' '}
            <span className='bg-gradient-to-r from-accent to-primary bg-clip-text  font-extrabold text-transparent'>
              Carlos Pulido
            </span>
          </h1>
          <h2 className='text-2xl text-base-content font-medium py-4'>
            Desarrollador Web Frontend
          </h2>
          <div className='card-actions motion-safe:animate-pulse'>
            <Link href='/about' className='btn btn-primary'>
              Conóceme
            </Link>
          </div>
        </div>

        <div className='flex  w-[180px] md:w-full self-center gap-4 justify-center items-stretch  flex-wrap flex-col md:flex-row'>
          <Link
            href={'/Carlos_Pulido_CV_ES_.pdf'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center items-center md:btn-md btn-info transition-all ease-in-out duration-300 hover:scale-105 sm:py-5 sm-px-2'>
              {' '}
              <DownloadIcon />
              Descargar CV
            </button>
          </Link>
          <Link
            href={'mailto:carlosfrontend@hotmail.com'}
            rel='noopener noreferrer'
          >
            <button className='btn btn-soft btn-md sm:btn-sm w-full flex justify-center md:btn-md btn-secondary hover:scale-105 ease-in-out transition-all duration-300 sm:py-5 sm-px-2'>
              <EmailIcon />
              Enviar Email
            </button>
          </Link>
          <CopyEmailButton>Copiar Email</CopyEmailButton>
          <Stats />
        </div>
      </div>
    </div>
  );
}
