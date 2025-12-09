
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {signUpSchema} from "./signupSchema"
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
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { api } from "@/axois.js"


export function SignUpForm() {

  const [isLoading,setIsLoading] =useState(false)
  const [isUnique,setIsUnique] =useState(true)

  const router  = useRouter()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password:""
    },
  })

  async function onSubmit(values: z.infer<typeof signUpSchema>) {

    try {
        const res = await api.post("/v1/user/signUp",values,{withCredentials:true})
        console.log(res.data)
        setIsLoading(prev=>!prev)
        router.push("/auth/login")
            
    } catch (error) {
      console.log(error)
    }
  }
async function  checkUsername(e)
{
  const username = e.target.value;
  if(username.length<3) {
  form.clearErrors("username")
  setIsUnique(false)
  return 
  }


  const res=await api.post("/v1/user/isUniqueUsername",{username},{withCredentials:true})

  if(res.data.data===false){
    setIsUnique(false)
    form.setError("username",{message:"username already taken!"})
  }else{
    form.clearErrors("username")
    setIsUnique(true)
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
              className={` ${isUnique?"text-green-600":"text-red-600"}xl:h-20 rounded-4xl shadow-sm text-base md:text-2xl pl-2 md:pl-6 py-3`}
              placeholder="@username"
              {...field}

              onChange={e=>{
              checkUsername(e)
              field.onChange(e);
              }}
            />
          </FormControl>
          <FormMessage className={`${isUnique?"text-green-600 ":"text-red-600"}`} />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="w-full max-w-xs xl:max-w-xl md:max-w-lg">
          <FormLabel className="text-lg md:text-4xl text-gray-600">Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              className="  xl:h-20  rounded-4xl shadow-sm text-base md:text-2xl pl-2 md:pl-6 py-3"
              placeholder="email@gmail.com"
              {...field}
            />
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
      {isLoading?<Loader2 className="w-6 h-4 animate-spin mr-2"/> :"SignUp"}
    </Button>
  </form>
</Form>
  )
}



