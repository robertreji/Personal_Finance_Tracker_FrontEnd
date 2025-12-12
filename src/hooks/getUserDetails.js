import { useState } from "react"
import {userServices} from "@/services/user.services"


export const useGetUserDetails =()=>{

 const [data,setData] = useState(null)

 const load =async()=>{
    const res = await userServices.getUserDetails()
    setData(res.data.data.user)
    
 }
return {data, load}
}
