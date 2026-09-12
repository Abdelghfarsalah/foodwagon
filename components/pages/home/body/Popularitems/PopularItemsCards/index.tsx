import { PopularItemType } from "@/types/home";

export default function PopularItemCard ({ item }: { item: PopularItemType }) {
  return (
    <div className= "flex-1 min-w-[260px] basis-[260px]  max-w-[300px]  bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="h-[283px]  rounded-[16px] object-cover"/>
    <p className="text-22 font-bold text-gray-800 pt-3 ">
      {item.name}
    </p>

    <div className="flex items-center gap-2">
        <img src={"/assets/icons/map-marker-alt.svg"} alt={"AppIcons not found"} width={14} height={25} />
        <span className="text-22 text-primary">
        {item.restaurant}
        </span>
    </div>
    <p className="text-22 font-bold text-gray-900 pb-2 ">
        ${item.price.toFixed(2) }
    </p>
    <div className="flex items-center justify-center py-4 bg-warning text-white py-2 px-4 rounded-md w-full text-[18px] font-bold !shadow-[0_5px_10px_rgba(253,114,92,0.2),0_20px_40px_rgba(253,114,92,0.2)]">
    Order Now
    </div>

        
    </div>
  );
};