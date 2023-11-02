"use client";
import { reset } from "./actions";
export default function Button() {
  return (
    <button
      type="button"
      onClick={async () => reset()}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      update results 1
    </button>
  );
}
