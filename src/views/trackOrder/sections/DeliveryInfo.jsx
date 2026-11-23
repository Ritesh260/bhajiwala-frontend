
import {
  User,
  Phone,
  Bike,
  Clock3,
} from "lucide-react";

export default function DeliveryInfo({ order }) {
  const partner = order?.deliveryPartner || {};

  const partnerName =
    partner?.name ||
    order?.deliveryPartnerName ||
    "";

  const partnerPhone =
    partner?.phone ||
    order?.deliveryPartnerPhone ||
    "";

  const vehicle =
    partner?.vehicleType ||
    order?.deliveryVehicle ||
    "";

  const estimatedTime =
    order?.estimatedDelivery ||
    (order?.estimatedDeliveryAt
      ? new Date(order.estimatedDeliveryAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "");

  const isOutForDelivery = order?.orderStatus === "Out for Delivery";
  const isDelivered = order?.orderStatus === "Delivered";
  const isCancelled = order?.orderStatus === "Cancelled";

  return (
    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-gray-900">
        Delivery Partner
      </h2>

      {partnerName ? (
        <>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <User className="text-green-600" size={30} />
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900">
                {partnerName}
              </h3>

              <p className="text-gray-500">
                Delivery Executive
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">

            {partnerPhone && (
              <a
                href={`tel:${partnerPhone}`}
                className="flex items-center gap-3 text-gray-700 hover:text-green-600"
              >
                <Phone className="text-green-600" size={20} />
                <span>{partnerPhone}</span>
              </a>
            )}

            {vehicle && (
              <div className="flex items-center gap-3">
                <Bike className="text-green-600" size={20} />
                <span className="text-gray-700">{vehicle}</span>
              </div>
            )}

            {estimatedTime && (
              <div className="flex items-center gap-3">
                <Clock3 className="text-green-600" size={20} />
                <span className="text-gray-700">
                  Estimated Arrival: {estimatedTime}
                </span>
              </div>
            )}

          </div>

          {partnerPhone && !isDelivered && !isCancelled && (
            <a
              href={`tel:${partnerPhone}`}
              className="block text-center mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
            >
              Contact Delivery Partner
            </a>
          )}
        </>
      ) : (
        <div className="mt-8 bg-green-50 rounded-2xl p-5">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <Bike className="text-green-600" size={27} />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            {isCancelled
              ? "Order Cancelled"
              : isDelivered
              ? "Delivery Completed"
              : "Delivery Partner Not Assigned"}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {isOutForDelivery
              ? "Delivery partner details are not available yet."
              : "Delivery partner details will appear here once assigned."}
          </p>

          {estimatedTime && !isCancelled && (
            <div className="flex items-center gap-2 mt-5 text-green-700 text-sm font-semibold">
              <Clock3 size={18} />
              Estimated Arrival: {estimatedTime}
            </div>
          )}
        </div>
      )}

    </section>
  );
}
