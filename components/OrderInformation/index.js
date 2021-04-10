import "tailwindcss/tailwind.css"

const OrderInformation = () => {
  return (
    <div class="bg-gray-800 shadow overflow-hidden sm:rounded-lg my-4">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-semibold text-green-300">
          Order Information
        </h3>
      </div>
      <div class="border-t border-gray-900">
        <dl>
          <div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-medium font-medium text-gray-100">Order ID</dt>
            <dd class="mt-1 text-sm text-gray-50 sm:mt-0 sm:col-span-2">
              1244563662
            </dd>
          </div>
          <div class="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-medium font-medium text-gray-100">Item Left to Pack</dt>
            <dd class="mt-1 text-sm text-gray-50 sm:mt-0 sm:col-span-2">4</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default OrderInformation
