import HeroCard from "./HeroCard";

export default function Herosecrion(){
    return <section>
        <div className="w-full bg-[url('/assets/icons/Group11.svg')] bg-cover bg-[#FCCC25] ">
            <div className="container m-auto  flex justify-between ">
                <div className="flex-7 p-6 py-27">
                    <div className="flex flex-col ">
                    <p className="text-[88px] text-white font-extrabold font-sansfont ">Are you starving?</p>
                    <p className="text-22 text-gray-600 pt-4">Within a few clicks, find meals that are accessible near you</p>
                    </div>
                    <HeroCard />
                </div>
                <div  className="flex-5 mt-auto ">
                   <img className="ml-auto" src={"/assets/icons/Image Base.svg"} alt={"AppIcons not found"} width={497} height={497} />
                </div>
            </div>
        </div> 
    </section>
}