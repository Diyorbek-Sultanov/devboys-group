import { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
	return (
		<button
			className='bg-blue-500 w-full py-3 px-4 cursor-pointer rounded-md hover:bg-blue-600 transition-colors mt-5 outline-none focus:bg-blue-600'
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
