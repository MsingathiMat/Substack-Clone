import { ComponentType } from "react";
import PureProfileImage from "../PureProfileImage";

type ImageUrlProps = {
    ImgUrl:string

}

function withImgUrl <T>(OriginalComponent:ComponentType<T & ImageUrlProps >){

const Wrapper =(props:T)=>{

  
  
    return <OriginalComponent ImgUrl="https://substackcdn.com/image/fetch/w_280,h_280,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21d1b55e-b7a2-448f-ad46-f6ec93247403_715x715.png"  {...props}/>

}

return Wrapper
}


export {withImgUrl}


export const ProfileImage = withImgUrl(PureProfileImage) 