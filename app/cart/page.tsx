import React from 'react'
import Image from 'next/image'
import { RiDeleteBinLine } from "react-icons/ri";
import CartComp from '../components/CartParent/CartChild';
import ContextWrapper from '@/global/context';

async function fatchAllStoreProducts() {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-08/data/query/production?query=*[_type == 'testing']`, {
        cache: "no-store",
    })
    return res.json();
};
const page = async () => {
    let allProducts = await fatchAllStoreProducts();
    console.log(allProducts)
    return (


        <CartComp allProductsOfStore={allProducts.result} />



    )
}

export default page
