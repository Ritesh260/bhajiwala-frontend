import {
  Truck,
  Leaf,
  ShieldCheck,
  Clock,
} from "lucide-react";


const benefits = [
  {
    icon: Leaf,
    title: "Fresh Vegetables",
    desc: "Directly sourced fresh quality products",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick delivery at your doorstep",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    desc: "Quality checked vegetables every day",
  },
  {
    icon: Clock,
    title: "Daily Service",
    desc: "Open every day for your needs",
  },
];



export default function Benefits() {


  return (

    <div>


      <span className="text-green-600 uppercase tracking-[3px] font-semibold">
        BhajiWala
      </span>



      <h2 className="mt-5 text-5xl font-extrabold text-gray-900 leading-tight">

        Fresh Food

        <span className="block text-green-600">
          Fresh Life
        </span>

      </h2>



      <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">

        Create your account and enjoy fresh vegetables,
        exclusive offers and easy doorstep delivery.

      </p>





      <div className="mt-10 space-y-5">


        {benefits.map((item,index)=>{


          const Icon = item.icon;


          return (

            <div
              key={index}
              className="flex items-center gap-5 bg-white p-5 rounded-3xl shadow-sm border border-gray-100"
            >


              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">


                <Icon className="text-green-600"/>


              </div>



              <div>


                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>


                <p className="text-gray-500 text-sm mt-1">
                  {item.desc}
                </p>


              </div>



            </div>

          );


        })}



      </div>


    </div>

  );

}