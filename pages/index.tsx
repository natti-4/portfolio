import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 w-full flex flex-row bg-blue-50 fixed z-10">
        <a className="flex-auto text-4xl font-bold ml-20">portfolio</a>
        <nav className="flex-auto mr-20">
          <ul className="flex justify-end">
            <li className="pr-8 text-2xl">about</li>
            <li className="pr-8 text-2xl">skill</li>
            <li className="pr-8 text-2xl">work</li>
            <li className="text-2xl">contact</li>
          </ul>
        </nav>
      </header>
      <div>
        <img src="/top.jpeg" className="h-screen w-full relative"></img>
        <p className="text-6xl text-white absolute top-1/2 left-24">natsuki nakano <br/>portfolio</p>
      </div>

      <div className="container mx-auto">
        <main className="">
          <section className="h-screen">
            <div className="text-center text-5xl pt-32 pb-20">
              <h2>about</h2>
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <img src="/about.jpeg" className="h-60 w-60 rounded-full m-auto"></img>
              </div>
              <div className="flex-1">
                <p className="">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </section>
          <section className="h-screen bg-blue-50 w-screen m-header-menu">
            <div className="text-center text-5xl pt-32 pb-20">
              <h2>skill</h2>
            </div>
            <div className="grid grid-cols-2 mx-20 gap-x-20 gap-y-10">
              <div className="rounded-lg shadow-md bg-white h-36">1</div>
              <div className="rounded-lg shadow-md bg-white h-36">2</div>
              <div className="rounded-lg shadow-md bg-white h-36">3</div>
              <div className="rounded-lg shadow-md bg-white h-36">4</div>
              <div className="rounded-lg shadow-md bg-white h-36">5</div>
            </div>
          </section>
          <section className="h-screen">
          <div className="text-center text-5xl pt-32 pb-20">
              <h2>work</h2>
            </div>
          </section>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
   </>
  )
}
