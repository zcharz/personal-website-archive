import portrait from '@/assets/portrait.jpg'
import Image from 'next/image'
import { SocialLinksIntro } from './socials'


function TextIntro() {
  return (
    <div className='flex flex-col self-center 
    text-center lg:text-left'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl">
        Nice to meet you!
      </h1>

      <h1 className='mt-1 text-3xl md:text-4xl lg:text-5xl'>
        I&apos;m <span className='text-rose-400'>Charlie</span>
      </h1>

      <h2 className='text-lg md:text-xl pt-3 lg:pt-5 lg:text-2xl'>
        Software Engineer • Student • Musician
      </h2>

      <div className='hidden lg:block pt-5'>
        <SocialLinksIntro/>
      </div>
    </div>
  )
}


function PortraitIcons() {
  return (
    <div className='flex self-center flex-col space-y-6'>
      <Image alt='portrait' src={portrait} 
      className='self-center rounded-full border-2 border-rose-400 pointer-events-none
      w-72 md:w-80 lg:w-96'/>

      <div className='self-center lg:hidden'>
        <SocialLinksIntro/>
      </div>
    </div>
  )
}


export default function Introduction() {
  return (
    <div className='flex flex-col pt-56 bg-teal-100'>
      <div className='flex self-center 
      flex-col lg:flex-row lg:space-x-20
      lg:space-y-0 space-y-4'>
        <PortraitIcons/>
        <TextIntro/>
      </div>
    </div>
  )
}
