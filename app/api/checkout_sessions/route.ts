import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/app/page";



interface typeOfData {
    price: string,
    name: string,
    quantity: number,
}

let orignalData: Array<typeOfData> = [
    {
        price: 'price_1NPOMEDS4BElEYLCzIwj3UfB',
        name: 'Pink Fleece Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NPOBGDS4BElEYLCnTEQ9LQ7',
        name: 'Brushed Raglan Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1NPOFiDS4BElEYLCmKafULNy',
        name: 'Cameryn Sash Tie Dress',
        quantity: 1,
    },
    {
        price: 'price_1NPOOaDS4BElEYLC4JxfHf4s',
        name: 'Imperial Alpaca Hoodie',
        quantity: 1,
    },
    {
        price: 'price_1NPOR0DS4BElEYLCEFc6192z',
        name: 'Brushed Bomber',
        quantity: 1,
    },
    {
        price: 'price_1NPOJ4DS4BElEYLCpBgvXvsO',
        name: 'Flex Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1NPOKfDS4BElEYLCXdbYvBUK',
        name: 'Flex Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NPONSDS4BElEYLCOvTZdgSK',
        name: 'Lite Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NPOSCDS4BElEYLCE6QAiPgb',
        name: 'Raglan Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1NPOPtDS4BElEYLClUoZgjPM',
        name: 'Flex Push Button Bomber',
        quantity: 1,
    },
]

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    let cartItemsArray = await req.json();

    try {
        let line_item = orignalData.filter((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: IProduct = cartItemsArray[index];
                if (element.productName === item.name) {
                    return true
                }
            }
        })
        let line_itemToSend: any = line_item.map((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: IProduct = cartItemsArray[index];
                if (element.productName === item.name) {
                    return {
                        price: item.price,
                        quantity: element.quantity
                    }
                }
            }
        })

        let session = await stripe.checkout.sessions.create({
            line_items: line_itemToSend,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/?success=true`,
            cancel_url: `${req.nextUrl.origin}/?success=false`
        })
        return NextResponse.json({ link: session.url });
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }

}