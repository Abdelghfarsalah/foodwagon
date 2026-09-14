import { ChevronRight } from "lucide-react";

export default function Footer(){
    return <section className="mt-15">
        <div className=""  style={{
          backgroundImage: "url('/assets/footer/background.svg')",
        }}>
            <div className=" flex flex-col justify-center items-center   w-full">
                <p className=" leading-none text-white font-bold text-[35px] mt-23 md:text-[43px] 2xl:text-[57px] max-w-179 flex text-center ">Are you ready to order with the best deals?</p>
                    <div className=" mt-15 px-6  py-5 w-fit mb-18 flex items-center justify-center  bg-warning text-white  p-4 rounded-md  text-[18px] font-bold ">
                       PROCEED TO ORDER
                        <ChevronRight size={20} />
                    </div>
            </div>
        </div>
    </section>
}