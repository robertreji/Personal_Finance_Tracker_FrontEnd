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
  <div className="w-full h-full flex-1 ">

</div>

  );
}
