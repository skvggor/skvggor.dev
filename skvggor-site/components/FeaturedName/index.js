import styles from './index.module.sass'


function FeaturedName(props) {
  const htmlDescription = () =>
    ({ __html: props.description })

  return (
    <div>
      <h1 className={styles.name}>{props.name}</h1>
      <p className={styles.description} dangerouslySetInnerHTML={htmlDescription()} />
    </div>
  )
}

export default FeaturedName