import Image from "next/image";

export default function CustomAppIcon(){
    return (<div className="flex items-center">
     <img
        src="/assets/icons/AppIcon.svg"
        alt="AppIcons not found"
        className="w-[28px] h-[29.98px] "
        />
     <span className="text-warning  font-bold text-31 pl-3 ">food</span>
     <span className="text-primary font-bold text-31 ">wa<span className="text-22 ">G</span>on</span>
     </div>);
}