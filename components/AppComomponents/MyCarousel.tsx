'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Bookmark, EllipsisVertical } from "lucide-react"
import { useAppProvider } from "@/store/AppContext"

 function MyCarousel() {

  const UserDataMethod= useAppProvider()
const ImageUrl = UserDataMethod?.UserData.thumbnailUrl
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] "
    >
      <CarouselContent className=""  >
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/7  h-[300px] ">
            
            
          
            <div className="p-1 ">
              <Card className=" relative overflow-hidden  w-[200px] h-[280px] " >
              
            <div >

<div className=" p-4 CENTER flex-col gap-6 bg-gradient-to-t from-black/60 via-transparent to-transparent absolute  w-[200px] h-[280px] z-20"> 

{/* <img src="https://pbs.twimg.com/profile_images/1329559519727214593/HCt07Dvk_400x400.jpg" className=" w-[120px] h-[120px] rounded-md " /> */}

<img src={ImageUrl} className=" w-[120px] h-[120px] rounded-md " />


<p className=" text-white text-[13px] "> Video Notes, improved search, Spotify integration, and more</p>

<div className="CENTER w-full justify-between"> <p className=" text-white text-[10px]">4 min read</p> <div className=" CENTER gap-2">




<div className=" CENTER rounded-full bg-slate-400 h-[20px]   w-[20px]"> <Bookmark size={12} color="white" /></div> <div className=" CENTER rounded-full bg-slate-400 h-[20px]   w-[20px]"> <EllipsisVertical size={12} color="white" /></div>
</div>




</div>
</div>

<div className=" backdrop-blur-xl bg-slate-600/30  top-0 left-0 absolute w-full h-full z-10 "/>

<img src="https://pbs.twimg.com/profile_images/1329559519727214593/HCt07Dvk_400x400.jpg" className=" scale-150"/>


            </div>

              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


export default MyCarousel