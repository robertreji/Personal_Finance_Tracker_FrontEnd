
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {loginSchema} from "./loginSchema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoaderCircleIcon } from "lucide-react"


export function LoginForm() {

  const [isLoading,setIsLoading] = useState(false)
const router  = useRouter()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password:""
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {

    try {
        const res = await axios.post("/api/v1/user/signIn",values,{withCredentials:true})
        console.log(res.data)
        setIsLoading(prev=>!prev)
        router.push("/dashboard")      
    } catch (error) {
    }
  }
  return (
<Form {...form}>
  
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="w-full h-full flex flex-col items-center gap-4 pt-2 md:pt-6"
  >
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem className="w-full xl:max-w-xl xl:h-40 max-w-xs md:max-w-lg">
          <FormLabel className="text-lg md:text-4xl text-gray-600">Username</FormLabel>
          <FormControl>
            <Input
              className=" xl:h-20 rounded-4xl shadow-sm text-base md:text-2xl pl-2 md:pl-6 py-3"
              placeholder="@username"
              {...field}
                
             onChange={e=>{
              field.onChange(e)
              }}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem className="w-full max-w-xs xl:max-w-xl md:max-w-lg">
          <FormLabel className="text-lg md:text-4xl text-gray-600">Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              className="  xl:h-20  rounded-4xl shadow-sm text-base md:text-2xl pl-2 md:pl-6 py-3"
              placeholder="****"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button
      className="w-full max-w-xs md:max-w-md xl:max-w-xl mt-4 md:mt-6 bg-purple-600 rounded-4xl md:h-20 md:text-2xl"
      type="submit"
    >
     {isLoading?<LoaderCircleIcon className="w-6 h-6  animate-spin"/>:"Login"} 
    </Button>
  </form>
</Form>

  )
}



