import Navbar from '@/compnents/navbar'
import AboutMe from '@/compnents/aboutme'
import Introduction from '@/compnents/introduction'
import Footer from '@/compnents/socials'


import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex'>
      <Head>
        <title>Hey there! - Charlie</title>
      </Head>

      <Navbar/>

      <Introduction/>
      <AboutMe/>

      <Footer/>

    </div>
  )
}
