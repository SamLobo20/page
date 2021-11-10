import Head from 'next/head'
import Router from 'next/router'
import { useState } from 'react'
import Nav from '../components/Nav.js'
import Social from '../components/Social.js'

const Contact = () => {

    const [formData, setFormData] = useState()

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(formData)

        // ToDo: send formData to server & deliver mail
        setTimeout(() => {
            Router.push('/success')
        }, 4000)
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
                    <h1 className="text-4xl mb-8">Write me something nice :)</h1>
                    <div className="shadow p-8 bg-gray-100 rounded-xl">
                        <p>Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae.<br />Ut quas totam nostrum rerum est autem sunt rem eveniet architecto.</p>
                    </div>

                    <form onSubmit={submitForm} className="flex flex-col space-y-6 shadow px-4 py-4 mt-6 w-1/2">
                        <input type="text" name="name" placeholder="Your Name" onChange={setData}></input>
                        <input type="email" name="email" placeholder="Your Email" onChange={setData}></input>
                        <textarea placeholder="Your Message" name="message" onChange={setData}></textarea>
                        <input type="submit" className='button'></input>
                    </form>

                </div>
            </main>
        </div>
    )


}

export default Contact
