import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 w-full flex flex-row bg-blue-50 fixed">
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

      <div className="container mx-auto">
        <main className="h-60 w-max">
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
