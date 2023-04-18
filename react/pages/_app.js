import '@/styles/globals.css'
import Header from "./Header"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'

// HTML5Backend gives us access to the Dnd monitors.

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}