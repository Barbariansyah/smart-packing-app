import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import OrderInformation from "../components/OrderInformation"
import { Layout } from "../components/Layout"

function HomePage() {
  return (
    <Layout>
      {/* <h2 class="text-center text-xl my-2 font-semibold">Packaging Order</h2>
      <h2 class="text-center text-m my-2 text-gray-500">NO: 123444323</h2> */}
      <OrderInformation />
      <ItemList />
    </Layout>
  )
}

export default HomePage
