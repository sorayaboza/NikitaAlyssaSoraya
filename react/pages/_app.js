import '@/styles/globals.css'
import Header from "./Header"

// HTML5Backend gives us access to the Dnd monitors.

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
