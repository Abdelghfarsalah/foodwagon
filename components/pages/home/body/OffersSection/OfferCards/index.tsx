import { OfferTypeCards } from "@/types/home";

export default function OfferCards({image, title, Remaining, discount}:OfferTypeCards){
    return <div className="flex-1 min-w-[260px] basis-[280px] max-w-[400px]">
            <div className={`rounded-[18px] bg-center relative h-[220px] sm:h-[260px] lg:h-[301px] overflow-hidden`} style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
                <div className="absolute rounded-tr-[35px] p-4 rounded-bl-[18px] bottom-0 left-0 bg-primary text-white flex items-center justify-between h-[25%] min-h-[72px]">
                   <p className="text-[36px] sm:text-[44px] lg:text-68 leading-none text-white font-bold"> {discount}</p>
                    <div>
                        <p className="text-[24px] sm:text-[28px] lg:text-35 leading-none text-white font-bold">%</p>
                        <p className="text-[16px] sm:text-[18px] lg:text-22 leading-none text-white">Off</p>
                    </div>
                </div> 
            </div>
            <p className="text-[18px] sm:text-22 font-bold text-gray-800 pt-6 pb-3">{title}</p>
            <p className="text-[16px] sm:text-22 font-bold text-warning bg-warning/20 w-fit px-4 py-1 rounded-[8px]">
                {Remaining} Days Remaining
            </p>
    </div>
}