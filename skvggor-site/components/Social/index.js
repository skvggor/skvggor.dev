import { SiGithub, SiTwitter, SiInstagram, SiLastDotFm } from 'react-icons/si'
import { CgCode } from 'react-icons/cg'
import { VscError } from 'react-icons/vsc'

import styles from './index.module.sass'

function Social(props) {
  const iconSwitcher = name => {
    let icon

    if (name === 'source-code') {
      icon = <CgCode className="icon" />
    }
    else if (name === 'github') {
      icon = <SiGithub className="icon" />
    }
    else if (name === 'twitter') {
      icon = <SiTwitter className="icon" />
    }
    else if (name === 'instagram') {
      icon = <SiInstagram className="icon" />
    }
    else if (name === 'last-fm') {
      icon = <SiLastDotFm className="icon" />
    }
    else {
      icon = <VscError className="icon" />
    }

    return icon
  }

  const social = props.items.map(item => (
    <a
      key={item.id}
      href={item.link}
    >
      {iconSwitcher(item.icon)}
    </a>
  ))

  return (
    <div className="social">{social}</div>
  )
}

export default Social