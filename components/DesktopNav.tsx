"use client"
import React, { useEffect, useState } from 'react'
import { FaCrown } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { FaInbox } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

import PureProfileImage from './PureProfileImage';
import { ProfileImage } from './HOC/withImgUrl';
import Link from 'next/link';
function DesktopNav() {

const [ProfilePic, SetProfilePic] = useState<string | null>(null)

useEffect(()=>{


const FetchData = async()=>{

  const Response = await fetch('https://dog.ceo/api/breeds/image/random')

  const Data = await Response.json()


  SetProfilePic(Data.message)

}

FetchData()

},[])


  return (
    <div className=' pt-4 pb-4 hidden sm:flex flex-col   border-r-2  h-screen w-[80px]  items-center justify-between'>


<FaCrown size={30} className='text-orange-600' />



<div className='flex flex-col gap-5 '>



 

<Link href='/'>


<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<MdHomeFilled className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Home</label>
 </div>
</Link>

 <Link href="/inbox">
 <div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<FaInbox className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Inbox</label>
 </div></Link>
 

 <Link href="/chat">
 
 <div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<PiChatsFill className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Chat</label>
 </div >
 </Link>





<Link href="activity">
<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<FaRegBell className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Activity</label>
 </div>
</Link>




<Link href="search">
<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<IoMdSearch className=' text-[#4A4B4B]  ' size={24} />

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Search</label>
 </div>
</Link>

 <div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>

<div className='CENTER w-10 hover:bg-orange-700 bg-orange-600 h-10 rounded-md text-white'> 
<FaPlus />

</div>

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Home</label>
 </div >


 
 
</div>


<div className='CENTER flex-col'>
<HiDotsHorizontal />


<div className='flex relative group '>
<div className='flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg'>


<div className='CENTER w-10 hover:bg-gray-200  h-10 rounded-md text-white'> 

<ProfileImage/>
</div>

</div>
<label className='left-10 opacity-0 transition-all duration-500 group-hover:opacity-100  group-hover:left-20   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3'>Profile</label>
 </div >




</div>
    </div>

    
  )
}

export default DesktopNav







 
