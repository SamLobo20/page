import Head from 'next/head'
import Nav from '../components/Nav.js'

const Video = () => {

  return (
    <div>
      <Head>
        <title>Video | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="w-screen pb-32">
        <h1 className="text-4xl my-8 text-center w-full">Video</h1>

        <div className="flex flex-wrap gap-6 items-center mt-8">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MCbpgZSL5LM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bk6Xst6euQk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>

      </main>
    </div>
  )
}

export default Video
