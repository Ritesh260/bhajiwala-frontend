import LoginForm from "./sections/LoginForm";
import Benefits from "./sections/Benefits";


export default function LoginPage() {


  return (

    <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20">


      <div className="max-w-7xl mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-12 items-center">



          {/* Left */}

          <div className="hidden lg:block">


            <Benefits />


          </div>





          {/* Right */}

          <div className="flex justify-center">


            <LoginForm />


          </div>



        </div>



      </div>


    </main>

  );

}