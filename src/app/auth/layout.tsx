
 "use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({children}:{children:React.ReactNode}) {
  const pathname = usePathname()

  const isLogin = pathname === "/auth/login"
  const isSignup = pathname === "/auth/signup"


  return (
    <div className="w-full min-h-screen  md:p-10 flex ">

      <div className="flex-1 flex">

        <div className="  h-full overflow-hidden p-2 md:p-10  md:min-h-[80%] w-[95%] max-w-3xl rounded-2xl m-auto flex flex-col md:gap-8 gap-3">

          <div className="overflow-hidden flex flex-1 flex-row ring-gray-200 ring-2  shadow-[0_0px_15px_rgba(0,0,0,0.25)]  rounded-2xl">
            <div className="min-w-1/2 max-w-1/2  max-h-full  rounded-l-2xl">
               <Image
                alt="image calculator"
                src={"/images/ChatGPT Imagesignup.png"}
                width={400}
                height={800}
                className=" w-full h-full object-cover rounded-l-2xl "
              /> 
            </div>
            <div className=" pl-2 pr-1 max-h-full   w-[90%]  rounded-r-2xl flex gap-3 flex-col justify-center items-center">
               <h1 className="font-bold tracking-wide text-lg md:text-4xl">Stay on top of your money !</h1>
              <p className="text-gray-500 md:text-2xl">Track income,expenses and upcoming bills in one clean place.</p> 
            </div> 
          </div>
          <div className="bg-white flex-2 md:flex-2 flex flex-col shadow-2xl/15 ring-gray-200 ring-2  shadow-[0_0px_15px_rgba(0,0,0,0.25)]  rounded-2xl">
            <div className="w-full flex-1 flex   rounded-t-2xl">
              <div className="flex-1 md:flex-2 flex items-center justify-center px-4">
                <Link href={"/auth/login"} className={`w-full text-center ${isLogin?"bg-purple-600 shadow-md text-white": "bg-white text-gray-500"}  font-bold text-lg md:text-4xl  font-serif rounded-4xl px-4 py-2`}>
                  Login
                </Link>              
                </div>
              <div className="flex-1 md:flex-2 flex items-center justify-center px-4">
                <Link href={"/auth/signup"} className={`w-full text-center ${ isSignup?"bg-purple-600 shadow-md text-white":"bg-white text-gray-500"}  font-bold text-lg md:text-4xl  font-serif rounded-4xl px-4 py-2`}>
                  Signup
                </Link>
              </div>
            </div>
            <div className="flex-6  flex  items-center justify-center p-2 md:p-6">
                <div className="h-full w-full  overflow-hidden rounded-3xl flex items-center justify-center">
                   {
                   children
                   }
                </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
