import portrait from '@/assets/portrait.jpg'
import Image from 'next/image'
import SocialLinks from './socials'


function TextIntro() {
  return (
    <div className='flex flex-col self-center 
    text-center lg:text-left'>
      <h1 className="text-4xl lg:text-5xl">
        Nice to meet you!
      </h1>

      <h1 className='text-4xl mt-1 lg:text-5xl'>
        I&apos;m <span className='text-rose-400'>Charlie</span>
      </h1>

      <h2 className='text-lg pt-4 lg:text-2xl'>
        Software Engineer • Student • Musician
      </h2>
    </div>
  )
}


function PortraitIcons() {
  return (
    <div className='flex self-center flex-col space-y-6'>
      <Image alt='portrait' src={portrait} 
      className='self-center rounded-full border-2 border-rose-400
      w-80 md:w-96'/>
      <SocialLinks/>
    </div>
  )
}


export default function Introduction() {
  return (
    <div className='flex flex-col pt-36 pb-10 bg-teal-100'>
      <div className='flex self-center 
      flex-col lg:flex-row lg:space-x-10
      lg:space-y-0 space-y-4'>
        <PortraitIcons/>
        <TextIntro/>
        
      </div>
    </div>
  )
}
