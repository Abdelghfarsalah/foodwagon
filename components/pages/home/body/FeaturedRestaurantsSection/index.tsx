import { FeaturedRestaurantslist } from "@/constant/home";
import FeaturedRestaurantsCard from "./FeaturedRestaurantsCard";
import { ChevronRight } from "lucide-react";
export default function FeaturedRestaurants(){
    return <section>
        <div className="container m-auto px-7 ">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-43 font-bold text-gray-900 py-7 ">Featured Restaurants</p>
                <div className="flex flex-wrap gap-4 items-center  justify-center">
                {
                    FeaturedRestaurantslist.map((item,index)=>(<FeaturedRestaurantsCard item={item} key={index} />))
                }
                </div>
                <div className="flex cursor-pointer items-center justify-center gap-2 bg-primary px-8 py-4 my-10 rounded-[14px] ring-1 ring-inset ring-white/30 font-bold text-white shadow-[0_5px_10px_0_#FFAE0026,0_20px_40px_0_#FFAE0026]">
                <p className="text-[18px] ">View All</p>
                <ChevronRight className="" size={15} />
                </div>
            </div>
        </div>
    </section>
}