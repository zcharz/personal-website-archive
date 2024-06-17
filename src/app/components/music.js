import MusicEmbed from "./music/musicembed"
import Link from 'next/link'

function TextMusic() {
  return (
    <div className='xl:text-2xl lg:text-xl text-lg text-white space-y-4'>
      <h1 className='xl:text-4xl lg:text-3xl text-2xl text-rose-100 font-bold'>
        Music
      </h1>

      <p>
        Whether I&apos;m feeling down or inspired, 
        music always provides a safe haven for me to express myself. 
        No matter what, I can always count on picking up the saxophone and jamming 
        to make my day better. 
        I especially enjoy playing saxophone solos in electronic music, 
        since I also produce electronic music. 
      </p>

      <p>
        As I mentioned previously, I produce music under the alias 
        <span className='font-bold'>&nbsp;czm.&nbsp;</span>
        I like to experiment with a wide range of genres, including future bass, lofi, melodic dubstep, and many more. 
      </p>

      <p>
        Be sure to follow me on YouTube&nbsp;
        <Link href='https://www.youtube.com/@czmusic_' target="_blank" 
        className='underline text-rose-200 hover:text-cyan-300 duration-200'>here</Link> 
        &nbsp;to catch my latest songs and check out my lofi song named 
        <span className='font-bold'> snooze </span>
        below!
      </p>
    </div>
  )
}

export default function Music() {
  return (
    <div className='flex flex-col items-center 
    pt-10 bg-rose-800 space-y-16'>
      <div className='flex px-28 lg:px-0 lg:w-8/12 2xl:w-7/12 text-center lg:text-left'>
        <TextMusic/>
      </div>
      <MusicEmbed/>
    </div>
  )
}
