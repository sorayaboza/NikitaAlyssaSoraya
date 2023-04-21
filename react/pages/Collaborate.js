import Head from 'next/head'
import Layout from "./layout/layout.js"

export default function Collaborate() {
    return(
        <Layout>
            <Head>
                <title>Collaborate</title>
            </Head>

                <div className="collaborate--items">
                    <div id="coll-title">CREATE A TASK GROUP!</div>
                    <div className="form-items">
                        <div className="add-collaborators">
                            <form>
                            <label for="fname">Group Name </label>
                            <input type="text" id="fname" name="fname"></input>
                                <label for="fname">Collaborators </label>
                                <input type="submit" value="+" className="add-item"></input>
                                <input type="text" id="fname" name="fname"></input>
                                <div></div>
                                <input type="submit" value="Submit" className="add-item"></input>
                            </form>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}