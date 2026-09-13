
import { Separator } from "@base-ui/react";

export default function InstallAppSection() {
  return (
    <section>
      {/* Features */}
      <div className="bg-[#FEEFD0]">
        <div className="container m-auto px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-37 pt-16 sm:pt-20 lg:pt-28 2xl:pt-33 pb-20 sm:pb-28 lg:pb-36 2xl:pb-51">
          
          {/* Cards */}
          <div className="bg-white flex flex-col lg:flex-row p-8 sm:p-10 lg:p-12 2xl:p-14 px-8 sm:px-10 lg:px-14 2xl:px-16 justify-center items-center rounded-[30px] sm:rounded-[36px] 2xl:rounded-[46px] shadow-[0_14px_15px_0_#FFAE001,0_27px_82px_0_#FFAE0028]">

            {/* Daily Discounts */}
            <div className="flex justify-center items-center w-full lg:w-[317px] gap-5 2xl:gap-7 mr-0 lg:mr-8 2xl:mr-16 py-5 lg:py-0">
              <img
                src="/assets/App/Icon (3).svg"
                alt="Daily Discounts"
                width={136}
                height={136}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[110px] lg:h-[110px] 2xl:w-[136px] 2xl:h-[136px] ml-0 lg:ml-3 2xl:ml-5"
              />

              <div>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Daily
                </p>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Discounts
                </p>
              </div>
            </div>

            {/* Separator */}
            <Separator
              orientation="vertical"
              className="hidden lg:block h-[80px] 2xl:h-[96px] w-px bg-gray-300"
            />

            {/* Live Tracing */}
            <div className="flex justify-center items-center w-full lg:w-[317px] gap-5 2xl:gap-7 ml-0 lg:ml-8 2xl:ml-16 mr-0 lg:mr-8 2xl:mr-16 py-5 lg:py-0">
              <img
                src="/assets/App/Icon.svg"
                alt="Live Tracing"
                width={136}
                height={136}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[110px] lg:h-[110px] 2xl:w-[136px] 2xl:h-[136px]"
              />

              <div>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Live
                </p>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Tracing
                </p>
              </div>
            </div>

            {/* Separator */}
            <Separator
              orientation="vertical"
              className="hidden lg:block h-[80px] 2xl:h-[96px] w-px bg-gray-300"
            />

            {/* Quick Delivery */}
            <div className="flex justify-center items-center w-full lg:w-[317px] gap-5 2xl:gap-7 ml-0 lg:ml-8 2xl:ml-16 py-5 lg:py-0">
              <img
                src="/assets/App/Icon (1).svg"
                alt="Quick Delivery"
                width={136}
                height={136}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[110px] lg:h-[110px] 2xl:w-[136px] 2xl:h-[136px]"
              />

              <div>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Quick
                </p>
                <p className="bg-gradient-to-r text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-35 from-[#FB3C00] leading-[1.2] to-[#FFB800] bg-clip-text text-transparent font-bold">
                  Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Download */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[700px] sm:min-h-[750px] lg:h-148 lg:min-h-0 w-full"
        style={{
          backgroundImage: "url('/assets/App/App Download.svg')",
        }}
      >
        <div className="container m-auto px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-30 h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-end h-full justify-between pt-16 sm:pt-20 lg:pt-26">

            {/* Phone Image */}
            <img
              src="/assets/App/Image.png"
              alt="App"
              width={136}
              height={527}
              className="ml-0 lg:ml-5 h-auto w-[280px] sm:w-[350px] md:w-[430px] lg:w-[500px] 2xl:w-[602px] lg:h-[450px] 2xl:h-[527px] object-contain lg:object-cover order-2 lg:order-1"
            />

            {/* Content */}
            <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[479px] flex flex-col h-full justify-start items-start order-1 lg:order-2 mb-12 lg:mb-0">

              <p className="text-[42px] sm:text-[50px] lg:text-[60px] 2xl:text-68 text-primary font-bold leading-tight">
                Install the app
              </p>

              <p className="text-[15px] sm:text-[16px] lg:text-18 text-[#827E7E] w-full lg:w-[429px] mt-3 lg:mt-0">
                It's never been easier to order food. Look for the finest
                discounts and you'll be lost in a world of delectable food.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-8 lg:mt-10">

                {/* Google Play */}
                <div className="bg-white h-15 w-full rounded-[5px] p-[15px] flex gap-2 justify-center items-center">
                  <img
                    src="/assets/App/Google Play logo.svg"
                    alt="Google Play"
                    width={27}
                    height={27}
                    className="shrink-0"
                  />

                  <div className="flex flex-col justify-start items-start leading-5">
                    <p className="text-gray-700 text-[14px] sm:text-[16px] lg:text-18 leading-tight">
                      Get it on
                    </p>
                    <p className="text-gray-700 font-bold text-[17px] sm:text-[19px] lg:text-22 leading-tight">
                      Google Play
                    </p>
                  </div>
                </div>

                {/* App Store */}
                <div className="bg-white h-15 w-full rounded-[5px] p-[15px] flex gap-2 justify-center items-center">
                  <img
                    src="/assets/App/Apple logo.svg"
                    alt="App Store"
                    width={27}
                    height={27}
                    className="shrink-0"
                  />

                  <div className="flex flex-col justify-start items-start leading-tight">
                    <p className="text-gray-700 text-[14px] sm:text-[16px] lg:text-18 leading-tight">
                      Download on the
                    </p>
                    <p className="text-gray-700 font-bold text-[17px] sm:text-[19px] lg:text-22">
                      App Store
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}