import Hero from '@/components/Hero'
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <article className='flex  items-start pt-10 md:justify-center justify-center min-h-screen drop-shadow-xl'>
      <ToastContainer />
      <Hero />
    </article>
  );
}
