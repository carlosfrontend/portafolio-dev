import Link from 'next/link';
import ProfilePicture from '@/assets/images/profile_picture.webp';
import Image from 'next/image';
import DownloadIcon from '@/components/icons/DownloadIcon';
import EmailIcon from './icons/EmailIcon';
import CopyEmailButton from './CopyEmailButton';

export default function Hero() {
  return (
    <div className='card bg-base-100 w-96  md:w-[480px] shadow-sm'>
      <div className='flex gap-4 justify-center items-center pt-10 flex-wrap flex-col md:flex-row'>
        <Link
          href={'/Carlos_Pulido_CV_ES_.pdf'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn btn-soft btn-xs sm:btn-sm md:btn-md btn-info transition-all ease-in-out duration-300 hover:scale-105'>
            {' '}
            <DownloadIcon />
            Descargar CV
          </button>
        </Link>
        <Link
          href={'mailto:carlosfrontend@hotmail.com'}
          rel='noopener noreferrer'
        >
          <button className='btn btn-soft btn-xs sm:btn-sm md:btn-md btn-secondary hover:scale-105 ease-in-out transition-all duration-300'>
            <EmailIcon />
            Enviar Email
          </button>
        </Link>
        <CopyEmailButton />
      </div>
      <Link
        href={'https://www.linkedin.com/in/carlosfrontend/'}
        rel='noopener noreferrer'
        target='_blank'
        className=' group outline-none hover:outline-none'
        title='Visita mi perfil de LinkedIn'
        tabIndex={0}
      >
        <figure className='px-10 pt-10 '>
          <div className='w-24 rounded-full transition-all duration-300 text-success md:text-white avatar avatar-online md:before:bg-gray-600 md:group-hover:before:bg-success'>
            <span className='text-xs text-center  absolute -inset-6 left-14.5 w-[15ch]  md:left-14 md:w-[30ch] md:top-0.5 md:group-hover:text-success group-hover:animate-pulse font-semibold'>
              Disponible para trabajar
            </span>
            <Image
              src={ProfilePicture}
              alt='Profile Picture'
              className='rounded-full bg-base-100  opacity-80 transition-all duration-300 group-hover:opacity-100  group-hover: backdrop-blur-md'
            />
          </div>
        </figure>
      </Link>
      <div className='card-body items-center text-center pb-10'>
        <h1 className=' text-pretty text-4xl font-extrabold'>
          Hola, soy{' '}
          <span className='bg-gradient-to-r from-accent to-primary bg-clip-text  font-extrabold text-transparent'>
            Carlos Pulido
          </span>
        </h1>
        <h2 className='text-2xl font-medium py-4'>
          Desarrollador Web Frontend
        </h2>
        <div className='card-actions animate-pulse'>
          <Link href='/about' className='btn btn-primary'>
            Conóceme
          </Link>
        </div>
      </div>
    </div>
  );
}
