import Head from 'next/head'

import FeaturedName from '../components/FeaturedName'
import Social from '../components/Social'

import styles from '../styles/Home.module.sass'

export default function Home() {
  const content = {
    name: 'skvggor',
    description: 'I\'m a developer currently working with <a href="https://vuejs.org/">Vue</a> and <a href="https://reactjs.org/">React</a> at <a href="https://www.match.mt/">match.mt</a>.',
    social: [
      {
        id: 0,
        icon: 'source-code',
        link: 'https://github.com/marcker/skvggor.dev/tree/master/skvggor-site'
      },
      {
        id: 1,
        icon: 'github',
        link: 'https://github.com/marcker'
      },
      {
        id: 2,
        icon: 'twitter',
        link: 'https://twitter.com/marcker'
      },
      {
        id: 4,
        icon: 'instagram',
        link: 'https://instagram.com/skvggor'
      },
      {
        id: 5,
        icon: 'last-fm',
        link: 'https://last.fm/user/skvggor'
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>/home/skvggor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <FeaturedName
            name={content.name}
            description={content.description}
          />
          <Social items={content.social} />
        </div>
      </main>
    </div>
  )
}
