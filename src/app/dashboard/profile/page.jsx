"use client"
import Image from "next/image" 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useCurrencyStore } from "../../../store/userCurrencyStore"

export default function ProfilePage(){
  const {currency ,setCurrency}= useCurrencyStore()
  return(
        <div className="w-full  h-full flex flex-col gap-3 px-4 mt-10">
            <div className=" shadow-[0_0_30px_5px_rgba(0,0,0,0.05)] w-full h-64 rounded-3xl flex flex-col mb-6">
                <div className="w-full h-2/3 flex flex-col gap-3 items-center justify-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full overflow-hidden">
                        <img
                        alt="profile"
                        src="/images/profile.jpg"
                        className="h-full w-full object-center object-cover"/>
                    </div>
                    <p className="text-xl font-mono font-semibold mt-4">Robert reji</p>
                </div>
                <div className=" h-1/3 w-full flex flex-col items-center justify-center">
                <button className="px-5 py-2 rounded-2xl  shadow-sm  overflow-hidden flex gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                        <Image alt="edit" width={200} height={200} src={"/images/edit.png"}/>    
                    </div>
                Edit profile</button>
                </div>
            </div>
            <div className="w-full h-auto  flex-col flex rounded-3xl pl-6  shadow-[0_0_50px_2px_rgba(0,0,0,0.05)]">
                <div className="w-full h-16 flex  relative gap-3 items-center border-b">
                    <div className="w-6 h-6 overflow-hidden ">
                        <Image
                        width={40} height={40}
                        alt={"emial"} src="/icons/email.png"/>
                    </div>
                    <p className="font-serif font-semibold">Change Email</p>
                    <div className="w-4 h-4 absolute right-10 overflow-hidden ">
                        <Image
                        width={40} height={40}
                        alt={"emial"} src="/icons/next.png"/>
                    </div>
                </div>
                <div className="w-full h-16 flex  z-0 gap-3 items-center border-b">
                    <div className="w-6 h-6 overflow-hidden ">
                        <Image
                        width={40} height={40}
                        alt={"emial"} src="/icons/password.png"/>
                    </div>
                    <p className="font-serif font-semibold">Change Password</p>
                     <div className="w-4 h-4 overflow-hidden absolute right-10">
                        <Image
                        width={40} height={40}
                        alt={"emial"} src="/icons/next.png"/>
                    </div>
                </div>
                <div className="w-full h-auto py-6 flex  relative gap-3 items-center ">
                    <div className="w-6 h-6 overflow-hidden ">
                        <Image
                        width={40} height={40}
                        alt={"emial"} src="/icons/currency.png"/>
                    </div>
                    <p className="font-serif font-semibold">Change currency</p>
                    <div className="z-0 relative">
                    <DropdownMenu  >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{currency}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                        <DropdownMenuRadioGroup value={currency} onValueChange={setCurrency}>
                        <DropdownMenuRadioItem value="INR">INR</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="USD">USD</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="EUR">EUR</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}
