import Link from 'next/link'
import {useState} from 'react'

function NavButton( {label, destination} ) {
	return (
		<div className='text-gray-800 hover:text-cyan-600 duration-200'>
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
		{label: 'Contact', destination:'/Contact/'},
	]
	let [open, setOpen] = useState(false)

	return (
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				{/* left main button */}
				<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
					<NavButton  label='Charlie Zhao' destination='/'/>   
				</div>

				<div onClick={()=>setOpen(!open)}
				className='text-xl absolute right-8 top-6 cursor-pointer md:hidden
				hover:text-cyan-600 duration-200'>
					<p name={open ? 'close':'menu'}>Menu</p>
				</div>


				{/* right button list */}
				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
					{ Links.map( ({label, destination}) => (
						<li key={label} className='md:ml-8 text-xl md:my-0 my-7'>
							<NavButton label={label} destination={destination} /> 
						</li>
					)) }
				</ul>

			</div>
		</div>
  )
}