import * as z from "zod";
 
export const guestSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  cpf: z.string().min(11).max(11),
  phone: z.string().min(11).max(11),
  table_number: z.number()
});

