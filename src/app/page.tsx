import Hero from '@/components/Hero'
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <article className='flex  items-center justify-center min-h-screen drop-shadow-xl'>
      <ToastContainer />
      <Hero />
    </article>
  );
}
