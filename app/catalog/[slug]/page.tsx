import ProductDetail from '@/app/components/ProductDetail';
import { IProduct, responseType } from '@/app/page';
import ContextWrapper from '@/global/context';
import React from 'react'
import { FC } from 'react'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const product = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-08/data/query/production?query=*[_type == "testing"]`).then((res: any) => res.json());
    const titleToSet: IProduct = product.result.find((item: IProduct) => item.slug.current == slug);

    return {
        title: titleToSet.productName,
        description: titleToSet.description,
    };
}

async function fetchAllProductsData(slug: string) {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-08/data/query/production?query=*%5B_type%20%3D%3D%20%22testing%22%20%26%26%20slug.current%3D%3D%20%22${slug}%22%5D%0A`);

    if (!res.ok) {
        throw new Error("Failed to fetch")
    }

    return res.json();
}


export async function generateStaticParams() {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-08/data/query/production?query=*[_type == "testing"]`, {
        next: {
            revalidate: 60
        }
    }).then((res: any) => res.json())
    return res.result.map((item: IProduct) => { slug: item.slug });
};


const Catalog = async ({ params }: { params: { slug: string } }) => {

    let data: responseType = await fetchAllProductsData(params.slug);
    //console.log(data)
    return (
        <ContextWrapper>
            <ProductDetail item={data.result} />
        </ContextWrapper>




    )
}

export default Catalog
