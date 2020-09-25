import Head from 'next/head'
import Link from 'next/link'
import "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>static site</title>
      </Head>
      <div>Hello !</div>
      <Link href="./about">about</Link>
    </div>
  )
}
