function TextAbout() {
  return (
    <div className='xl:text-2xl lg:text-xl text-lg text-cyan-100 space-y-4'>
      <h1 className='xl:text-4xl lg:text-3xl text-2xl text-rose-100'>
        About Me
      </h1>

      <p>
        Hey there! I&apos;m Charlie, currently a third year student 
        studying Computer Science at UCI. 
        I&apos;m always looking for new ways I can apply
        the concepts I&apos;ve learned from classes
        and projects to my life. 
        Looking to go into the AI field, but I&apos;m 
        also experimenting with other aspects of programming to 
        find what I enjoy most. Your looking at one such experiment right now!
      </p>

      <p>
        Outside of programming, I enjoy playing the saxophone 
        and producing electronic music under the alias 
        <span className='font-bold'>&nbsp;czm.&nbsp;</span>
      </p>

      <p>
        You can find more about my programming projects and music below. 
      </p>
    </div>
  )
}


export default function AboutMe() {
  return (
    <div className='flex flex-col items-center 
    pt-10 pb-32 bg-sky-950 space-y-16'>
      <div className='flex px-28 lg:px-0 lg:w-8/12 2xl:w-7/12 text-center lg:text-left'>
        <TextAbout/>
      </div>
    </div>
  )
}
