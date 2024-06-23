"use client";
import React, { useState } from "react";
import Image from "next/image"; 
import defaultBlur from './BlurData';

export default function CustomImage({ src,width,height, blurData,alt, ...rest }: any) {
  const [imgSrc, setImgSrc] = useState(src);


  return (
    <Image
      src={imgSrc}
      width={width || "0"}
      height={height || "0"}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      placeholder="blur"
      blurDataURL={!!blurData ? blurData : defaultBlur}
      onError={() => {
        setImgSrc("/img/placeholder.jpg");
      }}
      loading="lazy"
      {...rest}
      alt={alt}
    />
  );
}
