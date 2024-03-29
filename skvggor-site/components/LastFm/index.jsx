import React, { useEffect, useState } from 'react'
import { usePalette } from 'color-thief-react'

import Link from '../Link'

import styles from './index.module.sass'

const LastFm = (props) => {
  const [heightVisualizer, setHeightVisualizer] = useState([ 5, 5, 5, 5, 5, 5, 5, ])
  const MAX_HEIGHT_BAR = 60
  let showVisualizer = false

  useEffect(() => {
    if (showVisualizer) {
      const interval = setInterval(() => {
        setHeightVisualizer([
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
          Math.floor(Math.random() * MAX_HEIGHT_BAR),
        ])
      }, 100)

      return () => {
        clearInterval(interval)
      }
    }
  })

  const renderBars = (data) => (
    heightVisualizer.map((barHeight, index) => {
      let backgroundColor

      if (barHeight > 0) {
        backgroundColor = data[0]
      }

      if (barHeight > 20) {
        backgroundColor = data[1]
      }

      if (barHeight > 40) {
        backgroundColor = data[2]
      }

      const span = <span
        key={index}
        style={{ backgroundColor: backgroundColor, height: barHeight }}
      />

      return span
    })
  )

  const music = props.data.lastFmData.recenttracks.track.map((track, index) => {
    if (index === 0) {
      let text

      if ('@attr' in track) {
        text = 'Now listening to '
        showVisualizer = true
      } else {
        text = 'Listened to '
        showVisualizer = false
      }

      const src = track.image[3]['#text'] ||
                  '/music-no-image.webp'

      const { data, loading, error } = usePalette(src, 10, 'hex', { crossOrigin: true })

      return (
        <div
          key={index}
          className={styles.content}
        >
          <div className={styles['container-image']}>
            <span className={styles['visualizer']}>
              {(!loading && showVisualizer) && renderBars(data)}
            </span>
            <img
              className={styles.image}
              src={src}
              alt={`${text}'${track.name}' by '${track.artist['#text']}'`}
              width="70"
              height="70"
            />
          </div>
          <div className={styles['container-text']}>
            <span className={styles.line}>{text}'<Link color={!loading ? data[0] : '#ccc'} link={track.url} text={track.name} />'</span>
            <span className={styles.line}>by '<Link color={!loading ? data[1] : '#ccc'} link={`https://www.last.fm/music/${track.artist['#text'].replace(/\s/g, '+')}`} text={track.artist['#text']} />'</span>
          </div>
        </div>
      )
    }
  })

  return <div className={styles.container}>{music}</div>
}

export default LastFm
