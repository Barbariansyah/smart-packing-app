import "tailwindcss/tailwind.css"
import ItemList from "../components/ItemList"
import { Layout } from "../components/Layout"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(
        "https://cz6q2hn36m.execute-api.us-east-1.amazonaws.com/production/packing/overhead-station-1/status/94971db8-cd65-4f92-8b0e-8962d78af2ce"
      )
      const { data } = await res.json()
      console.log(data)
      if (data.labeled) {
        router.push("/next-order")
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div class="container h-screen flex items-center bg-gray-900">
      <h2 class="animate-bounce text-center text-3xl px-2 my-auto mx-auto font-semibold text-green-300">
        Please Scan Packaging Label
      </h2>
    </div>
  )
}

export default HomePage
