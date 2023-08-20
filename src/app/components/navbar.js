'use client'

import Link from 'next/link'
import {useState} from 'react'

function NavButton( {label, destination} ) {
	return (
		<div className='text-gray-800 hover:text-cyan-600 duration-300'>
			<Link href={destination}>
				<button>{label}</button>
			</Link>
		</div>
	)
}


export default function Navbar() {
	let Links = [
		{label: 'Projects', destination:'/projects/'},
		{label: 'Music', destination:'/music/'},
		{label: 'Contact', destination:'/contact/'}
	]
	
	let [open, setOpen] = useState(false)

	return (
		<div className=' w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7 shadow-md'>
				{/* left main button */}
				<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
					<NavButton  label='Charlie Zhao' destination='/'/>   
				</div>

				{/* menu button */}
				<div onClick={()=>setOpen(!open)}
				className='text-xl absolute right-8 top-4 cursor-pointer md:hidden
				hover:text-cyan-600 duration-300'>
					<p name={open ? 'close':'menu'}>Menu</p>
				</div>

				{/* right navbuttons */}
				<ul className='hidden md:flex md:items-center '>
					{ Links.map( ({label, destination}) => (
						<li key={label} className='text-xl ml-8 my-0'>
							<NavButton label={label} destination={destination} /> 
						</li>
					)) }
				</ul>				

			</div>
			
			{/* dropdown */}
			<ul className={`md:hidden shadow-md pb-0 absolute bg-gray-200 z-[-1] left-0 w-full pl-7 
				transition-all duration-200 ease-in ${open ? 'top-14 ':'top-[-150px]'}`}>
					{ Links.map( ({label, destination}) => (
						<li key={label} className='text-xl md:ml-8 my-7'>
							<NavButton label={label} destination={destination} /> 
						</li>
					)) }
				</ul>
		</div>
  )
}

