import Navbar from '@/app/components/navbar'
import Introduction from '@/app/components/introduction'
import LayeredWaves from '@/app/components/transitions/layeredwaves'
import AboutMe from '@/app/components/aboutme'
import Projects from '@/app/components/projects'
import Music from '@/app/components/music'
import Contact from '@/app/components/contact'
import { SWave1, SWave2, SWave3 } from '@/app/components/transitions/swaves'


export const metadata = {
  title: 'Hey there! - Charlie',
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>

      <LayeredWaves/>
      <AboutMe/>

      <SWave1/>
      <Projects/>

      <SWave2/>
      <Music/>
      
      <SWave3/>
      <Contact/>
    </div>
  )
}
