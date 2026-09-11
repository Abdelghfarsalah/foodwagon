

export default function HeaderLocation(){
    return <div className="flex gap-2 items-center hidden xl:flex">
        <p className="text-18 font-semibold text-gray-800" >Deliver to:</p>
        <img src={"/assets/icons/map-marker-alt.svg"} alt={"AppIcons not found"} width={14} height={25} />
        <p className="text-18 font-thin  text-gray-800" >Current Location</p>
        <p className="text-18 font-semibold text-gray-800" >Mohammadpur Bus Stand, Dhaka</p>
    </div>
};