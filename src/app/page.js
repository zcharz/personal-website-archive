import Navbar from '@/app/components/navbar'
import Introduction from '@/app/components/introduction'
import Transition from '@/app/components/transition'
import AboutMe from '@/app/components/aboutme'

export const metadata = {
  title: 'Hey there! - Charlie',
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Transition/>

      <AboutMe/>
    </div>
  )
}
