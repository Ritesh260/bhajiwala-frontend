import {
  Store,
  Users,
  Truck,
  Globe,
} from "lucide-react";

const timeline = [
  {
    year: "2018",
    icon: <Store size={30} />,
    title: "Shop Started",
    desc: "Started our journey with a small local vegetable shop.",
  },
  {
    year: "2020",
    icon: <Users size={30} />,
    title: "Growing Customers",
    desc: "Trusted by hundreds of happy families.",
  },
  {
    year: "2023",
    icon: <Truck size={30} />,
    title: "Home Delivery",
    desc: "Started fast doorstep vegetable delivery.",
  },
  {
    year: "2026",
    icon: <Globe size={30} />,
    title: "BhajiWala Online",
    desc: "Launched our online vegetable ordering platform.",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-green-600 font-semibold">
            Our Journey
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Milestones
          </h2>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {timeline.map((item) => (

            <div
              key={item.year}
              className="relative bg-[#F8FAF5] rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center">

                {item.icon}

              </div>

              <h3 className="text-3xl font-bold text-green-600 mt-6">
                {item.year}
              </h3>

              <h4 className="font-bold text-xl mt-3">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}