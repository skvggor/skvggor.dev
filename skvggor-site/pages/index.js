import Head from 'next/head'

import FeaturedName from '../components/FeaturedName'
import Social from '../components/Social'

import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>/home/skvggor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <FeaturedName />
          <Social />
        </div>
      </main>
    </div>
  )
}
