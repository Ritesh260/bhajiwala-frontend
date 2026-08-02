import {
  ShoppingBag,
  Truck,
  BadgePercent,
  Receipt,
} from "lucide-react";

export default function OrderSummary() {
  const subtotal = 190;
  const delivery = 30;
  const discount = 20;

  const total = subtotal + delivery - discount;

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 sticky top-28">

      {/* Heading */}

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShoppingBag className="text-green-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Order Summary
          </h2>

          <p className="text-gray-500 text-sm">
            3 Items in your cart
          </p>
        </div>

      </div>

      {/* Coupon */}

      <div className="mt-8">

        <label className="text-sm font-semibold text-gray-700">
          Coupon Code
        </label>

        <div className="flex mt-3">

          <input
            type="text"
            placeholder="Enter coupon"
            className="flex-1 border border-gray-200 rounded-l-2xl px-4 py-3 outline-none focus:border-green-600"
          />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-r-2xl transition"
          >
            Apply
          </button>

        </div>

      </div>

      {/* Price Details */}

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">

          <div className="flex items-center gap-2 text-gray-600">
            <Receipt size={18} />
            Subtotal
          </div>

          <span className="font-semibold">
            ₹{subtotal}
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-2 text-gray-600">
            <Truck size={18} />
            Delivery Charge
          </div>

          <span className="font-semibold">
            ₹{delivery}
          </span>

        </div>

        <div className="flex justify-between text-green-600">

          <div className="flex items-center gap-2">
            <BadgePercent size={18} />
            Discount
          </div>

          <span className="font-semibold">
            -₹{discount}
          </span>

        </div>

      </div>

      <div className="border-t border-gray-200 my-7"></div>

      {/* Total */}

      <div className="flex justify-between items-center">

        <span className="text-xl font-bold text-gray-900">
          Grand Total
        </span>

        <span className="text-3xl font-extrabold text-green-600">
          ₹{total}
        </span>

      </div>

      {/* Delivery Info */}

      <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-4">

        <p className="font-semibold text-green-700">
          🚚 Estimated Delivery
        </p>

        <p className="text-gray-600 text-sm mt-2">
          Your fresh vegetables will arrive in
          <span className="font-bold text-green-700">
            {" "}20 - 30 Minutes
          </span>
        </p>

      </div>

    </section>
  );
}