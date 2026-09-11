

export default function HeaderActions(){
    return <div className="flex gap-4 items-center">
        <div className="searchButton flex gap-2 items-center ">
            <img  src={"/assets/icons/Search.svg"} alt={"Search not found"} width={18} height={18} />
            <p className="text-18 font-semibold text-gray-800 hidden sm:block">Search Food</p>
        </div>
        <div className="loginButton flex gap-2 items-center px-4 py-2 shadow-[0_20px_40px_0_#FFAE0042] shadow-[0_5px_10px_0_#FFAE0042] rounded-[5px]">
            <img  src={"/assets/icons/user.svg"} alt={"User not found"} width={16} height={18} />
            <p className="text-18 font-semibold text-primary ">Login</p>
        </div>
    </div>
};