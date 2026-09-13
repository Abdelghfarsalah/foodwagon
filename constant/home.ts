import { FeaturedRestaurantsType, PopularItemType } from "@/types/home";

export const offers = [
  {
    image: "/assets/body/Image.svg",
    discount: "15",
    title: "Greys Vage",
    days: "6 ",
  },
  {
    image: "/assets/body/Image3.svg",
    discount: "10",
    title: "Greys Vage",
    days: "6 ",
  },
  {
    image: "/assets/body/Image2.svg",
    discount: "25",
    title: "Greys Vage",
    days: "7",
  },
  {
    image: "/assets/body/Image1.svg",
    discount: "20",
    title: "Greys Vage",
    days: "8",
  },
];


export const HowItWorkCards = [
  {
    image: "/assets/icons/locationlarge.svg",
    subtitle: "Choose the location where your food will be delivered.",
    title: "Select location",
  },
  {
    image: "/assets/icons/ring.svg",
    subtitle: "Check over hundreds of menus to pick your favorite food",
    title: "Choose order",
  },
  {
    image: "/assets/icons/card.svg",
    subtitle: "It's quick, safe, and simple. Select several methods of payment",
    title: "Pay advanced",
  },
  {
    image: "/assets/icons/cycle.svg",
    subtitle: "Food is made and delivered directly to your home.",
    title: "Enjoy meals",
  },
  
];


export const popularItemslist: PopularItemType[] = [
  {
    name: "Cheese Burger",
    image: "/assets/body/Frame 40.svg",
    restaurant: "Burger Arena",
    price: 3.88,
  },
  {
    name: "Toffe’s Cake",
    image: "/assets/body/Rectangle 336.svg",
    restaurant: "Top Sticks",
    price: 4.00,
  },
  {
    name: "Dancake",
    image: "/assets/body/Frame 40 (1).svg",
    restaurant: "Cake World",
    price: 1.99,
  },
  {
    name: "Crispy Sandwich",
    image: "/assets/body/Rectangle 336 (1).svg",
    restaurant: "Fastfood Dine",
    price: 3.00,
  },
  {
    name: "Thai Soup",
    image: "/assets/body/Rectangle 336 (2).svg",
    restaurant: "Food 24",
    price: 2.79,
  },
];


export const FeaturedRestaurantslist:FeaturedRestaurantsType[]=[
  {
    image:"/assets/Featured/images/Image12.svg",
    subimage:"/assets/Featured/icons/Restaruant Logo.svg",
    title:"Foodworld",
    starts:46,
    openNow:false,
    discount:20
  },
  {
    image:"/assets/Featured/images/Image.svg",
    subimage:"/assets/Featured/icons/Image.svg",
    title:"Pizzahub",
    starts:40,
    openNow:false,
    discount:15
  },
  {
    image:"/assets/Featured/images/Image (1).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (1).svg",
    title:"Pizzahub",
    starts:40,
    openNow:true,
    discount:10
  },
  {
    image:"/assets/Featured/images/Image (2).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (2).svg",
    title:"Donuts hut",
    starts:50,
    openNow:true,
    discount:15
  },
  {
    image:"/assets/Featured/images/Image (3).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (3).svg",
    title:"Ruby Tuesday",
    starts:26,
    openNow:true,
    discount:10
  },
  {
    image:"/assets/Featured/images/Image (4).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (4).svg",
    title:"Kuakata Fried Chicken",
    starts:53,
    openNow:true,
    discount:25
  },
  {
    image:"/assets/Featured/images/Image (5).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (5).svg",
    title:"Red Square",
    starts:45,
    openNow:true,
    discount:10
  },
  {
    image:"/assets/Featured/images/Image (6).svg",
    subimage:"/assets/Featured/icons/Restaruant Logo (6).svg",
    title:"Taco Bell",
    starts:35,
    openNow:true,
    discount:10
  }
]