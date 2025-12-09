
import { email, z } from "zod"

const signUpSchema = z.object({
  username: z.string().min(2,"minimum 2 characters ").max(50,"maximum 50 characters"),
  password:z.string().min(4,"minimum 4 characters required").max(20),
  email:z.email("invalid email format")
})

export {signUpSchema}