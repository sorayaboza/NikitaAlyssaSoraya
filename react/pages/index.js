import Head from 'next/head'
import Link from "next/link"
import Layout from "./layout/layout.js"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Welcome Page - Sign-In Page</title>
      </Head>
      
      <Link href="">
        <h1>REGISTER</h1>
      </Link>
      <Link href="">
        <h1>LOG-IN</h1>
      </Link>
    </Layout>
  )
}

/* 
CREDIT: 

Next.js set-up: https://youtube.com/playlist?list=PLynWqC6VC9KOvExUuzhTFsWaxnpP_97BD

*/