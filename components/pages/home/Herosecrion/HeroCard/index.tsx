"use client"

import { Separator } from "@/components/ui/separator"
import Customeinput from "./Customeinput"

export default function HeroCard(){
    return <div className="bg-white rounded-[16px]  flex flex-col justify-between  mt-6 ">
        <div className="flex gap-4 items-center p-6">
            <button className="flex items-center gap-2 px-6 py-2 rounded-sm bg-opacity-100 bg-warning/10 bg-obacity[0.1]" onClick={() => {}}>
                <img src={"/assets/icons/Delivery.svg"} alt={"AppIcons not found"} width={23} height={18} />
                <p className="text-warning font-bold text-18  ">Delivery</p>
            </button>
            <button className="flex items-center gap-2 px-2 py-2 ml-2 " onClick={() => {}}>
                <img src={"/assets/icons/Pickup.svg"} alt={"AppIcons not found"} width={16} height={18} />
                <p className="text-gray-600 text-18 font-bold">Pickup</p>
            </button>
        </div>
        <Separator className="bg-gray-300"/>
        <div className="p-6">
            <div className=" flex gap-4 items-center">
                <div className="flex-3">
                    <Customeinput  />
                </div>
                <div className="flex-1">
                    <button className="flex justify-center items-center w-full gap-2 h-[60px] bg-[#F65900] rounded-sm bg-gradient-to-r from-[#FF7A7A] to-[#F65900]" onClick={() => {}}>
                        <img  src={"/assets/icons/searchwhite.svg"} alt={"AppIcons not found"} width={14} height={14} />
                        <p className="text-white font-bold text-18">Find Food</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
}