import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<h1 className='font-bold xs:text-2xl  md:text-3xl lg:text-4xl text-5xl max-w-[800px] leading-tight uppercase mb-7'>
			{children}
		</h1>
	)
}

export default Heading
