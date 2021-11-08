import Head from 'next/head'
import { useState } from 'react';
import Nav from '../components/Nav.js'

const Video = () => {

  const [isOpen, setIsOpen] = useState(true)

  function openForm() {
    setIsOpen(!isOpen)
    const x = 1;
  }

  return (
    <div>
      <Head>
        <title>Video | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="w-screen pb-32 items-center justify-center">
        <div className="flex flex-column justify-center">
          <button onClick={openForm} className="items-center justify-center border-1 bg-brand px-8 py-4 w-48 text-white rounded shadow-2xl hover:shadow transition-all my-8">Video</button>
        </div>
      </main>

      {isOpen &&
        <div className="flex flex-wrap gap-6 items-center justify-center mt-8 ">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MCbpgZSL5LM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bk6Xst6euQk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>
      }
    </div>
  )
}

export default Video
