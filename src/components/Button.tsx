'use client'
import type { ComponentProps, PropsWithChildren } from 'react'
interface ButtonProps extends PropsWithChildren, ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
	return (
		<button
		{...props}
			className="px-5 flex justify-between items-center h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
		/>
	)
}
