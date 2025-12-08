
import { email, z } from "zod"

const signUpSchema = z.object({
  username: z.string().min(2).max(50),
  password:z.string().min(4).max(20),
  email:z.email()
})

export {signUpSchema}