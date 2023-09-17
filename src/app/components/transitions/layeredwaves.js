import Image from 'next/image'
import layered_waves from '@/assets/layered-waves-haikei.svg'
import layered_waves_small from '@/assets/layered-waves-haikei-small.svg'

export default function LayeredWaves() {
  return (
    <div>
      <Image alt='transition' src={layered_waves}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block'/>
      <Image alt='transition_small' src={layered_waves_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden'/>
    </div>
  )
}

// bg start - teal-100
// wave start - cyan-300
// bg end-sky-950

