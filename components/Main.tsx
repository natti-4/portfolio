import Skilltable from '../components/Skilltable'

const front: string[][] =  [
  ["HTML", "4年"],
  ["CSS", "1年"],
  ["JavaScript", "1年"]
]
const back: string[][] =  [
  ["PHP", "4年"],
  ["Java", "2年"]
]
const framework: string[][] =  [
  ["CakePHP", "4年"],
  ["Next.js", "1年"]
]
const db: string[][] =  [
  ["PostgreSQL", "4年"]
]
const infra: string[][] =  [
  ["RedHat", "4年"],
  ["Apache", "4年"],
  ["Docker", "1年"]
]

const Main: React.FC = () => {
  return (
    <main className="">
      <section className="md:min-h-screen h-auto pb-10">
        <div id="about" className="text-center text-5xl pt-20 pb-20">
          <h2>about</h2>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex-1">
            <img src="/about.jpeg" className="md:h-60 md:w-60 h-20 w-20 rounded-full m-auto"></img>
          </div>
          <div className="flex-1">
            <p className="m-auto">
            はじめまして。平成5年生まれの27歳エンジニアのなつきと申します。社会人歴（IT業界）4年目です。<br/>
            常駐先では最初にアカウント管理・認証システムに携わり、今はログ管理システムに携わっています。
            検証、開発、試験を行なっています。 Web系に興味をもち勉強中です。<br/>
            </p>
          </div>
        </div>
      </section>
      <section className="md:min-h-screen h-auto bg-blue-50 w-screen m-header-menu pb-10">
        <div id="skill" className="text-center text-5xl pt-20 pb-20">
          <h2>skill</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 md:mx-20 mx-7 gap-x-20 gap-y-6">
          <div className="rounded-lg shadow-md bg-white h-36 text-center">
            <Skilltable
              title = "フロントエンド"
              skills = {front}
            />
          </div>
          <div className="rounded-lg shadow-md bg-white h-36 text-center">
            <Skilltable
              title = "バックエンド"
              skills = {back}
            />
          </div>
          <div className="rounded-lg shadow-md bg-white h-36 text-center">
            <Skilltable
              title = "フレームワーク"
              skills = {framework}
            />
          </div>
          <div className="rounded-lg shadow-md bg-white h-36 text-center">
            <Skilltable
              title = "DB"
              skills = {db}
            />
          </div>
          <div className="rounded-lg shadow-md bg-white h-36 text-center">
            <Skilltable
              title = "インフラ"
              skills = {infra}
            />
          </div>
        </div>
      </section>
      <section className="md:min-h-screen h-auto pb-10">
        <div id="work" className="text-center text-5xl pt-20 pb-20">
          <h2>work</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10">
          <div className="mx-auto">
            <a href="#">
              <img src="/thumbnail.png" className="h-48 w-80 rounded shadow hover:opacity-50"></img>
              <p className="text-center pt-2">portfolio</p>
            </a>
          </div>
          <div className="mx-auto">
            <a href="#">
              <img src="/thumbnail.png" className="h-48 w-80 rounded shadow hover:opacity-50"></img>
              <p className="text-center pt-2">portfolio</p>
            </a>
          </div>
          <div className="mx-auto">
            <a href="#">
              <img src="/thumbnail.png" className="h-48 w-80 rounded shadow hover:opacity-50"></img>
              <p className="text-center pt-2">portfolio</p>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 w-screen m-header-menu h-auto pb-24">
        <div id="contact" className="text-center text-5xl pt-20 pb-20">
          <h2>contact</h2>
          <p className="text-base">お問い合わせは、SNSにてお願いいたします。</p>
        </div>
        <div className="md:mx-80 flex flex-row justify-center items-center">
          <img src="/Twitter.png" className="h-12 w-12 rounded-full mr-10"></img>
          <a href="https://github.com/natti-4">
            <img src="/GitHub.png" className="h-12 w-12 rounded-full "></img>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Main