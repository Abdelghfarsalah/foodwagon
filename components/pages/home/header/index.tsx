import CustomAppIcon from "@/components/shared/CustomAppIcon";
import HeaderLocation from "./headerLoaction";


export default function Header(){
    return <section>
        <div className="container m-auto p-4">
            <div className="flex justify-between items-center">
            <CustomAppIcon />
            <HeaderLocation />
            <div></div>
            </div>
        </div>
    </section>
};