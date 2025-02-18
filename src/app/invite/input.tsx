'use client'
import { IconButton } from "@/components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { Copy, Link } from "lucide-react";

interface Props {
    inviteLink:string;
}

export function Input({inviteLink}:Props){
    return <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>
            <InputField
              readOnly
              defaultValue={inviteLink}
            />
            <IconButton onClick={()=>{
                navigator.clipboard.writeText(inviteLink)
            }} className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>
}