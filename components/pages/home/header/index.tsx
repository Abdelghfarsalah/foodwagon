import CustomAppIcon from "@/components/shared/CustomAppIcon";
import HeaderLocation from "./HeaderLocation";
import HeaderActions from "./HeaderActions";


export default function Header(){
    return <section>
        <div className="container m-auto px-7 py-[14.5px]">
            <div className="flex justify-between ">
            <CustomAppIcon />
            <HeaderLocation />
            <HeaderActions />
            </div>
        </div>
    </section>
};