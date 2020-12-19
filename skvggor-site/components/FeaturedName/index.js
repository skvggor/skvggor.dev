import styles from './index.module.sass'

function FeaturedName() {
  return (
    <div>
      <h1 className={styles.name}>skvggor</h1>
      <p className={styles.description}>I'm a developer currently working with <a href="https://vuejs.org/">Vue</a> and <a href="https://reactjs.org/">React</a> at <a href="https://www.match.mt/">match.mt</a>.</p>
    </div>
  )
}

export default FeaturedName