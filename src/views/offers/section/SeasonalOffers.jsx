import Image from "next/image";
import {
  CalendarDays,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";


const seasonalOffers = [
  {
    id: 1,
    season: "Monsoon Special",
    title: "Fresh Green Vegetables",
    description:
      "Healthy leafy greens and fresh vegetables perfect for rainy season.",
    image: "/images/offers/monsoon.png",
    badge: "Season Fresh",
  },
  {
    id: 2,
    season: "Summer Picks",
    title: "Juicy Fruits Collection",
    description:
      "Enjoy fresh seasonal fruits selected specially for summer days.",
    image: "/images/offers/summer.png",
    badge: "Hot Deal",
  },
  {
    id: 3,
    season: "Winter Special",
    title: "Organic Winter Vegetables",
    description:
      "Premium quality winter vegetables directly from farmers.",
    image: "/images/offers/winter.png",
    badge: "Limited Stock",
  },
];


export default function SeasonalOffers() {

  return (

    <section className="py-24 bg-[#F8FAF5]">


      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}

        <div className="text-center mb-14">


          <span className="inline-flex items-center gap-2 text-green-600 uppercase tracking-[3px] font-semibold">

            <CalendarDays size={18}/>

            Seasonal Deals

          </span>


          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">

            Fresh According To Season

          </h2>


          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">

            Enjoy the best seasonal vegetables and fruits at special prices
            available for a limited time.

          </p>


        </div>



        {/* Cards */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {seasonalOffers.map((item)=>(


            <div
              key={item.id}
              className="group bg-white rounded-[35px] overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
            >


              {/* Image */}

              <div className="relative h-64 bg-green-100 flex items-center justify-center">


                <span className="absolute top-5 left-5 z-10 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">

                  {item.badge}

                </span>



                <Image
                  src={item.image}
                  alt={item.title}
                  width={230}
                  height={230}
                  className="group-hover:scale-110 transition duration-500"
                />


              </div>



              {/* Content */}

              <div className="p-7">


                <div className="flex items-center gap-2 text-green-600 font-semibold">

                  <Leaf size={18}/>

                  {item.season}

                </div>



                <h3 className="text-2xl font-bold text-gray-900 mt-4">

                  {item.title}

                </h3>



                <p className="text-gray-600 leading-7 mt-3">

                  {item.description}

                </p>



                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition"
                >

                  Shop Now

                  <ArrowRight size={18}/>

                </Link>



              </div>



            </div>


          ))}


        </div>


      </div>


    </section>

  );

}