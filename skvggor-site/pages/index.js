import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcos Lima aka Skvggor - Web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.name}>
          <h1 className={styles.text}>skvggor</h1>
          <p className={styles.description}>I am a web developer currently working with <a href="https://vuejs.org/">Vue</a> and <a href="https://reactjs.org/">React</a> at <a href="https://www.match.mt/">match.mt</a>.</p>
        </div>
      </main>
    </div>
  )
}
