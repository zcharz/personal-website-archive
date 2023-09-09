import { RiLinkedinLine } from 'react-icons/ri'
import { LuGithub } from 'react-icons/lu'
import { BiMusic } from 'react-icons/bi'
import {HiOutlineDocumentText} from 'react-icons/hi'

import Link from 'next/link'

export default function SocialLinks() {
  return (
    // <div className='flex self-center lg:self-auto flex-row justify-end mt-4 mr-2'>
    <div className='flex self-center'>
      <Link href='https://github.com/zcharz' target="_blank" 
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <LuGithub size={25}/>
      </Link>

      <Link href='https://www.linkedin.com/in/zhao-charlie/' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <RiLinkedinLine size={25} />
      </Link>

      <Link href='https://www.youtube.com/@czmusic_' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <BiMusic size={25}/>
      </Link>

      <Link href='/Charlie_Zhao_Resume.pdf' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <HiOutlineDocumentText size={25}/>
      </Link>
    </div>
  )
}
