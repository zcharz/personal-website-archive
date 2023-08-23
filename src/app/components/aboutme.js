function TextAbout() {
  return (
    <div className='text-center lg:text-left'>
      <div className='text-4xl text-rose-100 '>
        About Me
      </div>

      <p className='text-xl text-cyan-100 pt-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ac feugiat sed lectus vestibulum mattis ullamcorper. 
        Donec pretium vulputate sapien nec sagittis. 
        Diam vulputate ut pharetra sit amet. 
        Pretium vulputate sapien nec sagittis aliquam malesuada 
        bibendum arcu. Proin nibh nisl condimentum id venenatis. 
        Lacus sed viverra tellus in hac. 
        Felis imperdiet proin fermentum leo. 
        Elementum nibh tellus molestie nunc. 
        Ac turpis egestas integer eget aliquet.
      </p>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className='flex flex-col pt-10 pb-32 bg-sky-950'>
      <div className='flex px-28 lg:px-44 xl:px-72'>
        <TextAbout/>
      </div>
    </div>
  )
}
