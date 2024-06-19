import React from 'react'
import Item from './Item'
import { FaHome } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";
import { PiLightning } from "react-icons/pi";


function Sidebar() {
  return (
    <div>
    <div className='flex flex-col h-dvh  fixed  '>
    
        
    <Item name={"Home"}>
    <FaHome></FaHome>
      </Item>

      <Item name={"Orders"}>
    <BiNotepad></BiNotepad>
      </Item>

      <Item name={"Products"}>
    <HiOutlineSquares2X2 ></HiOutlineSquares2X2>
      </Item>

      <Item name={"Delivery"}>
      <CiDeliveryTruck />
      </Item>

      <Item name={"Marketing"}>
      <HiMiniSpeakerWave></HiMiniSpeakerWave>
      </Item>

      <Item name={"Analytics"}>
      <SiGoogleanalytics />
      </Item>

      <Item name={"Payments"}>
      <MdOutlinePayments />
      </Item>

      <Item name={"Tools"}>
      <BsTools />
      </Item>

      <Item name={"Discounts"}>
      <CiDiscount1 />
      </Item>

      <Item name={"Audience"}>
      <IoPeopleSharp />
      </Item>

      <Item name={"Appearance"}>
      <IoMdColorPalette className='ml-3 mr-3' />
      
    
      </Item>

      <Item name={"Plugins"} >
      <PiLightning />
      </Item>






    </div>
      
    </div>
  )
}

export default Sidebar
