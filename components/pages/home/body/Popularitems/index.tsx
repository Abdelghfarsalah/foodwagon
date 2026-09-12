import { popularItemslist } from "@/constant/home";
import PopularItemCard from "./PopularItemsCards";

export default function PopularItems(){
    return <section>
          <div className="container m-auto px-7 py-10 ">
            <div className="flex flex-col gap-4 items-center ">
                <p className="text-43 font-bold text-gray-900 py-10 ">Popular Items</p>
                <div className="flex gap-6 items-center relative w-full ">
                    <img className="absolute left-[-140px] h-[130px] w-[130px] object-cover"  src={"/assets/icons/ArrowLeft.svg"} alt={"ArrowLeft not found"} />
                    <div className=" flex items-center gap-6 w-full">
                       {
                        popularItemslist.map((item) => (
                          <PopularItemCard key={item.name} item={item} />
                        ))
                       }
                    </div>
                    <img className="absolute right-[-140px] h-[130px] w-[130px] object-cover"   src={"/assets/icons/ArrowRight.svg"} alt={"ArrowRight not found"} />/
                </div>
            </div>
          </div>
    </section>
}