import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";


const offers = [
  {
    id: 1,
    name: "Fresh Tomato",
    image: "/images/products/tomato.png",
    oldPrice: 60,
    price: 40,
    discount: "30% OFF",
    time: "2 Hours Left",
  },
  {
    id: 2,
    name: "Green Spinach",
    image: "/images/products/spinach.png",
    oldPrice: 40,
    price: 25,
    discount: "40% OFF",
    time: "3 Hours Left",
  },
  {
    id: 3,
    name: "Fresh Carrot",
    image: "/images/products/carrot.png",
    oldPrice: 90,
    price: 60,
    discount: "35% OFF",
    time: "5 Hours Left",
  },
  {
    id: 4,
    name: "Capsicum",
    image: "/images/products/capsicum.png",
    oldPrice: 100,
    price: 70,
    discount: "30% OFF",
    time: "1 Hour Left",
  },
];


export default function TodayOffers() {

  return (

    <section
      id="offers"
      className="py-24 bg-white"
    >


      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">


          <div>


            <span className="text-orange-500 uppercase tracking-[3px] font-semibold">
              Flash Deals
            </span>


            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
              Today's Best Offers
            </h2>


            <p className="mt-4 text-gray-600 max-w-xl leading-7">
              Grab fresh vegetables at amazing prices.
              These deals are available for limited time only.
            </p>


          </div>



          <Link
            href="/products"
            className="flex items-center gap-2 text-green-600 font-semibold"
          >

            View All

            <ArrowRight size={20}/>

          </Link>


        </div>




        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">


          {offers.map((item)=>(


            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-[30px] overflow-hidden hover:shadow-2xl transition duration-300"
            >



              {/* Image */}

              <div className="relative h-56 bg-green-50 flex items-center justify-center">


                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">

                  {item.discount}

                </span>



                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="group-hover:scale-110 transition duration-500"
                />


              </div>





              {/* Content */}

              <div className="p-6">


                <h3 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h3>



                {/* Price */}

                <div className="flex items-center gap-3 mt-3">


                  <span className="text-2xl font-bold text-green-600">
                    ₹{item.price}
                  </span>


                  <span className="text-gray-400 line-through">
                    ₹{item.oldPrice}
                  </span>


                </div>



                {/* Timer */}

                <div className="flex items-center gap-2 mt-4 text-sm text-orange-600">


                  <Clock3 size={17}/>

                  {item.time}


                </div>



                {/* Button */}

                <button
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >

                  <ShoppingCart size={18}/>

                  Add To Cart

                </button>



              </div>



            </div>


          ))}



        </div>


      </div>


    </section>

  );
}