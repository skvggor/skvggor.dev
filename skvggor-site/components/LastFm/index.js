import Link from '../Link'

import styles from './index.module.sass'

function LastFm(props) {

  const music = props.data.lastFmData.recenttracks.track.map((track, index) => {
    if (index === 0) {
      if ('@attr' in track) {
        return (
          <span
            key={index}
            className={styles.text}
          >
            <span className={styles.line}>🎶 Now listening to '<Link link={track.url} text={track.name} />'</span>
            <span className={styles.line}>by '<Link link={`https://www.last.fm/music/${track.artist['#text'].replace(' ', '+')}`} text={track.artist['#text']} />'</span>
          </span>
        )
      }
      else {
        return (
          <span
            key={index}
            className={styles.text}
          >
            <span className={styles.line}>🎶 Listened to '<Link link={track.url} text={track.name} />'</span>
            <span className={styles.line}>by '<Link link={`https://www.last.fm/music/${track.artist['#text'].replace(' ', '+')}`} text={track.artist['#text']} />'</span>
          </span>
        )
      }
    }
  })

  return (
    <div className={styles.container}>{music}</div>
  )
}

export default LastFm