import OrdersCard from "./OrdersCard";

export default function OrdersCards(){
    return <section>
        <div className="container m-auto px-7 py-20">
             <OrdersCard 
                image={"/assets/body/Image (1).png"} 
                title={"Best deals"} 
                titleyellow={" Crispy Sandwiches"} 
                subtitle={"Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."} 
                direction={false} 
              />
              <OrdersCard 
                image={"/assets/body/Image (2).png"} 
                 title={"Celebrate  parties with"} 
                titleyellow={" Fried Chicken"} 
                subtitle={"Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken."} 
                direction={true} 
              />
              <OrdersCard 
                image={"/assets/body/Image (3).png"} 
                title={"Wanna eat hot & spicy "} 
                titleyellow={" Pizza?"} 
                subtitle={"Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals."} 
                direction={false} 
              />
        </div>
    </section>
}