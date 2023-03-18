import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<h1 className='font-bold text-5xl max-w-[800px] leading-tight uppercase mb-7'>
			{children}
		</h1>
	)
}

export default Heading
