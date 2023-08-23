'use client'
import {CgFormatJustify} from 'react-icons/cg'
import Link from 'next/link'
import {useState} from 'react'
 

function NavButton( {label, destination} ) {
	return (
		<div className='text-gray-800 hover:text-teal-500 duration-300'>
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
		<div className='w-full fixed top-0 left-0 z-0'>
			<div className='md:flex items-center justify-between bg-slate-100 py-7 px-14 shadow-md'>
				{/* left main button */}
				<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
					<NavButton  label='Charlie Zhao' destination='/'/>   
				</div>

				{/* menu button */}
				<div onClick={()=>setOpen(!open)}
				className='absolute right-14 top-8 cursor-pointer md:hidden
				hover:text-cyan-600 duration-300'>
					<CgFormatJustify name={open ? 'close':'menu'} size='30'/>
				</div>

				{/* right navbuttons */}
				<ul className='hidden md:flex md:items-center '>
					{ Links.map( ({label, destination}) => (
						<li key={label} className='text-xl ml-8 pl-16'>
							<NavButton label={label} destination={destination} /> 
						</li>
					)) }
				</ul>				
			</div>
			
			{/* dropdown */}
			<ul className={`md:hidden shadow-md pb-0 absolute bg-slate-100 z-[-1] left-0 w-full pl-14 
				transition-all duration-200 ease-in ${open ? 'top-20 ':'top-[-150px]'}`}>
					{ Links.map( ({label, destination}) => (
						<li key={label} className='text-xl my-8'>
							<NavButton label={label} destination={destination} /> 
						</li>
					)) }
			</ul>
		</div>
  )
}

