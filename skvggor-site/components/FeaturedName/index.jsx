import { usePalette } from 'color-thief-react'

import styles from './index.module.sass'

const FeaturedName = (props) => {

  const { data, loading, error } = usePalette(props.lastFmImage, 3, 'hex', { crossOrigin: true })

  const description = (descriptionArray) => {
    return (
      <p className={styles.description}>
        { descriptionArray.map((piece) => {
            return (<span key={piece.id}>{piece.text}</span>)
          })
        }
      </p>
    )
  }

  const applyStyleInDisplay = (element) => {
    if (element) {
      return element.style.setProperty(
        'background-image',
        `linear-gradient(45deg, ${data[0]} 20%, ${data[1]} 80%)`,
        'important'
      )
    }
  }

  return (
    <>
      {!loading && (
        <>
          <h1
            className={styles.name}
            ref={applyStyleInDisplay}
          >
            {props.name}
          </h1>

          {description(props.description)}
        </>
      )}
    </>
  )
}

export default FeaturedName
