import Head from 'next/head'
import Nav from '../components/Nav.js'
import Image from 'next/image'
import Link from 'next/link'
import Social from '../components/Social.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Social />

      <main className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-4xl">Welcome!</h1>

        <div className="mt-16 flex flex-col gap-8">
          <p>I am Sam, a web developer :)</p>
          <Link href="https://github.com/SamLobo20">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <code className="p-3 font-mono bg-gray-100 rounded-md">My Github</code>
            </a>
          </Link>
          <Image src="/cat.png" alt="Cat" width={200} height={200} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full py-2 border-t absolute bottom-0 text-xs">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-3 ml-2" />
        </a>
      </footer>
    </div>
  )
}
