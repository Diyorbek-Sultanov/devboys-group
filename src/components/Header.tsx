import clsx from 'clsx'
import { FC, useState, useEffect } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'

const Header: FC = () => {
	const [active, setActive] = useState(false)
	const [open, setOpen] = useState(false)

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
		<header className='w-full fixed top-0 left-0 z-20'>
			<div
				className={clsx(
					'md:flex items-center justify-between text-white py-4 md:px-10 px-7',
					active
						? 'bg-[#101041] shadow-serviceShadow rounded-b-lg'
						: 'bg-transparent'
				)}
			>
				<h1 className='text-2xl font-bold cursor-pointer'>DevBoys</h1>
				<div
					onClick={() => setOpen(!open)}
					className='absolute right-8 top-6 cursor-pointer md:hidden'
				>
					{open ? <IoClose fontSize={30} /> : <CiMenuFries fontSize={25} />}
				</div>
				<ul
					className={clsx(
						'md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in-out duration-500',
						{
							['top-[4.5rem] opacity-100 bg-[#2B3467]']: open === true,
							['top-[-490px] md:opacity-100 opacity-0']: open === false
						}
					)}
				>
					<li className='font-semibold md:ml-8 md:my-0 my-7 text-xl'>
						<a href='#'>Services</a>
					</li>
					<li className='font-semibold md:ml-8 md:my-0 my-7 text-xl'>
						<a href='#'>Industries</a>
					</li>
					<li className='font-semibold md:ml-8 md:my-0 my-7 text-xl'>
						<a href='#'>Portfolio</a>
					</li>
					<li className='font-semibold md:ml-8 md:my-0 my-7 text-xl'>
						<a href='#'>Contact us</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
