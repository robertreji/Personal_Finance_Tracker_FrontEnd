"use client";
import Image from "next/image";
import {SidebarList} from "./sidebar_list"
import { usePathname, useRouter } from "next/navigation";
import { api } from "../../axois";
import {useGetUserDetails} from "@/hooks/getUserDetails"
import { useEffect } from "react";
export  function Sidebar({ isOpen, onClose }) {

  const {data,load:loadUserDetails} = useGetUserDetails()

    const pathName =usePathname()
    const router = useRouter()
    const inHome =pathName==="/dashboard"
    const inIncome =pathName==="/dashboard/income"
    const inExpense =pathName==="/dashboard/expense"
    const inUpcomingExpense =pathName==="/dashboard/upcomingExpense"
    const inMoneyOweMe =pathName==="/dashboard/moneyOweMe"
    const inAsset =pathName==="/dashboard/assets"
    const inSplitBill = pathName==="/dashboard/splitbill"

  async function logout() {
      await api.get("/v1/user/logOut")
      router.push("/auth/login")
    }
  useEffect(()=>{
    loadUserDetails()
  },[data])
  return (
    
    <> 
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 
        ${isOpen ? "opacity-100 " : "opacity-0  pointer-events-none"}`}
        onClick={onClose}
      />

      <div
        className={`flex z-40 flex-col fixed top-0 left-0 h-full w-64 bg-white text-black
        shadow-xl transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 text-xl  flex gap-1 items-center font-semibold border-b ">
          <div onClick={()=>router.push("/dashboard/profile")} className="w-16 h-16 overflow-hidden  rounded-full">
            <img
            width={50}
            height={50}
            alt="profile"
            src={"/images/profile.jpg"}
            className="h-full w-full object-center object-cover"/>
          </div>
          <div className="font-semibold">
            {data?.username}
          </div>
        </div>

        <div className="p-2   flex-3 flex gap-3  flex-col">
            <SidebarList pathnmae={"/dashboard"} onThisList={inHome} listName={"Home"} src={"/icons/home-button.png"}/>
            <SidebarList pathnmae={"/dashboard/income"} onThisList={inIncome} listName={"Income"} src={"/icons/revenue.png"}/>
            <SidebarList pathnmae={"/dashboard/expense"} onThisList={inExpense} listName={"Expense"} src={"/icons/expense.png"}/>
            <SidebarList pathnmae={"/dashboard/upcomingExpense"} onThisList={inUpcomingExpense} listName={"Upcoming Expense's"} src={"/icons/upcoming.png"}/>
            <SidebarList pathnmae={"/dashboard/moneyOweMe"} onThisList={inMoneyOweMe} listName={"Money Owe Me"} src={"/icons/moneyOweMe.png"}/>
            <SidebarList pathnmae={"/dashboard/assets"} onThisList={inAsset} listName={"Crypto Assets's"} src={"/icons/asset.png"}/>
            <SidebarList pathnmae={"/dashboard/splitbill"} onThisList={inSplitBill} listName={"Split BIll"} src={"/icons/Splitbill.png"}/>
        </div>
       <div className="border-t-2  fixed  bottom-24  h-24 w-full flex items-center  ">
            <button onClick={()=>logout()} className="px-6 py-2 rounded-4x flex items-center gap-2">
                <div className="h-7 w-7 overflow-hidden ">
                    <Image
                    alt="logout"
                    height={40}
                    width={40}
                    src={"/icons/logout.png"}/>
                </div>
                Logout
            </button>
        </div> 
      </div>
    </>
  );
}
