import { HowItWorkCards } from "@/constant/home";
import HowdoesitworkCard from "./Howdoesitworkcard";

export default function HowDoesItWork(){
    return <section>
       <div className="bg-gradient-to-b from-[#FFCE67]/15 to-[#FDEDCA]/0  w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 items-center py-20">
                <p className="text-43 font-bold text-gray-800 text-warning">How does it work</p>
                <div className="flex  pt-6 gap-6 flex-wrap items-center justify-center">
                {
                    HowItWorkCards.map((e,index)=>(
                        <HowdoesitworkCard key={index} image={e.image} title={e.title} subtitle={e.subtitle} />
                    ))
                }
            </div>
            </div>
            
       </div>
    </section>
}