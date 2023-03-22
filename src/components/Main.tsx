import { FC } from 'react'

const Main: FC = () => {
	return (
		<div className='text-white xs:h-[300px] sm:h-[335px] md:h-[400px] lg:h-[570px]'>
			<div className='pt-40'>
				<h1 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-7xl leading-tight uppercase mb-7'>
					your &nbsp;
					<span className='font-light'>
						trused <br /> it &nbsp;
					</span>
					partner
				</h1>
				<p>We don’t just build the software, we build the entire solution.</p>
			</div>
		</div>
	)
}

export default Main
