import FeaturedRestaurants from "./FeaturedRestaurantsSection";
import HowDoesItWork from "./HowdoesitworkSection";
import OffersSection from "./OffersSection";
import PopularItems from "./PopularitemsSection";
import SearchSection from "./SearchSection";

export default function Body(){
    return <>
        <OffersSection />
        <HowDoesItWork />
        <PopularItems />
        <FeaturedRestaurants />
        <SearchSection />
    </>
}