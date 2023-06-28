"use client"
import React from 'react'
import { FC } from 'react'
import { IProduct } from '../page'
import Card from './Card'
import CardAll from './CardAll'

//console.log(ProductData)
const ProductCart: FC<{ ProductData: Array<IProduct> }> = ({ ProductData }: any) => {

  return (
    <div>
      {ProductData.map((index: number, item: IProduct) => (
        <CardAll key={index} singleProductData={item} />

      ))}
    </div>
  )
}

export default ProductCart
