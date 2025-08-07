import z from "zod";

export const createUserZodValidation = z.object({
    name: z
        .string({ error: 'Name must be string' })
        .min(3, { message: "Name is too short" })
        .max(50, { message: "Name is too long" }),
    email: z.email({ error: "you have to use email formate" }),
    password: z.string({ error: 'password must be string' })
        .min(8, "Password must be at least 8 characters long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, { message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),
    phone: z.string({ error: 'phone must be string' })
        .regex(
            /^(?:\+8801|01)[0-9]{9}$/,
            "Invalid Bangladeshi phone number format"
        )
        .optional(),
    address: z.string({ error: 'address must be string' })
        .optional(),
})