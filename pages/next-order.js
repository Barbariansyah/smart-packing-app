import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import { Layout } from "../components/Layout"
import Link from "next/link"

function NextOrder() {
  return (
    <div class="container h-screen flex items-center bg-gray-900">
      <h2 class="text-center text-3xl px-2 my-auto mx-auto font-semibold text-green-300">
        Item Match
      </h2>
      <div class="container absolute bottom-4 w-full flex">
        <Link href="/">
          <button
            type="button"
            class="w-11/12 mx-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-m font-medium text-white bg-red-600"
          >
            Next Order
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NextOrder
