import { Separator } from "@base-ui/react"

export default function InstallAppSection(){
    return <section>
        <div className="bg-[#FEEFD0]">
            <div className="container m-auto  px-37 pt-33 pb-51 ">
                    {/* //cards */}
                <div className="bg-white flex p-14 px-16 justify-center items-center rounded-[46px]  shadow-[0_14px_15px_0_#FFAE001,0_27px_82px_0_#FFAE0028]">
                    <div className="flex justify-center items-center w-[317px]   gap-7 mr-16 ">
                          <img src={"/assets/App/Icon (3).svg"} alt={"AppIcons not found"} width={136} height={136}  className="ml-5"/>
                          <div>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">Daily</p>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">Discounts</p>
                          </div>
                    </div>
                    <Separator orientation="vertical" className="h-[96px] w-px bg-gray-300  " />
                    <div className="flex justify-center  items-center w-[317px]  ml-16 mr-16 gap-7">
                         <img src={"/assets/App/Icon.svg"} alt={"AppIcons not found"} width={136} height={136} />
                          
                          <div>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">Live</p>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">Tracing</p>
                          </div>
                    </div>
                    <Separator orientation="vertical" className="h-[96px] w-px bg-gray-300 " />
                    <div className="flex justify-center items-center w-[317px]   ml-16 gap-7">
                         <img src={"/assets/App/Icon (1).svg"} alt={"AppIcons not found"} width={136} height={136} />
                          <div>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2]  to-[#FFB800] bg-clip-text text-transparent font-bold">Quick</p>
                            <p className="bg-gradient-to-r text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">Delivery</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="bg-cover bg-center bg-no-repeat h-148 w-full "
            style={{
                backgroundImage: "url('/assets/App/App Download.svg')",
            }}
            >
           <div className="container m-auto px-30 h-full ">
             <div className="flex items-end h-full justify-between pt-26">
                <img src={"/assets/App/Image.png"} alt={"AppIcons not found"} width={136} height={527}  className="ml-5 h-[527px] object-cover w-[602px] "/>
                <div className="w-[479px] flex flex-col h-full justify-start items-start ">
                    <p className="text-68 text-primary font-bold">Install the app</p>
                    <p className="text-18 text-[#827E7E] w-[429px]">It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
                    <div className="flex  gap-2 w-full mt-10 ">
                       <div className="bg-white  h-15  w-full rounded-[5px] p-[15px] flex gap-2 justify-cenetr items-center">
                             <img src={"/assets/App/Google Play logo.svg"} alt={"AppIcons not found"} width={27} height={27}    />
                             <div className="flex flex-col  justify-start items-start leading-tight ">
                                <p className="text-gray-700 text-18  leading-tight ">Get it on</p>
                                <p className="text-gray-700 font-bold text-22 ">Google Play</p>
                             </div>
                       </div>
                       <div  className="bg-white  h-15  w-full rounded-[5px] p-[15px] flex gap-2 justify-cenetr items-center">
                            <img src={"/assets/App/Apple logo.svg"} alt={"AppIcons not found"} width={27} height={27}    />
                             <div className="flex flex-col  justify-start items-start leading-tight ">
                                <p className="text-gray-700 text-18  leading-tight ">Download on the</p>
                                <p className="text-gray-700 font-bold text-22 ">App Store</p>
                             </div>
                       </div>
                    </div>
                </div>
             </div>
           </div>
        </div>
    </section>
}