import { FC, forwardRef } from 'react'
import { IField } from './input.interface'

const Input: FC = forwardRef<HTMLInputElement, IField>(
	({ label, type = 'text', ...rest }, ref) => {
		return (
			<div className='relative'>
				<input
					className='outline-none py-2 border-b mb-3 px-3 w-full text-black placeholder:font-light focus:border-blue-500 transition-all input'
					type={type}
					ref={ref}
					required={true}
					{...rest}
				/>
				<span className='absolute left-0 pointer-events-none py-2 px-3 mb-3 text-gray-400 transition-all'>
					{label}
				</span>
			</div>
		)
	}
)

Input.displayName = 'Field'

export default Input
