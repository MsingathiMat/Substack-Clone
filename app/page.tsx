'use client'
import MobileNav from '@/components/AppComomponents/MobileNav'
import MyCarousel from '@/components/AppComomponents/MyCarousel'
import DesktopNav from '@/components/DesktopNav'
import { useAppProvider } from '@/store/AppContext'
import React, { useEffect } from 'react'

function Page() {


  const UserDataMethod= useAppProvider()


useEffect(()=>{


const FetchData = async()=>{

  const Response = await fetch('https://jsonplaceholder.typicode.com/photos/1')

  const Data = await Response.json()

  UserDataMethod?.SetUserData(Data)


}

FetchData()

},[])

  return (
   


<div id="CAROUSEL" className='w-[100%] relative CENTER bg-slate-600 h-[320px] '>

<MyCarousel/> 





    </div>
  )
}

export default Page
