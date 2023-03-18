import { FC } from 'react'
import { FcGlobe, FcTabletAndroid, FcSelfServiceKiosk } from 'react-icons/fc'
import Heading from './ui/Heading'

const Services: FC = () => {
	return (
		<section className='pt-20'>
			<Heading>
				End-to-end product development by
				<span className='text-blue-400'>professionals</span>
			</Heading>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcTabletAndroid className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>
						Mobile App <br /> Development
					</h3>
					<p>
						Launch high-quality mobile apps empowered by latest and robust
						technologies
					</p>
					<div className='service-active'></div>
				</div>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcSelfServiceKiosk className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>
						Custom Software <br /> Development
					</h3>
					<p>
						Service covering all phases of product development, from beginning
						to launch
					</p>
				</div>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcGlobe className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>Web Development</h3>
					<p>
						Launch your custom web solutions in a short period using the latest
						technologies
					</p>
				</div>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcGlobe className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>Web Development</h3>
					<p>
						Launch your custom web solutions in a short period using the latest
						technologies
					</p>
				</div>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcGlobe className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>Web Development</h3>
					<p>
						Launch your custom web solutions in a short period using the latest
						technologies
					</p>
				</div>
				<div className='p-servicePadding bg-[#282A3A] rounded-2xl min-h-[310px] shadow-serviceShadow relative overflow-hidden transition-all ease-in-out duration-500 hover:scale-95'>
					<FcGlobe className='mb-10' fontSize='50px' />
					<h3 className='font-bold text-3xl mb-5'>Web Development</h3>
					<p>
						Launch your custom web solutions in a short period using the latest
						technologies
					</p>
				</div>
			</div>
		</section>
	)
}

export default Services
