import {
  Copy,
  Percent,
  ShoppingBasket,
  Gift,
} from "lucide-react";


const discounts = [
  {
    id: 1,
    title: "Flat 20% OFF",
    description: "On your first vegetable order",
    code: "WELCOME20",
    icon: Percent,
    bg: "from-green-500 to-green-600",
  },
  {
    id: 2,
    title: "Save ₹100",
    description: "On orders above ₹499",
    code: "SAVE100",
    icon: Gift,
    bg: "from-orange-400 to-orange-500",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "On orders above ₹299",
    code: "FREEDEL",
    icon: ShoppingBasket,
    bg: "from-emerald-500 to-emerald-600",
  },
];


export default function DiscountCards() {


  return (

    <section className="py-24 bg-[#F8FAF5]">


      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}

        <div className="text-center mb-14">


          <span className="text-orange-500 uppercase tracking-[3px] font-semibold">
            Exclusive Deals
          </span>


          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Special Discounts For You
          </h2>


          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Use these amazing coupons and save more on your daily fresh
            vegetables and groceries.
          </p>


        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-7">


          {discounts.map((item)=>{


            const Icon = item.icon;


            return (

              <div
                key={item.id}
                className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${item.bg} p-8 text-white shadow-xl hover:-translate-y-2 transition duration-300`}
              >


                {/* Circle */}

                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>



                <div className="relative">


                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">

                    <Icon size={28}/>

                  </div>



                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>



                  <p className="mt-3 text-white/80">
                    {item.description}
                  </p>




                  {/* Coupon */}

                  <div className="mt-8 bg-white rounded-2xl px-5 py-4 flex items-center justify-between">


                    <span className="text-gray-900 font-bold tracking-wider">
                      {item.code}
                    </span>



                    <button
                      className="text-green-600 hover:scale-110 transition"
                      title="Copy Coupon"
                    >

                      <Copy size={20}/>

                    </button>


                  </div>



                </div>


              </div>

            );


          })}



        </div>


      </div>


    </section>

  );

}