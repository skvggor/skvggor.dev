import { IconContext } from 'react-icons'
import { SiGithub, SiTwitter, SiInstagram, SiLastdotfm, SiStrava } from 'react-icons/si'
import { CgCode } from 'react-icons/cg'
import { VscError } from 'react-icons/vsc'

import styles from './index.module.sass'

function Social(props) {
  const iconSwitcher = name => {
    let icon

    if (name === 'source-code') {
      icon = <CgCode />
    } else if (name === 'github') {
      icon = <SiGithub />
    } else if (name === 'twitter') {
      icon = <SiTwitter />
    } else if (name === 'instagram') {
      icon = <SiInstagram />
    } else if (name === 'last-fm') {
      icon = <SiLastdotfm />
    } else if (name === 'strava') {
      icon = <SiStrava />
    } else {
      icon = <VscError />
    }

    return icon
  }

  const social = props.items.map(item => (
    <a
      key={item.id}
      href={item.link}
    >
      <IconContext.Provider value={{ className: 'icon' }}>
        {iconSwitcher(item.icon)}
      </IconContext.Provider>
    </a>
  ))

  return (
    <div className={styles.social}>{social}</div>
  )
}

export default Social
