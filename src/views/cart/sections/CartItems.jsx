"use client";

import Image from "next/image";
import {
  Plus,
  Minus,
  Trash2,
} from "lucide-react";


const cartProducts = [
  {
    id:1,
    name:"Fresh Tomato",
    price:40,
    quantity:2,
    image:"/images/products/tomato.png",
  },
  {
    id:2,
    name:"Green Capsicum",
    price:80,
    quantity:1,
    image:"/images/products/capsicum.png",
  },
  {
    id:3,
    name:"Fresh Spinach",
    price:30,
    quantity:3,
    image:"/images/products/spinach.png",
  },
];



export default function CartItems(){


  return (

    <div className="space-y-5">


      {cartProducts.map((item)=>(


        <div
          key={item.id}
          className="bg-white rounded-[30px] p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
        >



          {/* Image */}

          <div className="w-28 h-28 rounded-3xl bg-green-50 flex items-center justify-center shrink-0">


            <Image
              src={item.image}
              alt={item.name}
              width={90}
              height={90}
              className="object-contain"
            />


          </div>





          {/* Details */}

          <div className="flex-1 text-center sm:text-left">


            <h3 className="text-xl font-bold text-gray-900">

              {item.name}

            </h3>



            <p className="text-green-600 font-semibold mt-2">

              ₹{item.price}/kg

            </p>



            {/* Quantity */}

            <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">


              <button
                className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
              >

                <Minus size={18}/>

              </button>



              <span className="font-bold text-gray-900">

                {item.quantity}

              </span>




              <button
                className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
              >

                <Plus size={18}/>

              </button>



            </div>



          </div>






          {/* Price + Delete */}

          <div className="flex sm:flex-col items-center gap-5">


            <h3 className="text-xl font-bold text-gray-900">

              ₹{item.price * item.quantity}

            </h3>



            <button
              className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition"
            >

              <Trash2 size={22}/>

            </button>


          </div>



        </div>



      ))}



    </div>

  );

}