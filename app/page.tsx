import Image from 'next/image'
import Hero from './components/Hero'
import Product from './components/Product'
import BASE_PATH_FORAPI from './components/Basepath'
import ProductCart from './components/ProductCart'

//SSR
async function fetchProduct(){
  const res=await fetch(`${BASE_PATH_FORAPI}/api/products`)
  if(!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json()
}

export default async  function Home() {
const {response}=await fetchProduct();
//console.log("response:",response) 
  return (
    <div>
      <Hero />
      <Product/>
      <ProductCart ProductData={response}/>
      
      
    </div>
  )
}
