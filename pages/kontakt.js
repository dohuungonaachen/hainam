import Head from 'next/head'
import Layout from "../components/layout";

export const config = { amp: true }

export default function Kontakt(){
  return (
    <Layout>
      <Head>
        <title>Kontakt</title>
      </Head>
      <div>Kontakt</div>
    </Layout>

  )
}
