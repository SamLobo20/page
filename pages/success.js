import Head from 'next/head'
import Nav from '../components/Nav.js'
import Social from '../components/Social.js'

const Success = () => {
  return (
    <div>
      <Head>
        <title>Success! | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Social />

      <main className="w-screen pb-32 h-screen">
        <div className="flex flex-col items-center justify-center text-center text-3xl text-brand h-full">
          <h1>Thank you!</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </main>
    </div>
  )
}

export default Success
