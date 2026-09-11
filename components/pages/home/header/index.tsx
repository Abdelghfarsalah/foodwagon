import CustomAppIcon from "@/components/shared/CustomAppIcon";
import HeaderLocation from "./HeaderLocation";
import HeaderActions from "./HeaderActions";


export default function Header(){
    return <section>
        <div className="container m-auto p-4">
            <div className="flex justify-between items-center">
            <CustomAppIcon />
            <HeaderLocation />
            <HeaderActions />
            </div>
        </div>
    </section>
};