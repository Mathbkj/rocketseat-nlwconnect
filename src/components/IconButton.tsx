'use client'
import type { PropsWithChildren, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface IconButtonProps extends PropsWithChildren,ComponentProps<'button'> {}

export function IconButton({className,onClick,...props}:IconButtonProps) {
  return (
      <button onClick={onClick} {...props} className={
              twMerge('px-2.5 flex justify-between items-center h-9 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',className)
						}/>
  );
}
