import Head from 'next/head'
import { useState } from 'react';
import Nav from '../components/Nav.js'
import Social from '../components/Social.js';

const Contact = () => {

    const [formdata, setFormdata] = useState()

    function toggleData(e) {
        const { name, value } = e.target
        const data = { identifier: name, value: value }
        console.log(data);
        // setFormdata({ ...data })
        // console.log(formdata);
        console.log(data.name);
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(formdata);
    }

    return (
        <div>
            <Head>
                <title>Contact | Sam Kota Private</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <Social />

            <main className="w-screen pb-32">
                <div className="flex flex-col items-center justify-content text-center">
                    <h1 className="text-4xl mb-8">Contact us</h1>
                    <div className="shadow p-8 bg-gray-100 rounded-xl">
                        <p>Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae.<br />Ut quas totam nostrum rerum est autem sunt rem eveniet architecto.</p>
                    </div>

                    <form onSubmit={submitForm} className="flex flex-col space-y-6 shadow px-4 py-4 mt-6 w-1/2">
                        <input type="text" name="name" placeholder="Your Name" onChange={toggleData}></input>
                        <input type="email" name="email" placeholder="Your Email" onChange={toggleData}></input>
                        <textarea placeholder="Your Message" name="message" onChange={toggleData}></textarea>
                        <input type="submit" className='button'></input>
                    </form>

                </div>
            </main>
        </div>
    )


}

export default Contact
