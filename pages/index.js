import Head from 'next/head'
import Nav from '../components/Nav.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center w-full text-center">

        <h1 className="text-4xl">Welcome!</h1>

        <p className="mt-8 text-xs">
          Get started by editing{' '}
          <code className="p-3 text-xs font-mono bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full py-2 border-t absolute bottom-0">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
