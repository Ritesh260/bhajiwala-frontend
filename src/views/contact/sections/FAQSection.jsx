"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
} from "lucide-react";


const faqs = [
  {
    id: 1,
    question: "Do you provide home delivery?",
    answer:
      "Yes, we provide fresh vegetable delivery directly to your doorstep in nearby areas.",
  },
  {
    id: 2,
    question: "How can I place an order?",
    answer:
      "You can order through our website, WhatsApp or by directly calling our shop.",
  },
  {
    id: 3,
    question: "Are vegetables fresh every day?",
    answer:
      "Yes, we bring fresh stock daily from trusted suppliers and farmers.",
  },
  {
    id: 4,
    question: "What payment methods are available?",
    answer:
      "We accept UPI, cash and other online payment methods.",
  },
  {
    id: 5,
    question: "Can I order bulk vegetables?",
    answer:
      "Yes, bulk orders are available for events, restaurants and regular customers.",
  },
];


export default function FAQSection() {


  const [open, setOpen] = useState(null);



  return (

    <section className="py-24 bg-[#F8FAF5]">


      <div className="max-w-5xl mx-auto px-5">



        {/* Heading */}

        <div className="text-center mb-14">


          <span className="inline-flex items-center gap-2 text-green-600 uppercase tracking-[3px] font-semibold">

            <HelpCircle size={18}/>

            FAQ

          </span>



          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">

            Frequently Asked

            <span className="block text-green-600">
              Questions
            </span>

          </h2>



          <p className="mt-5 text-gray-600">

            Find answers to common questions about orders,
            delivery and services.

          </p>


        </div>






        {/* FAQ */}

        <div className="space-y-5">


          {faqs.map((item)=>{


            const isOpen = open === item.id;



            return (

              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
              >



                <button
                  onClick={() =>
                    setOpen(isOpen ? null : item.id)
                  }
                  className="w-full flex items-center justify-between gap-5 p-6 text-left"
                >


                  <h3 className="font-bold text-lg text-gray-900">

                    {item.question}

                  </h3>



                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">


                    {isOpen ? (

                      <Minus
                        className="text-green-600"
                        size={20}
                      />

                    ) : (

                      <Plus
                        className="text-green-600"
                        size={20}
                      />

                    )}


                  </div>



                </button>





                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen
                    ? "max-h-40 pb-6"
                    : "max-h-0"
                  }`}
                >


                  <p className="text-gray-600 leading-7">

                    {item.answer}

                  </p>


                </div>



              </div>

            );


          })}



        </div>


      </div>


    </section>

  );

}