import { ComponentType } from "react";
import PureProfileImage from "../PureProfileImage";
import { useAppProvider } from "@/store/AppContext";

type ImageUrlProps = {
    ImgUrl:string

}

function withImgUrl <T>(OriginalComponent:ComponentType<T & ImageUrlProps >){

const Wrapper =(props:T)=>{

    const UserDataMethod= useAppProvider()
    const ImageUrl = UserDataMethod?.UserData.thumbnailUrl
  
    return <OriginalComponent ImgUrl={ImageUrl?ImageUrl:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWqi2m-Drf4PzFpNNz29qWmELLNkz1QWs4wgPRXhgYcla0quTNB4F7fKKvM2xFlLWoPX6K5ZT-f40Srf31ZT-yUKM_YyZe5yBlbSPXyA'}  {...props}/>

}



return Wrapper
}


export {withImgUrl}


export const ProfileImage = withImgUrl(PureProfileImage) 