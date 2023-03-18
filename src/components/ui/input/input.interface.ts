import { InputHTMLAttributes } from 'react'

export interface IFieldProp {
	label?: string
}

type TInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProp

export interface IField extends TInputPropsField {}
