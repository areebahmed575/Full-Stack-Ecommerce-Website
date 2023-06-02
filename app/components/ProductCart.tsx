"use client"
import React from 'react'
import {FC} from 'react'
import { oneProductType } from './ProductArrayType/Type'
import Card from './Card'

const ProductCart:FC<{ProductData:Array<oneProductType>}> = ({ProductData}:any) => {
    //console.log(ProductData)
  return (
    <div>
      {ProductData.map((index:number,item:oneProductType)=>(
        <Card  key={index} singelProductData={item}/>

      ))}
    </div>
  )
}

export default ProductCart
