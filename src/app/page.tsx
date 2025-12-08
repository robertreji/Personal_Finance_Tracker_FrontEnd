"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
const router = useRouter()
  async function logOut(){
      const res = await axios.get("http://localhost:5001/api/v1/user/logOut",{withCredentials:true})
      router.push("/auth/login")
      }
  return (
    <div className="min-h-screen w-screen bg-slate-950 flex items-center justify-center text-white ">
        home page
        <button onClick={()=>(logOut())} className=" m-auto text-2xl ring-2 ring-white">logout</button>
    </div>
  );
}
