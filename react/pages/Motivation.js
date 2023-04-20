import Head from 'next/head'
import Layout from "./layout/layout.js"

export default function Motivation() {
    return(
        <Layout>
            <Head>
                <title>Motivation</title>
            </Head>

            <div className="motivation">
                <h1>Meow!</h1>
            </div>
        </Layout>
    )
}