import Head from 'next/head'

import { SiGithub, SiTwitter, SiInstagram, SiLastDotFm } from 'react-icons/si'
import { CgCode } from 'react-icons/cg'

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
          <h1 className={styles.name}>skvggor</h1>
          <p className={styles.description}>I'm a developer currently working with <a href="https://vuejs.org/">Vue</a> and <a href="https://reactjs.org/">React</a> at <a href="https://www.match.mt/">match.mt</a>.</p>
          <div className="social">
            <a href="https://github.com/marcker">
              <SiGithub className="icon" />
            </a>
            <a href="https://twitter.com/marcker">
              <SiTwitter className="icon" />
            </a>
            <a href="https://instagram.com/skvggor">
              <SiInstagram className="icon" />
            </a>
            <a href="https://last.fm/user/skvggor">
              <SiLastDotFm className="icon" />
            </a>
            <a href="https://github.com/marcker/skvggor.dev/tree/master/skvggor-site">
              <CgCode className="icon" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
