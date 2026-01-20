import * as z from "zod";

export const card = z.object({
  wordCategory: z.string(),
});
export type Card = z.input<typeof card>;
