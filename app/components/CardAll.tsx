import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { IProduct } from '../page'
import { FC } from 'react'
import Link from 'next/link'
const CardAll: FC<{ singleProductData: IProduct }> = ({ singleProductData }) => {
    return (
        <div className='mx-auto w-[11rem] md:w-[16rem] space-y-3 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10' />
                <Image width={300} height={300} src={urlForImage(singleProductData.image).url()} alt="product" />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
                <Link href={`/catalog/${singleProductData.slug.current}`}>
                    <h6>{singleProductData.productName}</h6>
                    <p className='text-sm text-pink-500'>{singleProductData.productTypes[0]}</p>
                    <p>${singleProductData.price}</p>
                </Link>
            </div>
        </div>
    )
}

export default CardAll
