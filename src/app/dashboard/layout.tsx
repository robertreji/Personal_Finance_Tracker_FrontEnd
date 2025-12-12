"use client"
import { useState } from "react"
import {Navbar} from "../../components/mycomponents/navbar"
import {Sidebar} from "../../components/mycomponents/sidebar"
export default function Layout( {children}:{children:React.ReactNode})
{
    const [open,setOpen] = useState(false)
    return (
        <div className="w-screen h-screen overflow-x-hidden flex flex-col">
            <Navbar Open={()=>setOpen(true)}/>
            <Sidebar onClose={()=>setOpen(false)} isOpen={open}/>
            {children}
        </div>
      
    )
}