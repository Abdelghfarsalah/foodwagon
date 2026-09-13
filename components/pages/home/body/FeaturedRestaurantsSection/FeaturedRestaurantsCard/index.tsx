import { FeaturedRestaurantsType } from "@/types/home";

export default function FeaturedRestaurantsCard({item}:{item:FeaturedRestaurantsType}){
    return <div className="py-6 ">
        <div className="relative  min-w-[260px] basis-[357px] max-w-[400px]  ">
             <img src={item.image} alt={"AppIcons not found"} className="w-full min-h-[301px] h-[301px] rounded-[16px] " />
             <div className="absolute top-5 left-5 flex gap-4 items-center">
                <div className=" flex bg-warning py-1 px-4 rounded-[8px] items-center ">
                     <img  src={"/assets/icons/icon.svg"} alt={"AppIcons not found"} width={20} height={20} />
                     <p className="ml-2 text-22 font-bold text-white"> {item.discount}%</p> 
                     <p className="ml-2 text-22 font-bold text-white" >off</p>
                </div>
                <div className="  flex bg-primary py-1 px-4 rounded-[8px] items-center ">
                    <img src={"/assets/icons/icon (1).svg"} alt={"AppIcons not found"} width={20} height={20} />
                    <p className="ml-2 text-22 font-bold text-white"    >Fast</p>
                </div>
            </div>
        </div>
        <div className="flex gap-6 py-6">
             <img src={item.subimage} alt={"AppIcons not found"} width={64} height={64} />
             <div>
                <p className="text-22 font-bold text-gray-800">{item.title}</p>
                <div className="flex gap-2">
                     <img src={"/assets/icons/icon (2).svg"} alt={"AppIcons not found"} width={25} height={25} />
                     <p className="text-22  text-primary"> {item.starts}</p>
                </div>
             </div>
        </div>
        {
            item.openNow?<div ><p className="text-22 font-bold text-[#79B93C] bg-[#79B93C]/20 w-fit px-4 py-1 rounded-[16px]">Open Now</p></div>:
            <div ><p className="text-22 font-bold text-warning bg-warning/20 w-fit px-4 py-1 rounded-[16px]">Opens tomorrow</p></div>
        }
    </div>
}