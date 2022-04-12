import { usePalette } from 'color-thief-react'

import styles from './index.module.sass'

const FeaturedName = (props) => {

  const { data, loading, error } = usePalette(props.lastFmImage, 10, 'hex', { crossOrigin: true })

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
    let styled

    if (element) {
      if (data !== undefined) {
        styled = element.style.setProperty(
          'background-image',
          `linear-gradient(45deg, ${data[0]} 20%, ${data[1]} 80%)`,
          'important'
        )
      } else {
        styled = element.style.setProperty(
          'background-image',
          'linear-gradient(45deg, #f00 20%, #666 80%)',
          'important'
        )
      }
    }

    return styled
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
