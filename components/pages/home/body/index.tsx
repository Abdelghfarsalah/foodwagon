import FeaturedRestaurants from "./FeaturedRestaurants";
import HowDoesItWork from "./Howdoesitwork";
import OffersSection from "./OffersSection";
import PopularItems from "./Popularitems";

export default function Body(){
    return <>
        <OffersSection />
        <HowDoesItWork />
        <PopularItems />
        <FeaturedRestaurants />
    </>
}