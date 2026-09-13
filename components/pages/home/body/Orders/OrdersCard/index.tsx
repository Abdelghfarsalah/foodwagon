import { ChevronRight } from "lucide-react";

export default function OrdersCard({image,title,titleyellow,subtitle,direction}:{image:string,title:string,titleyellow:string,subtitle:string,direction:boolean}){
    return <div className="h-128  bg-white mt-20">
           <div className="flex flex-col md:flex-row w-full h-full rounded-xl shadow-[0_14px_40px_rgba(128,128,128,0.25)]">
            {direction && <img  src={image } className="w-full h-full rounded-tl-xl rounded-bl-xl"/>}
                <div className="p-14 pt-20">
                    <div className="py-14 ">
                        <p className="text-43 font-bold text-[#353535] w-102 leading-12">{title} <span className="text-43 font-bold text-primary">{titleyellow}</span></p>
                    <p className="text-18 font-semibold text-[#61616169] w-102 mt-6">{subtitle}</p>
                    </div>
                     <div className="flex items-center justify-center gap-2 bg-primary px-8 py-4 my-10 rounded-[14px] ring-1 ring-inset ring-white/30 font-bold text-white shadow-[0_5px_10px_0_#FFAE0026,0_20px_40px_0_#FFAE0026]">
                <p className="text-[18px]">Proceed to order</p>
                <ChevronRight className="" size={15} />
                </div>
                </div>
               {!direction&& <img  src={image } className="w-full h-full rounded-tr-xl rounded-br-xl"/>}
           </div>

    </div>
}