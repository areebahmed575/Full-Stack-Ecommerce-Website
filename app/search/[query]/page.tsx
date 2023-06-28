import CardAll from "@/app/components/CardAll";
import { IProduct } from '@/app/page';
import { client } from "@/lib/sanityClient";
async function getAllProductsForSearch() {
    let response = await client.fetch(`*[_type == "testing"]`);
    return response;
};

const Search = async ({ params }: { params: { query: string } }) => {
    let data = await getAllProductsForSearch()
    let slug = (params.query).toLowerCase()
    let dataToMap = await data.filter((item: IProduct) => {
        if ((item.productName).toLowerCase().indexOf(slug) >= 0) {
            return true
        }
        return false
    });

    return (
        <div
            className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
        >
            {dataToMap && dataToMap.map((items: IProduct, index: number) => (
                <CardAll key={index} singleProductData={items} />
            ))}
        </div>
    )
}

export default Search