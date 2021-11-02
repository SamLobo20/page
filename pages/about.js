import { useState } from 'react';
import Nav from '../components/Nav.js'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    function openForm() {
        console.log("Function called!")
        setIsOpen(!isOpen)
        console.log(isOpen);
        const x = 1;
    }

    const x = 18;

    return (
        <main className="w-screen pb-32">
            <Nav />

            <div className="flex flex-col items-center justify-content text-center">
                <h1 className="text-4xl mb-8">About us</h1>
                <p className="shadow p-8 bg-gray-100 rounded-xl">{`sdcjdscjkdbcds csjcdsckbdscjbcjksdc ${x} dchjcdscdscj`}</p>

                <button onClick={openForm}>Contact us...</button>

                {isOpen && (
                    <form className="shadow p-8">
                        <input type="text" placeholder="Your name"></input>
                    </form>
                )
                }
            </div>
        </main>
    )


}

export default About
