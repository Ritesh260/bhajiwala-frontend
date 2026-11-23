
import {
  CircleCheckBig,
  Package,
  Truck,
  House,
} from "lucide-react";

const steps = [
  {
    title: "Order Confirmed",
    statuses: ["Confirmed"],
    icon: CircleCheckBig,
  },
  {
    title: "Packed",
    statuses: ["Preparing", "Ready for Pickup"],
    icon: Package,
  },
  {
    title: "Out For Delivery",
    statuses: ["Picked Up", "Out for Delivery"],
    icon: Truck,
  },
  {
    title: "Delivered",
    statuses: ["Delivered"],
    icon: House,
  },
];

const getStepIndex = (status) => {
  if (status === "Pending") return -1;
  if (status === "Confirmed") return 0;
  if (["Preparing", "Ready for Pickup"].includes(status)) return 1;
  if (["Picked Up", "Out for Delivery"].includes(status)) return 2;
  if (status === "Delivered") return 3;

  return -1;
};

const getStepTime = (history, statuses) => {
  if (!Array.isArray(history)) return "";

  const entry = history.find((item) => statuses.includes(item.status));
  const date = entry?.updatedAt || entry?.createdAt || entry?.timestamp;

  if (!date) return "";

  return new Date(date).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function OrderStatus({ order }) {
  const currentStatus = order?.orderStatus || "Pending";
  const isCancelled = currentStatus === "Cancelled";
  const currentStep = getStepIndex(currentStatus);
  const history = order?.statusHistory || [];

  return (
    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-gray-900">
        Order Status
      </h2>

      {isCancelled ? (
        <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-5">
          <h3 className="font-bold text-red-700">
            Order Cancelled
          </h3>

          <p className="text-sm text-red-600 mt-2">
            This order has been cancelled.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index <= currentStep;
            const isCurrent = index === currentStep;
            const time = getStepTime(history, step.statuses);

            return (
              <div
                key={step.title}
                className="flex gap-4 relative"
              >
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute left-5 top-10 h-12 w-[2px] ${
                      index < currentStep
                        ? "bg-green-600"
                        : "bg-gray-200"
                    }`}
                  />
                )}

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    active
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {step.title}

                    {isCurrent && (
                      <span className="ml-2 text-xs text-green-600">
                        Current
                      </span>
                    )}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {time || (isCurrent ? "In progress" : "Waiting")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
