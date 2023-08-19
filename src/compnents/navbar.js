import Link from 'next/link'

function NavButton( {destination, label} ) {
	return (
		<div>
			<Link href={destination}>
				<button>{label}</button>
			</Link>
		</div>
	)
}


export default function Navbar() {
	return (
		<div>
			<NavButton destination='/' label='Charlie Zhao'/>   
			<NavButton destination='/music/' label='Music'/>    
			<NavButton destination='/resume/' label='Resume'/>  
		</div>
  )
}
