import { FeaturedRestaurantsType } from "@/types/home";

export default function FeaturedRestaurantsCard({
  item,
}: {
  item: FeaturedRestaurantsType;
}) {
  return (
    <div className="w-full py-4 sm:py-6">
      {/* Image */}
      <div className="relative w-full">
        <img
          src={item.image}
          alt="Restaurant"
          className="
            w-full
            h-[220px]
            sm:h-[260px]
            md:h-[301px]
            object-cover
            rounded-[16px]
          "
        />

        {/* Badges */}
        <div
          className="
            absolute
            top-3 left-3
            sm:top-5 sm:left-5
            flex
            flex-wrap
            gap-2
            sm:gap-4
          "
        >
          {/* Discount */}
          <div
            className="
              flex
              items-center
              bg-warning
              py-1
              px-2
              sm:px-4
              rounded-[8px]
            "
          >
            <img
              src="/assets/icons/icon.svg"
              alt="Discount"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5"
            />

            <p className="ml-1 sm:ml-2 text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white">
              {item.discount}%
            </p>

            <p className="ml-1 sm:ml-2 text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white">
              off
            </p>
          </div>

          {/* Fast */}
          <div
            className="
              flex
              items-center
              bg-primary
              py-1
              px-2
              sm:px-4
              rounded-[8px]
            "
          >
            <img
              src="/assets/icons/icon (1).svg"
              alt="Fast"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5"
            />

            <p className="ml-1 sm:ml-2 text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white">
              Fast
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 py-4 sm:py-6">
        <img
          src={item.subimage}
          alt="Restaurant logo"
          width={64}
          height={64}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-16 md:h-16
            rounded-full
            object-cover
            shrink-0
          "
        />

        <div className="min-w-0">
          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-gray-800 truncate">
            {item.title}
          </p>

          <div className="flex items-center gap-1 sm:gap-2">
            <img
              src="/assets/icons/icon (2).svg"
              alt="Rating"
              width={25}
              height={25}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-[25px] md:h-[25px]"
            />

            <p className="text-[16px] sm:text-[18px] md:text-[22px] text-primary">
              {item.starts}
            </p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div>
        {item.openNow ? (
          <p className="text-[16px] sm:text-[18px] md:text-[22px] font-bold text-[#79B93C] bg-[#79B93C]/20 w-fit px-3 sm:px-4 py-1 rounded-[16px]">
            Open Now
          </p>
        ) : (
          <p className="text-[16px] sm:text-[18px] md:text-[22px] font-bold text-warning bg-warning/20 w-fit px-3 sm:px-4 py-1 rounded-[16px]">
            Opens tomorrow
          </p>
        )}
      </div>
    </div>
  );
}