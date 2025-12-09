"use client"
import { useRouter } from "next/navigation.js"
import {api }from "../../axois.js"
export default function Page() {
const router = useRouter()

  async function logout() {
    const res = await api.get("/v1/user/logOut")
    router.push("/auth/login")
    console.log("axios response :",res?.data|| "no response ")
  }
    async function userdetails() {
    const res = await api.get("/v1/user/getuserdetails")
    console.log("user details :",res?.data.data.user|| "no response ")
  }
  return (
  <div className="relative min-h-screen w-screen bg-slate-900 grid grid-cols-3 grid-rows-1 items-center justify-center text-white ">
      <button onClick={()=>logout()} className="ring-2 ring-white p-10 ml-10">logout</button>
      <button onClick={userdetails} className="ring-2 ring-white p-10 ml-10">user dtails</button>
</div>

  );
}
