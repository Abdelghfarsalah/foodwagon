import { offers } from "@/constant/home";
import OfferCards from "./OfferCards";

export default function OffersSection(){
    return <section className="offers-section ">
        <div className="container m-auto px-7 pt-20 pb-12  ">
           <div className="flex gap-4  w-full ">
             {
                offers.map((offer, index) => (
                    <OfferCards
                    key={index}
                    image={offer.image}
                    discount={offer.discount}
                    Remaining={offer.days} 
                    title={offer.title}
                    />
                ))
            }
           </div>
        </div>
    </section>
}