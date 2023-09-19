function TextProjects() {
  return (
    <div className='xl:text-2xl lg:text-xl text-lg text-rose-100 space-y-4'>
      <h1 className='xl:text-4xl lg:text-3xl text-2xl text-rose-400 font-bold'>
        Projects
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </div>
  )
}


export default function Projects() {
  return (
    <div className='flex flex-col items-center 
    pt-10 bg-sky-800 space-y-16'>
      <div className='flex px-28 lg:px-0 lg:w-8/12 2xl:w-7/12 text-center lg:text-left'>
        <TextProjects/>
      </div>
    </div>
  )
}