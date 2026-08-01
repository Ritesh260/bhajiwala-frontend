import CartItems from "./sections/CartItems";
import CartSummary from "./sections/CartSummary";


export default function CartPage(){

  return (

    <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">


      <div className="max-w-7xl mx-auto px-5">


        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">

          Your Shopping Cart

          <span className="block text-green-600">
            Fresh Picks 🥬
          </span>

        </h1>



        <div className="grid lg:grid-cols-3 gap-10">


          {/* Items */}

          <div className="lg:col-span-2">

            <CartItems />

          </div>




          {/* Summary */}

          <div>

            <CartSummary />

          </div>


        </div>



      </div>


    </main>

  );

}