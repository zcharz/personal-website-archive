import { BiLogoLinkedin} from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'


function Icons() {
  return (
    <div className='flex self-center flex-row justify-end px-2'>
      <a href='https://www.youtube.com/@czm.3354/featured' className=''>
          <HiOutlineDocumentText size={25}/>
      </a>
      <a href={'https://github.com/zcharz'} className=''>
          <FaGithubAlt size={25}/>
      </a>
      <a href={'https://www.linkedin.com/in/zhao-charlie/'} className=''>
          <BiLogoLinkedin size={25} />
      </a>
    </div>
  )
}



export default function Footer() {
  return (
    <div>
        <Icons/>
    </div>
  )
}