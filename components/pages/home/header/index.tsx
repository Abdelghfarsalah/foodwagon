import CustomAppIcon from "@/components/shared/CustomAppIcon";
export default function Header(){
    return <section>
        <div className="container m-auto px-7 py-[14.5px]">
            <div className="flex justify-between ">
            <CustomAppIcon />
            <div className="flex gap-2 items-center hidden xl:flex mr-16">
                <p className="text-18 font-bold text-gray-800 leading-[100%]" >Deliver to:</p>
                <img src={"/assets/icons/map-marker-alt.svg"} alt={"AppIcons not found"} width={14} height={25} />
                <p className="text-18 font-thin  text-gray-800" >Current Location</p>
                <p className="text-18 font-bold text-gray-800" >Mohammadpur Bus Stand, Dhaka</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="searchButton flex gap-2 items-center ">
                    <img  src={"/assets/icons/Search.svg"} alt={"Search not found"} width={18} height={18} />
                    <p className="text-18 font-bold text-gray-800 hidden sm:block">Search Food</p>
                </div>
                <div className="loginButton flex gap-2 items-center px-4 py-2 shadow-[0_20px_40px_0_var(--ShadowYellow)] shadow-[0_5px_10px_0_var(--ShadowYellow)] rounded-[5px]">
                    <img  src={"/assets/icons/user.svg"} alt={"User not found"} width={16} height={18} />
                    <p className="text-18 font-bold text-primary ">Login</p>
                </div>
            </div>
            </div>
        </div>
    </section>
};