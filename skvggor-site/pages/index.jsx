import Head from 'next/head'

import FeaturedName from '../components/FeaturedName'
import Social from '../components/Social'
import Link from '../components/Link'
import LastFm from '../components/LastFm'
import Strava from '../components/Strava'

import styles from '../styles/Home.module.sass'

export const getServerSideProps = async () => {
  const lastFmResponse = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=skvggor&format=json&api_key=df8ee1a832c074bd87168b37d8946004')
  const lastFmData = await lastFmResponse.json()

  const stravaResponse = await fetch('https://strava-stats-api.herokuapp.com/strava-stats')
  const stravaData = await stravaResponse.json()

  return {
    props: {
      lastFmData,
      stravaData,
    }
  }
}

export default function Home({ lastFmData, stravaData }) {
  const content = {
    name: 'skvggor',
    description: [
      { id: 0, text: 'I\'m a developer currently working with ' },
      { id: 1, text: <Link type="vue" link="https://vuejs.org/" text="Vue" /> },
      { id: 2, text: ' and ' },
      { id: 3, text: <Link type="react" link="https://reactjs.org/" text="React" /> },
      { id: 4, text: ' at ' },
      { id: 5, text: <Link type="match" link="https://www.match.mt/" text="Match" /> },
      { id: 6, text: '.' },
    ],
    social: [
      { id: 0, icon: 'source-code', link: 'https://github.com/marcker/skvggor.dev/tree/master/skvggor-site' },
      { id: 1, icon: 'github', link: 'https://github.com/marcker' },
      { id: 2, icon: 'twitter', link: 'https://twitter.com/marcker' },
      { id: 4, icon: 'instagram', link: 'https://instagram.com/skvggor' },
      { id: 5, icon: 'last-fm', link: 'https://last.fm/user/skvggor' },
      { id: 6, icon: 'strava', link: 'https://www.strava.com/athletes/18616728' },
    ],
    lastfm: { lastFmData },
    strava: { stravaData },
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="I'm a developer currently working with Vue and React at Match." />

        <meta property="og:title" content="Marcos Lima" />
        <meta property="og:description" content="I'm a developer currently working with Vue and React at Match." />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:url" content="https://skvggor.dev" />

        <meta property="twitter:title" content="Marcos Lima" />
        <meta property="twitter:description" content="I'm a developer currently working with Vue and React at Match." />
        <meta property="twitter:image" content="/opengraph.png" />
        <meta property="twitter:domain" content="https://skvggor.dev" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="https://skvggor.dev" />
        <meta property="twitter:site" content="https://skvggor.dev" />

        <link rel="canonical" href="https://skvggor.dev" />
        <link rel="icon" href="/favicon.ico" />

        <title>Marcos Lima</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <FeaturedName
            name={content.name}
            description={content.description}
          />
          <Social items={content.social} />
        </div>
        <LastFm data={content.lastfm} />
        <Strava data={content.strava} />
      </main>
    </div>
  )
}
