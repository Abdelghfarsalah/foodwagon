"use client"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cities, footerLinks } from "@/constant/home";
import { Separator } from "@base-ui/react";
import { ChevronRight } from "lucide-react";

export default function Footer(){
    return <section className="mt-15">
        <div className=""  style={{
          backgroundImage: "url('/assets/footer/background.svg')",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}>
            <div className=" flex flex-col justify-center items-center  w-full">
                <p className=" leading-none text-white font-bold text-[35px] mt-23 md:text-[43px] 2xl:text-[57px] max-w-179 flex text-center ">Are you ready to order with the best deals?</p>
                    <div className=" mt-15 px-6 cursor-pointer py-5 w-fit mb-18 flex items-center justify-center  bg-warning text-white  p-4 rounded-md  text-[18px] font-bold ">
                       PROCEED TO ORDER
                        <ChevronRight size={20} />
                    </div>
            </div>
        </div>
        <div className="bg-gray-900 ">
            <div className="container m-auto px-7 ">
                < div className="pt-24 pb-24">
                    <p className="text-22 font-bold text-white ">Our top cities</p>
                    <div className="pt-6 w-full flex  pr-10 md:pr-0 justify-between max-h-100 overflow-hidden flex-wrap  ">
                        {cities.map((item,index)=>(
                            <div key={index}>
                                {
                                    item.map((cite,index)=>(
                                        <p key={index} className="text-18 text-[#F5F5F5] font-normal leading-8 hover:underline  cursor-pointer">{cite}</p>  
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="bg-gray-800 w-full h-px" />
                <div className="flex  py-16 w-full justify-between flex-wrap">
                    <div className=" flex flex-2 flex-wrap ">
                        {
                            footerLinks.map((item,index)=>(
                                <div className="mr-29">
                                    <p className="text-22 font-bold text-white ">{item.title}</p>
                                    
                                        <div className="pt-6">
                                            { item.links.map((cite,index)=>(
                                    <p key={index} className="text-18 text-[#F5F5F5] leading-8 font-normal hover:underline  cursor-pointer">{cite}</p>  
                                ))    }
                                        </div>
                                    
                                </div>
                            ))    
                        }
                    </div>
                   <div className="flex-1 w-full min-h-[254px]">
  <div className="flex flex-col justify-between gap-6 h-full">

    {/* Title */}
    <p className="text-[18px] text-[#A0A0A0] font-bold">
      Follow Us
    </p>

    {/* Description */}
    <p className="text-[18px] text-[#A0A0A0] font-bold">
      Receive exclusive offers in your mailbox
    </p>

    {/* Social Icons */}
    <div className="flex gap-4">
      <img
        src="/assets/footer/1.svg"
        className="cursor-pointer w-8 h-8"
        alt=""
      />

      <img
        src="/assets/footer/2.svg"
        className="cursor-pointer w-8 h-8"
        alt=""
      />

      <img
        src="/assets/footer/3.svg"
        className="cursor-pointer w-8 h-8"
        alt=""
      />
    </div>

    {/* Email + Button */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">

      {/* Input */}
      <div className="w-full md:flex-1">
        <InputGroup
          className="
            h-[60px]
            w-full
            border-none
            bg-gray-800
            focus-within:ring-0
          "
        >
          <InputGroupInput
            placeholder="Enter Your Address"
            className="
              w-full
              bg-gray-800
              text-[#ADADAD]
              text-[16px]
              sm:text-[18px]
              placeholder:text-[#ADADAD]
              placeholder:text-[14px]
              sm:placeholder:text-[16px]
              placeholder:font-normal
              border-none
              focus:ring-0
              focus:outline-none
              mr-2
            "
          />

          <InputGroupAddon>
            <img
              src="/assets/footer/envelope.svg"
              alt="Email"
              width={18}
              height={18}
              className="mr-3"
            />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Button */}
      <div className="w-full md:w-[180px] shadow-[0_5px_8px_0_#DE970024,0_14px_32px_0_#DE970024]">
        <button
          className="
            flex
            justify-center
            items-center
            w-full
            h-[60px]
            gap-2
            bg-cta-orange
            rounded-[8px]
            bg-primary
            cursor-pointer
          "
        >
          <img
            src="/assets/icons/searchwhite.svg"
            alt="Search"
            width={14}
            height={14}
          />

          <p className="text-white font-bold text-[16px] sm:text-[18px]">
            Find Food
          </p>
        </button>
      </div>

    </div>
  </div>
</div>
                </div>
            </div>
        </div>
        
    </section>
}

