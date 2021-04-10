import "tailwindcss/tailwind.css"

const Item = () => {
  return (
    <tr>
      <td className="px-2 py-4">
        <div className="flex-shrink-0 h-20 w-20 mx-auto">
          <img className="h-20 w-20" src="/placeholder/lays.jpeg" alt="" />
        </div>
      </td>
      <td className="px-2 py-4 whitespace-nowrap">
        <div className="text-base text-gray-900">Lays Potato</div>
        <div className="text-sm text-gray-500">ID: 122133452</div>
      </td>
    </tr>
  )
}

export default Item
