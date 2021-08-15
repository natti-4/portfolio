import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header/>

      <div className="container mx-auto">
        <Main/>
      </div>
      <Footer/>
   </>
  )
}
