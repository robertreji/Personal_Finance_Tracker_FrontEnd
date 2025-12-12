import Image from "next/image"
import { useRouter } from "next/navigation"

export const SidebarList = ({onThisList,listName,src,pathnmae})=>{
    const router = useRouter()

    return(
        <div onClick={()=>router.push(pathnmae)} className={`w-full h-12 rounded-2xl overflow-hidden flex gap-2 items-center pl-3
             md:hover:bg-linear-to-br from-gray-100 from-60% via-red-500 to-30% via-10% to-gray-50
             md:hover:shadow-xl
             ${onThisList?"bg-linear-to-br from-gray-100 from-60% via-red-500 to-30% via-10% to-gray-50 shadow-xl":""}
        `}>
            <div className="z-10 w-7 h-7 rounded-full overflow-hidden bg-white">
                <Image
                    alt="home"
                    width={48}
                    height={48}
                    src={src}
                    className="object-cover object-center"
                />
            </div>
            <h2 className="font-bold text-black">{listName}</h2>
        </div>
    )
}