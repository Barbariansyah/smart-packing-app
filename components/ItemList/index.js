import "tailwindcss/tailwind.css"
import Item from "../Item"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import OrderInformation from "../OrderInformation"

const ItemList = (props) => {
  const [listData, setListData] = useState(props.items)
  const router = useRouter()

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const res = await fetch(
  //       "https://cz6q2hn36m.execute-api.us-east-1.amazonaws.com/production/packing/status/94971db8-cd65-4f92-8b0e-8962d78af2ce"
  //     )
  //     const { data } = await res.json()
  //     console.log(data)
  //     setListData((listData) => [...listData, ...data.full_list])
  //     console.log(listData)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    if (listData.length == 0) {
      router.push("/waiting-label")
    }
  })

  const ItemComponent = listData.map((item) => (
    <Item img={item.item_image_url} name={item.item_name} />
  ))

  return (
    <>
      <OrderInformation itemRemaining={listData.length} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ItemComponent}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemList
