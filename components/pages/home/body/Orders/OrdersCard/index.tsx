import { ChevronRight } from "lucide-react";
export default function OrdersCard({
  image,
  title,
  titleyellow,
  subtitle,
  direction,
}: {
  image: string;
  title: string;
  titleyellow: string;
  subtitle: string;
  direction: boolean;
}) {
  return (
    <div className="w-full bg-white mt-10 sm:mt-14 lg:mt-20">
      <div className="flex flex-col 2xl:flex-row w-full overflow-hidden rounded-xl shadow-[0_14px_40px_rgba(128,128,128,0.25)]">

        {/* Image */}
        {direction && (
          <img
            src={image}
            className="w-full flex-1 h-64 sm:h-80 lg:h-96 2xl:h-auto 2xl:w-2/3 object-cover 2xl:rounded-l-xl"
            alt=""
          />
        )}

        {/* Content */}
        <div className="flex flex-col justify-center  w-full  2xl:w-1/3 px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14 2xl:py-14">
          
          <div>
            <p className="text-[28px] sm:text-[34px] lg:text-[40px] 2xl:text-[43px] font-bold text-[#353535] max-w-full 2xl:max-w-102 leading-tight">
              {title}{" "}
              <span className="text-[18px] sm:text-[24px] lg:text-[32px] 2xl:text-[43px] font-bold text-primary">
                {titleyellow}
              </span>
            </p>

            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[#61616169] max-w-full 2xl:max-w-102 mt-4 sm:mt-5 lg:mt-6 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Button */}
          <div className="flex w-200 2xl:mt-28 items-center justify-center gap-2 bg-primary px-6 sm:px-8 py-3 sm:py-4 mt-8 sm:mt-10 rounded-[14px] ring-1 ring-inset ring-white/30  font-bold text-white shadow-[0_5px_10px_0_#FFAE0026,0_20px_40px_0_#FFAE0026] cursor-pointer w-full ">
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
              Proceed to order
            </p>
            <ChevronRight size={15} />
          </div>
        </div>

        {/* Image */}
        {!direction && (
          <img
            src={image}
            className="w-full h-64 sm:h-80 lg:h-96 2xl:h-auto  2xl:w-2/3 object-cover 2xl:rounded-r-xl"
            alt=""
          />
        )}

      </div>
    </div>
  );
}