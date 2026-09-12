import { HowItWorkCardsType } from "@/types/home";

export default function HowdoesitworkCard({
  image,
  title,
  subtitle,
}: HowItWorkCardsType) {
  return (
    <div className="max-w-[307px] flex flex-col items-center">
      <img className="" src={image} alt="User not found" />
      <p className="m-0 text-22 leading-none text-[#434343] font-bold mt-[-20px]">
        {title}
      </p>
      <p className="m-0 text-18 text-grey-500 px-4 text-center mt-3">
        {subtitle}
      </p>
    </div>
  );
}