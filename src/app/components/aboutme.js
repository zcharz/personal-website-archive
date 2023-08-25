function TextAbout() {
  return (
    <div className='text-center lg:text-left'>
      <div className='text-4xl text-rose-100 '>
        About Me
      </div>

      <p className='text-2xl text-cyan-100 pt-4'>
        Hey there! I&apos;m Charlie, currently a third year student 
        studying Computer Science at UCI. 
        I&apos;m always looking for new ways I can apply
        the concepts I&apos;ve learned from classes
        and projects to my life. 
        Looking to go into the AI field, but I&apos;m 
        also exploring other aspects of programming to 
        find what I enjoy most.
      </p>

      <p className='text-2xl text-cyan-100 pt-4'>
        Outside of programming, I enjoy playing the saxophone 
        and producing electronic music under the alias &quot;czm.&quot;. 
        Check out my song named snooze below!
      </p>
    </div>
  )
}


function MusicYT() {
  return (
    <iframe 
    className="aspect-video w-2/5"
    src="https://www.youtube.com/embed/exlHo5IazSs?si=jqhHGi6Uxd7a8P26&amp;start=32" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  )
}




export default function AboutMe() {
  return (
    <div className='flex flex-col items-center 
    pt-10 pb-32 bg-sky-950 space-y-16'>
      <div className='flex px-28 lg:w-4/5 xl:w-3/5'>
        <TextAbout/>
      </div>

      <MusicYT/>
    </div>
  )
}
