"use client"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Customeinput() {
  return (
   <InputGroup
  className="h-[49px] border-none bg-gray-100 focus-within:border-none focus-within:ring-0 flex-3"
>
      <InputGroupInput placeholder="  Enter Your Address"  className="bg-gray-100 border-none focus-within:border-none focus-within:ring-0 mr-2"/>
      <InputGroupAddon >
        <img src={"/assets/icons/locationRed.svg"} alt={"AppIcons not found"} width={18} height={34} />
      </InputGroupAddon  >
    </InputGroup>
  )
}
