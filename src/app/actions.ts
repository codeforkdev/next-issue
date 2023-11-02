"use server";
import { revalidatePath } from "next/cache";

export async function reset() {
  revalidatePath("results");
}
