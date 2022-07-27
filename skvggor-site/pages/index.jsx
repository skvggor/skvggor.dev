import Head from 'next/head'

import FeaturedName from '../components/FeaturedName'
import Social from '../components/Social'
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
    description: [{
      id: 0,
      text: `I\'m a tech lead currently working with software development<br>
              at <a href="https://www.vipbrtelecom.com.br/" target="_self">VIP BR Telecom</a> (<a href="https://alloha.com/" target="_self">Alloha Fibra</a>).`
    }],
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
        <meta name="description" content="I'm a tech lead currently working with software development at VIP BR Telecom (Alloha Fibra)." />

        <meta property="og:title" content="Marcos Lima" />
        <meta property="og:description" content="I'm a tech lead currently working with software development at VIP BR Telecom (Alloha Fibra)." />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:url" content="https://skvggor.vercel.app" />

        <meta property="twitter:title" content="Marcos Lima" />
        <meta property="twitter:description" content="I'm a tech lead currently working with software development at VIP BR Telecom (Alloha Fibra)." />
        <meta property="twitter:image" content="/opengraph.png" />
        <meta property="twitter:domain" content="https://skvggor.vercel.app" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="https://skvggor.vercel.app" />
        <meta property="twitter:site" content="https://skvggor.vercel.app" />

        <link rel="canonical" href="https://skvggor.vercel.app" />
        <link rel="icon" href="/favicon.ico" />

        <title>Marcos Lima - Tech Lead</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <FeaturedName
            name={content.name}
            description={content.description}
            lastFmImage={content.lastfm.lastFmData.recenttracks.track[0].image[3]['#text']}
          />
          <Social items={content.social} />
        </div>
        <LastFm data={content.lastfm} />
        <Strava data={content.strava} />
      </main>
    </div>
  )
}
