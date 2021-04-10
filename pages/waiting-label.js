import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import { Layout } from "../components/Layout"

function HomePage() {
  return (
    <div class="container h-screen flex items-center bg-gray-900">
      <h2 class="text-center text-3xl px-2 my-auto mx-auto font-semibold text-green-300">
        Please Scan Packaging Label
      </h2>
    </div>
  )
}

export default HomePage
