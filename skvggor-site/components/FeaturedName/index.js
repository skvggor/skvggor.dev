import styles from './index.module.sass'


function FeaturedName(props) {
  const description = descriptionArray => {
    return (
      <p className={styles.description}>
        {descriptionArray.map(piece => piece.text)}
      </p>
    )
  }

  return (
    <>
      <h1 className={styles.name}>{props.name}</h1>
      {description(props.description)}
    </>
  )
}

export default FeaturedName