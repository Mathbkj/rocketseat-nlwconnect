
import { PropsWithChildren,ComponentProps } from "react";
interface IconButtonProps extends PropsWithChildren,ComponentProps<'button'> {}

export function IconButton(props:IconButtonProps) {
  return (
      <button {...props} className="p-1.5 flex justify-between items-center h-12 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300" />
  );
}
