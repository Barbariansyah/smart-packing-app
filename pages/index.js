import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import { Layout } from "../components/Layout"

function HomePage(props) {
  const { full_list } = props.data
  // console.log(full_list)
  return (
    <Layout>
      {/* <h2 class="text-center text-xl my-2 font-semibold">Packaging Order</h2>
      <h2 class="text-center text-m my-2 text-gray-500">NO: 123444323</h2> */}
      <ItemList items={full_list} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://cz6q2hn36m.execute-api.us-east-1.amazonaws.com/production/packing/status/94971db8-cd65-4f92-8b0e-8962d78af2ce"
  )
  const { data } = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default HomePage
