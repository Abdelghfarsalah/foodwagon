"use client"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
export default function Herosecrion(){
    return <section>
        <div className="w-full bg-hero-yellow bg-cover bg-no-repeat bg-center shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ">
            <div className="container m-auto pl-2 flex flex-col xl:flex-row  justify-between items-center ">
                <div className="flex-7 pl-7 pt-23 pb-5  xl:pb-42">
                    <div className="flex flex-col ">
                    <p className="   leading-none text-white  text-[35px] md:text-[43px] 2xl:text-[88px] font-bold">Are you starving?</p>
                    <p className="text-22 pt-3 text-muted-text ">Within a few clicks, find meals that are accessible near you</p>
                    </div>
                    <div className="bg-white rounded-[16px]  flex flex-col justify-between  mt-6 mr-4 md:mr-0 ">
                    <div className="flex gap-4 items-center p-6">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-[8px] bg-opacity-100 bg-warning/10 bg-obacity[0.1]" onClick={() => {}}>
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
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-3 w-full">
                                <InputGroup className="h-[49px] border-none bg-gray-100 focus-within:border-none focus-within:ring-0 flex-3" >
                                    <InputGroupInput placeholder="  Enter Your Address"  className="bg-gray-100 border-none focus-within:border-none focus-within:ring-0 mr-2"/>
                                    <InputGroupAddon >
                                        <img src={"/assets/icons/locationRed.svg"} alt={"AppIcons not found"} width={18} height={34} />
                                    </InputGroupAddon  >
                                </InputGroup>
                            </div>
                            <div className="flex-1">
                                <button className="flex justify-center items-center min-w-[199px] w-full gap-2 h-[60px] bg-cta-orange rounded-sm bg-gradient-to-r from-cta-red to-cta-orange" onClick={() => {}}>
                                    <img  src={"/assets/icons/searchwhite.svg"} alt={"AppIcons not found"} width={14} height={14} />
                                    <p className="text-white font-bold text-18 ">Find Food</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div  className="flex-5 mt-0  xl:mt-auto  w-[300px] xl:w-full ">
                   <img className="ml-auto" src={"/assets/icons/Image Base.svg"} alt={"AppIcons not found"} width={497} height={497} />
                </div>
            </div>
        </div>  
    </section>
}

//bg-[url('/assets/icons/Group11.svg')]