import {
  User,
  Phone,
  Bike,
  Clock3,
} from "lucide-react";

export default function DeliveryInfo() {
  return (
    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-gray-900">
        Delivery Partner
      </h2>

      <div className="mt-8 flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

          <User
            className="text-green-600"
            size={30}
          />

        </div>

        <div>

          <h3 className="font-bold text-lg">
            Rahul Sharma
          </h3>

          <p className="text-gray-500">
            Delivery Executive
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <Phone
            className="text-green-600"
            size={20}
          />

          <span>+91 9839621748</span>

        </div>

        <div className="flex items-center gap-3">

          <Bike
            className="text-green-600"
            size={20}
          />

          <span>Electric Delivery Bike</span>

        </div>

        <div className="flex items-center gap-3">

          <Clock3
            className="text-green-600"
            size={20}
          />

          <span>Estimated Arrival: 18 Minutes</span>

        </div>

      </div>

      <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition">
        Contact Delivery Partner
      </button>

    </section>
  );
}