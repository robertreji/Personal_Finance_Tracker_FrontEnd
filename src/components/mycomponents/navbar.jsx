import Image from "next/image"


export const Navbar = ({Open})=>{
    return(
        <div className="w-full  min-h-14 max-h-16 flex ">
            <div className="flex-1 bg-white flex items-center pl-2 gap-3">
                <div className="w-10 h-10  rounded-full overflow-hidden md:hidden" onClick={Open}>
                    <Image alt="icon"
                    width={100}
                    height={100}
                    src={"/icons/sidebar_icon.png"}
                    className="w-full h-full object-center object-cover"/>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image alt="icon"
                    width={100}
                    height={100}
                    src={"/images/ChatGPT Imagesignup.png"}
                    className="w-full h-full object-center object-cover"/>
                </div>
                <div className="font-mono italic font-bold text-2xl">Fintech</div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-2 pr-4">
                <div className="min-h-8 min-w-8 max-h-8 max-w-8  p-1 rounded-full overflow-hidden ring-1 ring-gray-300">
                    <Image
                    alt="notification img"
                    width={300}
                    height={600}
                    src={"/icons/notificaton_icon.png"}
                    className=" object-cover object-center"/>
                </div>
                <div className="h-10 w-10 rounded-full  overflow-hidden">
                    <Image
                    alt="profile image"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover object-center"
                    src={"/images/ChatGPT Imagesignup.png"}/>
                </div>
            </div>
        </div>
    )
}