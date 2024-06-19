import React from 'react'
import { SiGooglemessages } from "react-icons/si";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Card from './Card';
import Transactions from './Transactions';

function Payouts() {
  return (
    <div className='grid grid-cols-1'>
    <div className='flex flex-row justify-between shadow col-12'>
    <div className='flex flex-row'>
    <div className='p-5 text-xl font-bold'>Payouts</div>
    <div className='w-20 h-7'>
    <div className='pt-5 pr-4 flex flex-row justify-start'>
    <div>

    <HiOutlineQuestionMarkCircle className='w-16 h-7 pr-10' ></HiOutlineQuestionMarkCircle> 
    </div>

    <div className='invisible md:visible flex flex-row justify-between'> <div className='pr-2'>how</div> <div className='pr-2'>this </div>  <div>works</div>    </div>
    </div>
    </div>
    
    </div>
    <div className='invisible md:visible w-2/5 pr-2 pt-2'>
    <div className='h-8  rounded-md  flex justify-start bg-gray-100 mt-2'>
        <div className='pt-1 pl-2 flse flex-row justify-start '>
        <CiSearch className='w-6 h-5 '>  </CiSearch>
       
        </div>
        
        <div> Search features , tutorial ,et </div>
    </div>

    </div>

    
    
    <div className ='flex flex-row justify-start pt-1'>
    <SiGooglemessages className='h-11 w-20 pt-1'  ></SiGooglemessages>
    <IoMdArrowDropdownCircle className='h-12 w-20'></IoMdArrowDropdownCircle>

    </div>
    </div>
    <div className='w-5/5 bg-gray-100 '>
    <div className='visible sm:visible  mr-12 pr-10 pl-2 pt-2 md:invisible  '>
    <div className='h-8  rounded-md  flex justify-start bg-gray-100'>
        <div className='pt-1 pl-2'>
        <CiSearch className='w-6 h-5 '>  </CiSearch>
        </div>
        <div> Search features , tutorial ,et </div>
    </div>

    </div>

    </div>

    <div className='h-12 flex  flex-row  justify-between bg-gray-100 mt-1  '>
<div className='pl-3 mt-3 font-medium   text-xl'>Overview </div>
<div className='mr-2'> 
<button className='mr-1 border mt-2 p-1 flex flex-row   rounded bg-white ' > Last Month <MdKeyboardArrowDown className='h-5 w-8'></MdKeyboardArrowDown> </button>

</div>

    </div>

<div className='bg-gray-100 pt-4'>
<div className='flex flex-row justify-center  '>
    <Card text="Online Orders" className="mr-2 border border-black m-2" amount = {231}></Card>
    <div className='w-12 h-6'></div>
    <Card text="Amount Processed " amount = {"₹ 23,92,312.19"}></Card>
    </div>

</div>
<div className='bg-gray-100 pl-3  text-xl pb-5 font-semibold'>
    Transaction | This Month
</div>
<Transactions>

</Transactions>
  

      
    </div>
  )
}

export default Payouts
