'use client'


import Navbar from '@/app/components/navbar'
import AboutMe from '@/app/components/aboutme'
import Introduction from '@/app/components/introduction'
import Footer from '@/app/components/socials'


import Head from 'next/head'



export default function Home() {
  return (
    <div className='bg-cyan-600 w-full h-screen'>
      {/* <Head>
        <title>Hey there! - Charlie</title>
      </Head> */}


      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}


