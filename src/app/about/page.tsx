import AboutDetail from '../../components/Page-Components/AboutDetail';
import Background from '@/components/UI/Background';
import aboutBG from './../../../public/img/palette-1.png';

export default function About() {
  return (
    <section className='relative z-1 p-8'>
      <Background image={aboutBG} />
      <h1 className='text-center font-cinzelDecorative text-yomogi-11 text-4xl tracking-widest mt-6 mb-2 2xs:text-5xl xs:text-6xl'>
        YoMogi
      </h1>
      <p className='text-center font-cormorantGaramond italic text-base tracking-normal mb-3 2xs:text-lg xs:text-xl'>
        Japanese-Fusion Gastropub
      </p>
      <div className='w-full max-w-lg mx-auto'>
        <AboutDetail />
      </div>
    </section>
  );
}
