
import { z } from "zod"

const loginSchema = z.object({
  username: z.string().min(2).max(50),
  password:z.string().min(4).max(20)
})

export {loginSchema}