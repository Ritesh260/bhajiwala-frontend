import {
  Leaf,
  Truck,
  BadgeCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Leaf size={42} />,
    title: "Farm Fresh",
    description:
      "Fresh vegetables sourced directly from trusted local farms every single day.",
  },
  {
    id: 2,
    icon: <Truck size={42} />,
    title: "Fast Delivery",
    description:
      "Quick doorstep delivery to keep your vegetables fresh and healthy.",
  },
  {
    id: 3,
    icon: <Wallet size={42} />,
    title: "Best Prices",
    description:
      "Affordable pricing with exciting offers and daily discounts for every customer.",
  },
  {
    id: 4,
    icon: <BadgeCheck size={42} />,
    title: "Quality Checked",
    description:
      "Every vegetable is carefully selected to ensure freshness and premium quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-green-600 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Why People Love
            <span className="text-green-600"> BhajiWala</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            We bring farm-fresh vegetables, affordable prices,
            and reliable doorstep delivery to make your daily shopping easier.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}