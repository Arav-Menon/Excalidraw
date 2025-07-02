import { z } from "zod"

export const authValidations = z.object({
    name: z.string(),
    email : z.string().email(),
    password : z.string()
})