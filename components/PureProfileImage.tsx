import React from "react";

function PureProfileImage({ImgUrl}:{ImgUrl:string}) {
  return (
    <div>
      {
        <img alt="" src={ImgUrl} className=" rounded-full w-8 h-8"/>
      }
    </div>
  );
}

export default PureProfileImage;
