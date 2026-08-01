import Image from "next/image";
import {
  ShoppingCart,
  PackageCheck,
  ArrowRight,
} from "lucide-react";


const combos = [
  {
    id: 1,
    name: "Daily Essentials Combo",
    image: "/images/offers/daily-combo.png",
    items: "12 Fresh Items",
    price: 299,
    oldPrice: 420,
    save: "Save ₹121",
  },
  {
    id: 2,
    name: "Family Vegetable Pack",
    image: "/images/offers/family-combo.png",
    items: "20 Fresh Items",
    price: 499,
    oldPrice: 700,
    save: "Save ₹201",
  },
  {
    id: 3,
    name: "Healthy Green Pack",
    image: "/images/offers/green-combo.png",
    items: "8 Green Vegetables",
    price: 249,
    oldPrice: 350,
    save: "Save ₹101",
  },
];


export default function ComboOffers() {

  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">


          <div>

            <span className="text-green-600 uppercase tracking-[3px] font-semibold">
              Value Packs
            </span>


            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
              Fresh Combo Offers
            </h2>


            <p className="mt-4 text-gray-600 max-w-xl leading-7">
              Get more vegetables at better prices with our specially
              curated combo packs.
            </p>


          </div>



        </div>



        {/* Combo Cards */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {combos.map((item)=>(


            <div
              key={item.id}
              className="group bg-[#F8FAF5] rounded-[35px] overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
            >


              {/* Image */}

              <div className="relative h-64 bg-green-100 flex items-center justify-center">


                <span className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">

                  {item.save}

                </span>



                <Image
                  src={item.image}
                  alt={item.name}
                  width={220}
                  height={220}
                  className="group-hover:scale-110 transition duration-500"
                />


              </div>



              {/* Content */}

              <div className="p-7">


                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">

                  <PackageCheck size={18}/>

                  {item.items}

                </div>



                <h3 className="text-2xl font-bold text-gray-900 mt-4">

                  {item.name}

                </h3>



                {/* Price */}

                <div className="flex items-center gap-3 mt-5">


                  <span className="text-3xl font-bold text-green-600">

                    ₹{item.price}

                  </span>


                  <span className="text-gray-400 line-through">

                    ₹{item.oldPrice}

                  </span>


                </div>



                {/* Button */}

                <button
                  className="mt-7 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >

                  <ShoppingCart size={20}/>

                  Add Combo

                </button>



              </div>



            </div>


          ))}


        </div>



      </div>


    </section>

  );

}