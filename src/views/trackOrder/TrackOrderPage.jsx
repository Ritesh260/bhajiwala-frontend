import DeliveryTracker from "./sections/DeliveryTracker";
import OrderStatus from "./sections/OrderStatus";
import DeliveryInfo from "./sections/DeliveryInfo";

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Live Tracking
          </span>

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            Track Your Order
          </h1>

          <p className="mt-4 text-gray-600">
            Stay updated with every step of your delivery.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <DeliveryTracker />
          </div>

          <div className="space-y-6">
            <OrderStatus />
            <DeliveryInfo />
          </div>

        </div>

      </div>

    </main>
  );
}