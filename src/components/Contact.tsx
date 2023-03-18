import { FC } from 'react'
import Heading from './ui/Heading'
import Form from './Form'

const Contact: FC = () => {
	return (
		<section className='py-20'>
			<Heading>
				Contact &nbsp;
				<span className='text-blue-400'>Us</span>
			</Heading>
			<div className='grid sm:grid-cols-1 lg:grid-cols-contactCols gap-5'>
				<div>
					<div>
						<h2>Email us</h2>
						<p>info@devboys.com</p>
					</div>
					<div>
						<h2>Social links</h2>
						<p>info@devboys.com</p>
					</div>
				</div>
				<div className='bg-white rounded-lg'>
					<Form />
				</div>
			</div>
		</section>
	)
}

export default Contact
