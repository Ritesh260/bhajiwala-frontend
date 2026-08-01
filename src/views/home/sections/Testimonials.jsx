import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Andheri, Mumbai",
    review:
      "Fresh vegetables, great quality and super fast delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Jogeshwari, Mumbai",
    review:
      "I order every week from BhajiWala. Vegetables are always fresh and prices are reasonable.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Goregaon, Mumbai",
    review:
      "Very professional service with excellent quality. The vegetables stay fresh for days.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-green-600 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Trusted by hundreds of happy families who choose fresh vegetables every day.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-[#F8FAF5] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="flex gap-1 text-yellow-500 mb-5">

                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>

              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}