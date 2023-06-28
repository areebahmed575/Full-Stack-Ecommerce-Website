import React from 'react'
import AllProductsCompo from '../components/AllProduct'
import BASE_PATH_FORAPI from '../components/Basepath'

async function fetchAllProductData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
        next: {
            revalidate: 120
        }
    })
    if (!res.ok) {
        throw new Error("Failed To Fetch")
    }


    return res.json()

}

const Products = async () => {
    let apiData = await fetchAllProductData()
    //console.log(apiData)
    return (
        <div >
            <AllProductsCompo ProductData={apiData} />

        </div>
    )
}

export default Products
