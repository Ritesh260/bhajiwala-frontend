import DeliveryAddress from "./sections/DeliveryAddress";
import PaymentMethod from "./sections/PaymentMethod";
import OrderSummary from "./sections/OrderSummary";
import PlaceOrder from "./sections/PlaceOrder";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="mb-12">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Secure Checkout
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Your Order
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Fill in your delivery details, choose your preferred payment method,
            and place your order with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            <DeliveryAddress />
            <PaymentMethod />
          </div>

          <div className="space-y-6">
            <OrderSummary />
            <PlaceOrder />
          </div>

        </div>

      </div>
    </main>
  );
}