import Image from 'next/image'

import Link from '../Link'

import styles from './index.module.sass'

function LastFm(props) {
  const template = obj => (
    <div className={styles.content}>
      <div className={styles['container-image']}>
        {obj.image}
      </div>
      <div className={styles['container-text']}>
        {obj.music}
        {obj.artist}
      </div>
    </div>
  )

  const music = props.data.lastFmData.recenttracks.track.map((track, index) => {
    if (index === 0) {
      const text  = '@attr' in track ?
                    'Now listening to ' :
                    'Listened to '

      const src = track.image[3]['#text'] ||
                  '/music-no-image.webp'

      return template({
        image: <Image
                className={styles.image}
                src={src}
                alt={`${text}'${track.name}' by '${track.artist['#text']}'`}
                width="70"
                height="70"
              />,
        music: <span className={styles.line}>{text}'<Link link={track.url} text={track.name} />'</span>,
        artist: <span className={styles.line}>by '<Link link={`https://www.last.fm/music/${track.artist['#text'].replace(/\s/g, '+')}`} text={track.artist['#text']} />'</span>
      })
    }
  })

  return <div className={styles.container}>{music}</div>
}

export default LastFm