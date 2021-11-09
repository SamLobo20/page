import Head from 'next/head'
import { useState } from 'react';
import Nav from '../components/Nav.js'

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false)

    function openForm() {
        setIsOpen(!isOpen)
        const x = 1;
    }

    const x = 18;

    return (
        <div>
            <Head>
                <title>Contact | Sam Kota Private</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <main className="w-screen pb-32">

                <div className="flex flex-col items-center justify-content text-center">
                    <h1 className="text-4xl mb-8">Contact us</h1>
                    <div className="shadow p-8 bg-gray-100 rounded-xl">
                        <p>Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae.<br />Ut quas totam nostrum rerum est autem sunt rem eveniet architecto.</p>
                        <p className="">Dynamic: {x}</p>
                    </div>

                    <button onClick={openForm}>Contact us!</button>

                    {isOpen && (
                        <form className="flex flex-col space-y-6 shadow px-4 py-4 mt-6">
                            <input type="text" placeholder="Your Name"></input>
                            <input type="email" placeholder="Your Email"></input>
                            <input type="number" placeholder="Your Age"></input>
                        </form>
                    )
                    }
                </div>
            </main>
        </div>
    )


}

export default Contact
