import styles from './index.module.sass'

function Link(props) {
  return (
    <>
      <a
        className={styles[props.type] || styles.default}
        href={props.link || '#'}
        target={props.target || '_self'}
      >
        {props.text}
      </a>
    </>
  )
}

export default Link