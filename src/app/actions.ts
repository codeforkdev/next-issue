"use server";
import { revalidatePath } from "next/cache";

export async function updateResults1() {
  revalidatePath("/results-1");
}
