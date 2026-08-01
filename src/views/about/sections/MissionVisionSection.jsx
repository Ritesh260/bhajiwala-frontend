import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-green-600 font-semibold">
            Our Values
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Mission & Vision
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Our purpose is to deliver fresh vegetables with honesty,
            quality and care while building long-term trust with every customer.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission */}

          <div className="group bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">

              <Target size={40} />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-8">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              To provide every family with fresh, healthy and affordable
              vegetables directly from trusted farms while ensuring the
              highest quality, fair prices and excellent customer service.
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">

                <HeartHandshake className="text-green-600" />

                <span className="text-gray-700">
                  Honest Service
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-600" />

                <span className="text-gray-700">
                  Premium Quality
                </span>

              </div>

              <div className="flex items-center gap-3">

                <HeartHandshake className="text-green-600" />

                <span className="text-gray-700">
                  Customer Satisfaction
                </span>

              </div>

            </div>

          </div>

          {/* Vision */}

          <div className="group bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">

              <Eye size={40} />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-8">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              To become the most trusted online vegetable store by
              connecting local farmers with families through technology,
              fresh produce and fast doorstep delivery.
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-600" />

                <span className="text-gray-700">
                  Trusted Brand
                </span>

              </div>

              <div className="flex items-center gap-3">

                <HeartHandshake className="text-green-600" />

                <span className="text-gray-700">
                  Support Local Farmers
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Eye className="text-green-600" />

                <span className="text-gray-700">
                  Sustainable Future
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}