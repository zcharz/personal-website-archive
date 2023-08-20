import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/socials'

import Head from 'next/head'


export default function Home() {
  return (
    <div className='flex'>
      <Head>
        <title>Contact - Charlie</title>
      </Head>

      <Navbar/>
      <Footer/>
    </div>
  )
}
