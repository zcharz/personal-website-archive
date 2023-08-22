import Image from 'next/image'
import waves from '@/assets/layered-waves-haikei.svg'

export default function Transition() {
  return (
    <div>
      <Image alt='transition' src={waves}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover'/>
    </div>
  )
}

