import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
      </Head>
      <Header/>

      <div className="container mx-auto">
        <Main/>
      </div>
      <Footer/>
   </>
  )
}
