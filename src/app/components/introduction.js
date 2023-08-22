import portrait from '@/assets/portrait.jpg'
import Image from 'next/image'
import SocialLinks from './socials'


function TextIntro() {
  return (
    <div className="flex flex-col self-center">
      <div className="text-4xl">
        Nice to meet you! 
      </div>

      <div className='text-4xl'>
        I&apos;m <span className="text-rose-400">Charlie</span>
      </div>

      <div className="flex flex-row font-mono md:text-2xl text-xs ">
        Software Engineer • Student • Musician
      </div>
    </div>
  )
}


function Portrait() {
  return (
    <div className="flex self-center flex-col">
      <Image alt="portrait" src={portrait} 
      className='self-center rounded-full border-2 border-rose-400 mb-9'/>
      <SocialLinks/>
    </div>
  )
}


export default function Introduction() {
  return (
    <div className="flex flex-col pt-32 bg-teal-100 ">
      <div className="flex flex-col md:flex-row font-quicksand self-center">
        <Portrait/>
        
        <TextIntro/>
      </div>
    </div>
  )
}
