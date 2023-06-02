import React from 'react'
import { FC } from 'react'
import { oneProductType } from './ProductArrayType/Type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client';


const builder = imageUrlBuilder(client);

const Card:FC<{singelProductData:oneProductType}> = (singelProductData) => {
//console.log(singelProductData)
function urlFor(source: any) {
  return builder.image(source)
}
//console.log(urlFor(singelProductData.image[0]).width(500).url())
  return (
    <div>Card</div>
  )
}

export default Card
