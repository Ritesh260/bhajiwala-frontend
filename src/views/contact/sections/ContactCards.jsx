import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";


const contactData = [
  {
    id: 1,
    title: "Call Us",
    description: "+91 9839621748",
    subText: "Talk with our support team",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "WhatsApp Order",
    description: "Quick Chat",
    subText: "Order fresh vegetables easily",
    icon: MessageCircle,
  },
  {
    id: 3,
    title: "Visit Store",
    description: "Andheri East, Mumbai",
    subText: "Come and shop fresh items",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Opening Hours",
    description: "7:00 AM - 10:00 PM",
    subText: "Open Every Day",
    icon: Clock,
  },
];


export default function ContactCards() {

  return (

    <section className="py-20 bg-white">


      <div className="max-w-7xl mx-auto px-5">


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">


          {contactData.map((item)=>{


            const Icon = item.icon;


            return (

              <div
                key={item.id}
                className="group bg-[#F8FAF5] rounded-[30px] p-7 border border-gray-100 hover:bg-green-600 transition duration-300 hover:-translate-y-2"
              >


                <div className="w-14 h-14 rounded-2xl bg-green-100 group-hover:bg-white/20 flex items-center justify-center transition">


                  <Icon
                    size={28}
                    className="text-green-600 group-hover:text-white transition"
                  />


                </div>



                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mt-6 transition">

                  {item.title}

                </h3>



                <p className="text-green-600 group-hover:text-white font-semibold mt-2 transition">

                  {item.description}

                </p>



                <p className="text-gray-500 group-hover:text-green-100 text-sm mt-2 leading-6 transition">

                  {item.subText}

                </p>



              </div>

            );


          })}



        </div>


      </div>


    </section>

  );

}