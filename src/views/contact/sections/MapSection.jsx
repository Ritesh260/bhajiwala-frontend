import {
  MapPin,
  Navigation,
  Clock,
} from "lucide-react";


export default function MapSection() {


  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-10 items-center">



          {/* Map */}

          <div className="rounded-[35px] overflow-hidden shadow-xl border border-gray-100 h-[450px]">


            <iframe
              src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
            ></iframe>


          </div>





          {/* Content */}

          <div>


            <span className="text-green-600 uppercase tracking-[3px] font-semibold">
              Find Our Store
            </span>



            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">

              Visit Our

              <span className="block text-green-600">
                BhajiWala Shop
              </span>

            </h2>



            <p className="mt-6 text-gray-600 leading-8">

              Come visit our store and choose fresh vegetables
              directly. We provide quality products with trusted
              service every day.

            </p>





            {/* Address Card */}

            <div className="mt-8 bg-[#F8FAF5] rounded-3xl p-6">


              <div className="flex gap-4">


                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                  <MapPin className="text-green-600"/>

                </div>



                <div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    Store Address
                  </h4>


                  <p className="text-gray-600 mt-1">
                    Andheri East,
                    <br />
                    Mumbai, Maharashtra
                  </p>


                </div>


              </div>


            </div>






            {/* Timing */}

            <div className="mt-5 flex items-center gap-4 bg-[#F8FAF5] rounded-3xl p-6">


              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                <Clock className="text-green-600"/>

              </div>


              <div>

                <h4 className="font-bold text-gray-900">
                  Opening Hours
                </h4>


                <p className="text-gray-600">
                  Every Day • 7 AM - 10 PM
                </p>


              </div>


            </div>






            {/* Button */}

            <a
              href="https://maps.google.com"
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
            >

              <Navigation size={20}/>

              Get Directions

            </a>



          </div>



        </div>


      </div>


    </section>

  );

}