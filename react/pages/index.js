import Head from 'next/head'
import Link from "next/link"
import Layout from "./layout/layout.js"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Welcome Page - Sign-In Page</title>
      </Head>
      <div className="account-items">
        <Link href="">
          <h1 id="account-btn">REGISTER</h1>
        </Link>
        <Link href="">
          <h1 id="account-btn">LOG-IN</h1>
        </Link>
      </div>
    </Layout>
  )
}

/* 
CREDIT: 

Next.js set-up: https://youtube.com/playlist?list=PLynWqC6VC9KOvExUuzhTFsWaxnpP_97BD

*/