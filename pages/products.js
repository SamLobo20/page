import { useState } from 'react';
import Link from 'next/link'
import Nav from '../components/Nav.js'

const Products = () => {

    const [data, setData] = useState(false)
    const [postsVisible, setPostsVisible] = useState(false)

    async function togglePosts() {
        await fetchPosts()
        setPostsVisible(!postsVisible)
    }

    function fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => setData(json));

        return true
    }

    const products = [
        {
            name: "sdkcbccsc", price: 34.12
        },
        {
            name: "xaskxjxasx", price: 14.12
        },
        {
            name: "hnhngn", price: 3.12
        },
        {
            name: "777777", price: 344.12
        },
        {
            name: "rrrrrrr", price: 34768276.12
        },
    ]

    return (
        <main className="w-screen">

            <Nav />

            <div className="flex flex-col items-center justify-content text-center">
                <h1 className="text-4xl mb-8">Products</h1>
                <button onClick={togglePosts} className="border-1 bg-brand px-8 py-4 w-48 text-white rounded shadow-2xl hover:shadow transition-all m-24">{!postsVisible ? `Show posts` : `Hide posts`}</button>

                {postsVisible &&
                    <div>
                        {data.id}<br />
                        {data.title}<br />
                        {data.body}<br />
                        {data.userId}<br />
                    </div>
                }

                {products.map((product) => {
                    const { name, price } = product
                    return (
                        <Link href="htttp://www.google.com" key={name}>
                            <a className="shadow p-8 bg-pink-600 rounded-xl mb-6 hover:text-white">
                                <p className="csc">{name}</p>
                                <p className="dcsdc">{price}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </main>
    )


}

export default Products
