import Image from 'next/image'
import waves from '@/assets/layered-waves-haikei.svg'
import waves_small from '@/assets/layered-waves-haikei-small.svg'

export default function Transition() {
  return (
    <div>
      <Image alt='transition' src={waves}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block'/>
      <Image alt='transition_small' src={waves_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden'/>
    </div>
  )
}

