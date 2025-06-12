import Image from 'next/image';
import BrandLogo from '@/assets/images/logo.png';
import LinkedInIcon from './icons/LinkedinIcon';
import GitHubIcon from './icons/GitHubIcon';
import XIcon from './icons/XIcon';
import DiscordIcon from './icons/DiscordIcon';

export default function Footer() {
  return (
    <footer className='footer sm:footer-horizontal bg-base-100   text-base-content items-center p-4 shadow-md absolute bottom-0 left-0'>
      <aside className='grid-flow-col items-center'>
        <Image
          src={BrandLogo}
          alt='Brand Logo'
          width={33}
          height={33}
          priority
        />
        <p>Hecho por Carlos Pulido en {new Date().getFullYear()} </p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-center'>
        <a href='https://www.linkedin.com/in/carlosfrontend/' target='_blank' className="transition ease-in-out hover:scale-110 duration-300" rel='noopener noreferrer' title='Visita mi perfil de LinkedIn'>
          <span className='sr-only'>LinkedIn</span>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/carlosfrontend' target='_blank' className="transition ease-in-out hover:scale-110 duration-300" rel='noopener noreferrer' title='Visita mi perfil de GitHub'>
          <span className='sr-only'>GitHub</span>
          <GitHubIcon />
        </a>
        <a href='https://twitter.com/carlosfrontend' target='_blank' className='transition ease-in-out hover:scale-110 duration-300' rel='noopener noreferrer' title='Visita mi perfil de Twitter'>
          <span className='sr-only'>Twitter</span>
          <XIcon />
        </a>
        <a href='https://discord.com/invite/2wyag2pN6q' className='transition ease-in-out hover:scale-110 duration-300' target='_blank' rel='noopener noreferrer' title='Únete a mi servidor de Discord'>
          <span className='sr-only'>Discord</span>
          <DiscordIcon />
        </a>
      </nav>
    </footer>
  );
}
