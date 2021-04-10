import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import { Layout } from "../components/Layout"

function NextOrder() {
  return (
    <div class="container h-screen flex items-center">
      <h2 class="text-center text-3xl px-2 my-auto mx-auto font-semibold text-green-500">
        Item Match
      </h2>
      <div class="container absolute bottom-4 w-full flex">
        <button
          type="button"
          class="w-11/12 mx-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-m font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next Order
          {/* <svg
            class="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg> */}
        </button>
      </div>
    </div>
  )
}

export default NextOrder
