import { SearchbyFoodlist } from "@/constant/home";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import SearchSectionCard from "./SearchSectionCard";

export default function SearchSection(){
    return <section>
           <div className=" bg-[#FEFAF1] ">
             <div className="container m-auto px-7 py-10 bg-[#FEFAF1] ">
                <div className="flex justify-between ">
                   <p className="text-43 font-bold text-gray-900 py-7 ">Search by Food</p>
                   <div className="hidden md:flex items-center justify-center gap-4">
                      
                        <div className=" flex items-center justify-center ">
                            <p className="text-[18px] text-primary font-bold">View All</p>
                            <ChevronRight className="text-primary " size={25}  />
                        </div>
                        <div className="flex items-center justify-center text-white h-[76px] w-[76px] rounded-full bg-primary shadow-[0_5px_8px_0_#DE970024,0_14px_32px_0_#DE970024] ">
                            <ChevronLeft size={40} /> 
                        </div>
                         <div className="flex items-center justify-center text-white h-[76px] w-[76px] rounded-full bg-primary shadow-[0_5px_8px_0_#DE970024,0_14px_32px_0_#DE970024]">
                            <ChevronRight  size={40}  /> 
                        </div>
                      
                   </div>
                </div>
                <div className="flex justify-center sm:justify-between items-center   w-full flex-wrap">
                    {
                        SearchbyFoodlist.map((item,index)=>(<SearchSectionCard key={index} item={item} />))
                    }    
                </div>
            </div>
           </div>
    </section>
}