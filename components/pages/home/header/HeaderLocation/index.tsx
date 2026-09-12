

export default function HeaderLocation(){
    return <div className="flex gap-2 items-center hidden xl:flex mr-16">
        <p className="text-18 font-bold text-gray-800 leading-[100%]" >Deliver to:</p>
        <img src={"/assets/icons/map-marker-alt.svg"} alt={"AppIcons not found"} width={14} height={25} />
        <p className="text-18 font-thin  text-gray-800" >Current Location</p>
        <p className="text-18 font-bold text-gray-800" >Mohammadpur Bus Stand, Dhaka</p>
    </div>
};