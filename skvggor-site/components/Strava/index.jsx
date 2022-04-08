import styles from './index.module.sass'

function Strava(props) {
  const addComma = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span className={styles.bodyText}>
        🚴 &#8212; In {new Date().getFullYear()} I rides &nbsp;<br />
        </span>
      </div>

      <div className={styles.total}>
        <span className={styles.kilometers}>
          {`${addComma(Math.floor(props.data.stravaData.distanceInMeters / 1000))}`}&nbsp;
        </span>
        <span className={styles.symbol}>
          km&nbsp;
        </span>
      </div>

      <div className={styles.text}>
        <span className={styles.bodyText}>
          until now.
        </span>
      </div>
    </div>
  )
}

export default Strava
