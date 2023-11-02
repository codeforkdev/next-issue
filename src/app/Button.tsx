"use client";
import { updateResults1 } from "./actions";
export default function Button() {
  return (
    <div>
      <button
        type="button"
        onClick={async () => updateResults1()}
        className="bg-blue-500 text-white py-1 px-3 rounded"
      >
        update results 1
      </button>
    </div>
  );
}
