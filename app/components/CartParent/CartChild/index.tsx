"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { RiDeleteBinLine } from "react-icons/ri";
import { carContext } from '@/global/context';
import { IProduct } from '@/app/page';
import { urlForImage } from '@/sanity/lib/image';


const CartComp = ({ allProductsOfStore }: { allProductsOfStore: Array<IProduct> }) => {
  const [allProductsForCart, setAllProductsForCart] = useState<any>();

  useEffect(() => {
    let storageData: any = localStorage.getItem("cart") as string
    storageData = JSON.parse(storageData)
    if (storageData) {
      let data = allProductsOfStore.filter((item: IProduct) => {
        for (let index = 0; index < storageData.length; index++) {
          let element = storageData[index];
          if (element.productId === item._id) {
            return true
          }
        }


      })
      setAllProductsForCart(data)

    }
    console.log(allProductsForCart)

  }, [])

  return (
    <div>
      <div className='py-10 px-4 md:px-10'>
        <div className='py-6'>
          <h3 className='text-gray-900 text-xl font-semibold'>Shopping Cart</h3>

        </div>

        <div className='flex flex-col lg:flex-row gap-6'>

          <div className='flex flex-col basis-[69%]'>
            {allProductsForCart && allProductsForCart.map((item: IProduct, index: number) => (<div className='flex  flex-shrink-0  gap-4'>
              <div key={index} className='"w-[14rem]'>
                <Image className='rounded-xl' width={100} height={100} src={urlForImage(item.image).url()} alt="product" />
              </div>
              <div className='sspace-y-1 md:space-y-3 w-full' >
                <div className='flex justify-between items-center'>
                  <h1 className='md:text-2xl font-light text-gray-700'>Brushed Raglan Sweatshirt</h1>
                  <RiDeleteBinLine size={28} />
                </div>
                <h1 className='text-gray-400 font-medium'>Dress</h1>
                <h1 className='text-sm md:text-base'>Delivery Estimation</h1>
                <h1 className='text-orange-400 font-semibold md:text-xl'>5 Working Days</h1>
                <div className='flex justify-between '>
                  <h1 className='font-semibold md:text-lg'>${item.price}</h1>
                  <div className='flex gap-2 items-center text-lg'>
                    <div className='select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200'>-</div>
                    <p>1</p>
                    <div className='border select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full  border-gray-800'>+</div>
                  </div>

                </div>
              </div>



            </div>))}
          </div>

          <div className="basis-1/4 space-y-6 px-6">
            <h6 className="font-semibold text-xl">Order Summary</h6>
            <div className="flex justify-between">
              <p className="text-lg font-light">Quantity:</p>
              <p> Products</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-light">Subtotal:</p>
              <p></p>
            </div>
            <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">Process to Checkout
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CartComp
