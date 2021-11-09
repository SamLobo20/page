import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="var(--color-brand)"
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
