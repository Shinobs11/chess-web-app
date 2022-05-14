import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ChessBoard from '../components/ChessBoard';
import ChessGame from '../components/ChessGame';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Chess" />
        <link rel="icon" href="./Chess.png" />
      </Head>

      <main className={styles.main}>
        <ChessGame/>
      </main>

     
    </div>
  )
}

export default Home
