import { useState } from 'react';
import Link from 'next/link'
import Nav from '../components/Nav.js'

const Products = () => {

    const [data, setData] = useState(false)

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => setData(json));
    // console.log(typeof (data));

    const { body, id, title, userId } = data
    const products = [
        {
            name: "sdkcbccsc",
            price: 34.12
        },
        {
            name: "xaskxjxasx",
            price: 14.12
        },
        {
            name: "hnhngn",
            price: 3.12
        },
        {
            name: "777777",
            price: 344.12
        },
        {
            name: "rrrrrrr",
            price: 34768276.12
        },

    ]


    return (
        <main className="w-screen">

            <Nav />

            <div className="flex flex-col items-center justify-content text-center">
                <h1 className="text-4xl mb-8">Products</h1>

                {id}<br />
                {title}<br />
                {body}<br />
                {userId}<br />

                {products.map((product) => {
                    return (
                        <Link href="htttp://www.google.com" key={product.name}>
                            <a className="shadow p-8 bg-pink-600 rounded-xl mb-6 hover:text-white">
                                <p className="csc">{`${product.name}`}</p>
                                <p className="dcsdc">{`${product.price}`}</p>
                            </a>
                        </Link>
                    )

                })}

            </div>
        </main>
    )


}

export default Products
