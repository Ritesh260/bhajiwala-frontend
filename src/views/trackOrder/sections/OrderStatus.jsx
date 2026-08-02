import {
  CircleCheckBig,
  Package,
  Truck,
  House,
} from "lucide-react";

const steps = [
  {
    title: "Order Confirmed",
    time: "10:25 AM",
    active: true,
    icon: CircleCheckBig,
  },
  {
    title: "Packed",
    time: "10:35 AM",
    active: true,
    icon: Package,
  },
  {
    title: "Out For Delivery",
    time: "10:45 AM",
    active: true,
    icon: Truck,
  },
  {
    title: "Delivered",
    time: "Expected 11:05 AM",
    active: false,
    icon: House,
  },
];

export default function OrderStatus() {
  return (
    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-gray-900">
        Order Status
      </h2>

      <div className="mt-8 space-y-8">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="flex gap-4 relative"
            >

              {index !== steps.length - 1 && (
                <div className="absolute left-5 top-10 h-12 w-[2px] bg-gray-200"></div>
              )}

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.active
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <Icon size={18} />
              </div>

              <div>

                <h3 className="font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {step.time}
                </p>

              </div>

            </div>

          );
        })}

      </div>

    </section>
  );
}