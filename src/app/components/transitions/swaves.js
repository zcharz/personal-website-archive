import Image from 'next/image'
import wave1 from '@/assets/wave1.svg'
import wave1_small from '@/assets/wave1-small.svg'
import wave2 from '@/assets/wave2.svg'
import wave2_small from '@/assets/wave2-small.svg'
import wave3 from '@/assets/wave3.svg'
import wave3_small from '@/assets/wave3-small.svg'


// sky 950 to sky 800
export function SWave1() {
  return (
    <div>
      <Image alt='transition' src={wave1}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block pointer-events-none'/>
      <Image alt='transition_small' src={wave1_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden pointer-events-none'/>
    </div>
  )
}

// sky 800 to rose 800
export function SWave2() {
  return (
    <div>
      <Image alt='transition' src={wave2}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block pointer-events-none'/>
      <Image alt='transition_small' src={wave2_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden pointer-events-none'/>
    </div>
  )
}

// rose 800 to rose 300
export function SWave3() {
  return (
    <div>
      <Image alt='transition' src={wave3}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block pointer-events-none'/>
      <Image alt='transition_small' src={wave3_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden pointer-events-none'/>
    </div>
  )
}