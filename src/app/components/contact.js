function TextContact() {
  return (
    <div className='xl:text-2xl lg:text-xl text-lg text-cyan-600 space-y-4'>
      <h1 className='xl:text-4xl lg:text-3xl text-2xl text-sky-800 font-bold'>
        Contact Me!
      </h1>

      <p>
        Feel free to reach out to me through email or Linkedin, or check out my projects on Github and music on YouTube!
      </p>

      <p>
      hellozhaocharlie@gmail.com | linkedin.com/in/zhao-charlie
      </p>

      <p>
      github.com/zcharz | youtube.com/@czmusic_
      </p>
    </div>
  )
}


export default function Contact() {
  return (
    <div className='flex flex-col items-center 
    pt-10 pb-32 bg-rose-200 space-y-16'>
      <div className='flex px-28 lg:px-0 lg:w-8/12 2xl:w-7/12 text-center lg:text-left'>
        <TextContact/>
      </div>
    </div>
  )
}  