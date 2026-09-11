import Image from "next/image";

export default function CustomAppIcon(){
    return (<div className="flex ">
     <img src={"/assets/icons/AppIcon.svg"} alt={"AppIcons not found"} width={28} height={30} />
     <span className="text-warning font-bold text-31 ">Food</span>
     <span className="text-primary font-bold text-31">Wagon</span>
     </div>);
}