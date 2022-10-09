import styles from './index.module.sass'

function Link(props) {
  return (
    <>
      <a
        style={{ color: props.color }}
        className={styles[props.type] || styles.default}
        href={props.link || '#'}
        target={props.target || '_self'}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </>
  )
}

export default Link
