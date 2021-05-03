import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div className="container mx-auto">
        <Main/>
      </div>
      <Footer/>
   </>
  )
}
