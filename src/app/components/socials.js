import { RiLinkedinLine } from 'react-icons/ri'
import { LuGithub } from 'react-icons/Lu'
import { BiMusic } from 'react-icons/bi'
import {HiOutlineDocumentText} from 'react-icons/hi'

export default function SocialLinks() {
  return (
    // <div className='flex self-center lg:self-auto flex-row justify-end mt-4 mr-2'>
    <div className='flex self-center'>
      <a href='https://github.com/zcharz' target="_blank" 
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <LuGithub size={25}/>
      </a>

      <a href='https://www.linkedin.com/in/zhao-charlie/' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <RiLinkedinLine size={25} />
      </a>

      <a href='https://www.youtube.com/@czm.3354/featured' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <BiMusic size={25}/>
      </a>

      <a href='/Charlie_Zhao_Resume.pdf' target="_blank"
      className='mr-3 p-3 bg-teal-300 rounded-3xl cursor-pointer 
      hover:bg-pink-200 hover:rounded-xl duration-300'>
          <HiOutlineDocumentText size={25}/>
      </a>
    </div>
  )
}
