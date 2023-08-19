import Navbar from '@/compnents/navbar'
import Footer from '@/compnents/socials'

import Head from 'next/head'


export default function Home() {
    return (
      <div className='flex'>
        <Head>
          <title>Music - Charlie</title>
        </Head>

        <Navbar/>
        <Footer/>
      </div>
    )
  }
