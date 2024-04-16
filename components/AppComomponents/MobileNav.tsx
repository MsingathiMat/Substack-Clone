import React from 'react'
import { MdHomeFilled } from "react-icons/md";

import { PiChatsFill } from "react-icons/pi";
import { FaInbox } from "react-icons/fa";
import { withImgUrl } from '../HOC/withImgUrl';

function MobileNav() {

  const PurePost= ({ImgUrl}:{ImgUrl:string})=>{

return <img alt='' src={ImgUrl} className=' w-20 h-20 rounded-md'/>
  
  }

const Post = withImgUrl(PurePost)


  return (

<div className=' sm:hidden  w-screen flex justify-between h-[60px] items-center pl-10 pr-10  border-t-gray-300 border-t-2 mt-5'>
   <MdHomeFilled className=' text-[#4A4B4B] hover:text-[#FF6719] hover:cursor-pointer' size={24} /> 
  
   <FaInbox className=' text-[#4A4B4B] hover:text-[#FF6719] hover:cursor-pointer' size={24}  />
    
    <Post/>
   <PiChatsFill className=' text-[#4A4B4B] hover:text-[#FF6719] hover:cursor-pointer' size={24}  />
 
 
    </div>
  )
}

export default MobileNav
