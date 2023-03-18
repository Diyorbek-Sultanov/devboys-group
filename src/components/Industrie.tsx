import Slider from './Slider'
import { FC } from 'react'
import Heading from './ui/Heading'

const Industrie: FC = () => {
	return (
		<section className='pt-24'>
			<Heading>
				Our industry <span className='text-blue-400'>expertise</span>
			</Heading>
			<Slider />
		</section>
	)
}

export default Industrie
