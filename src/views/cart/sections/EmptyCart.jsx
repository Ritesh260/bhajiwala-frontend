import Link from "next/link";
import {
  ShoppingCart,
  Leaf,
  ArrowRight,
} from "lucide-react";


export default function EmptyCart() {


  return (

    <section className="min-h-[70vh] flex items-center justify-center bg-[#F8FAF5]">


      <div className="max-w-xl mx-auto px-5 text-center">


        {/* Icon */}

        <div className="mx-auto w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">


          <ShoppingCart
            size={60}
            className="text-green-600"
          />


        </div>






        {/* Content */}

        <h1 className="mt-8 text-4xl font-extrabold text-gray-900">

          Your Cart Is Empty

        </h1>




        <p className="mt-4 text-gray-600 text-lg leading-8">

          Looks like you haven't added any fresh vegetables yet.
          Explore our products and fill your cart with healthy choices.

        </p>







        {/* Small Badge */}

        <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-3 rounded-full font-semibold">


          <Leaf size={18}/>

          Fresh vegetables waiting for you


        </div>







        {/* Button */}

        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
        >

          Start Shopping

          <ArrowRight size={20}/>

        </Link>




      </div>


    </section>

  );

}