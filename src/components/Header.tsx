import clsx from 'clsx'
import { FC, useState, useEffect } from 'react'

const Header: FC = () => {
	const [active, setActive] = useState(false)

	const isScroll = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', isScroll)

		return () => {
			window.removeEventListener('scroll', isScroll)
		}
	}, [])

	return (
		<header
			className={clsx(
				'flex items-center justify-between py-5 px-3 sticky top-0 left-0 z-10 text-white mb-9 transition-all ease-in-out duration-500',
				active
					? 'bg-[#101041] shadow-serviceShadow rounded-b-lg'
					: 'bg-transparent'
			)}
		>
			<h1 className='text-2xl font-bold'>DevBoys</h1>
			<nav>
				<ul className='flex items-center gap-x-5'>
					<li className='font-semibold'>
						<a href='#'>Services</a>
					</li>
					<li className='font-semibold'>
						<a href='#'>Industries</a>
					</li>
					<li className='font-semibold'>
						<a href='#'>Portfolio</a>
					</li>
					<li className='font-semibold'>
						<a href='#'>Contact us</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
