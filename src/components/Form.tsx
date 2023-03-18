import { FC } from 'react'
import Button from './ui/button/Button'
import Input from './ui/input/Input'

const Form: FC = () => {
	return (
		<form className='py-10 px-5'>
			<Input type={'email'} label={'Email'} />
			<Input label={'Name'} />
			<Input label={'Message'} />
			<Button type='submit'>Send</Button>
		</form>
	)
}

export default Form
