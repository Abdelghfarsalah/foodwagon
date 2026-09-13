import { SearchbyFoodtype } from "@/types/home";

export default function SearchSectionCard({item}:{item:SearchbyFoodtype}){
    return <div className="flex flex-col items-center mt-5">
     <img className="w-[218px] h-[218px] rounded-full min-w[218px] "  src={item.image} alt={"User not found"} width={16} height={18} />
     <p className="mt-5 text-22 text-gray-800">{item.title}</p>
    </div>
}