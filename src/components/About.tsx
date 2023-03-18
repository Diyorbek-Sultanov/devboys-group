import { FC } from 'react'
import Heading from './ui/Heading'

const About: FC = () => {
	return (
		<section className='pt-24'>
			<Heading>
				About <span className='text-blue-400'>DevBoys</span>
			</Heading>
			<div className='flex flex-wrap gap-x-10'>
				<img
					className='overflow-hidden rounded-md w-[500px] h-[500px] object-cover md:mb-5'
					src='https://mohitpawar.com/wp-content/uploads/2010/10/unknown.jpg'
					alt='photo'
				/>
				<div className='max-w-[600px]'>
					<h2 className='font-bold text-2xl mb-5'>Murtazo</h2>
					<span className='font-light mb-7 block'>Python backend</span>
					<p className='leading-relaxed'>
						We develop custom mobile apps, web apps, and websites. As a company,
						we try to keep the optimal tradeoff between cost and quality. Our
						differentiation point is in quality, cost, team, and company
						culture.
					</p>
					&nbsp;
					<p className='leading-relaxed'>
						We develop custom mobile apps, web apps, and websites. As a company,
						we try to keep the optimal tradeoff between cost and quality. Our
						differentiation point is in quality, cost, team, and company
						culture.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
