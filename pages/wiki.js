import Head from 'next/head'
import Nav from '../components/Nav.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wiki | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl">Wiki</h1>
        <div className="whitespace-pre w-full px-32 mt-8">{`
HTML (HyperText Markup Language):

    HTML5 Specs: https://html.spec.whatwg.org/


CSS (Cascading Style Sheets):

  Libraries:
    - TailwindCSS (https://tailwindcss.com/)


JavaScript:

  Libraries:  
    ReactJS (https://reactjs.org/) - Facebook
    AngularJS (https://angularjs.org/) - Google
    VueJS (https://vuejs.org/) - Evan You
    SvelteKit (https://kit.svelte.dev/) - Rich Harris (NY Times)

  Frameworks:
    NextJS (https://nextjs.org/)


Tools: 

  Online Code Editor: https://codepen.io/ 
  Online Foto Editor: https://pixlr.com/e/
  CSS compatibility: https://caniuse.com/
  Crush image sizes: https://tinypng.com/


        `}</div>
      </main>
    </div>
  )
}
