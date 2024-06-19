import React from 'react'
import { CiSearch } from "react-icons/ci";


function Transactions() {
  return (
    <div>
    <div className= " p-2 bg-gray-100">
    <div className='flex flex-row justify-between bg-white '>
        <div className='border border-black h-9 w-2/5 mt-2 ml-2 flex flex-row'>
            <div>  <CiSearch  className='h-6 w-8 mt-1'></CiSearch></div>
            <div className='mt-1 ml-2'> Search  by Order Id</div>

        </div>
        <div className='flex flex-row mt-2 mr-2 mb-2'>
        <div className='border p-2 '><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 7.53a.75.75 0 0 0 1.06 0l.72-.72V17a.75.75 0 0 0 1.5 0V6.81l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06m-4.72 9.66l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7a.75.75 0 0 1 1.5 0z"></path></svg></div>
<div className='w-5'></div>
        <div className='border p-2  '>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path></svg>
        </div>
        </div>
        
    </div>

    <div>
        

<div class="relative overflow-x-auto mt-2 p-2  bg-white">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Order ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Order Date
                </th>
                <th scope="col" class="px-6 py-3">
                Order Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Transaction Fees
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #200006
                </th>
                <td class="px-6 py-4">
                31 May, 2023
                </td>
                <td class="px-6 py-4">
                ₹2999
                </td>
                <td class="px-6 py-4">
                ₹10
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>

    </div>
          
    </div>
  )
}

export default Transactions
