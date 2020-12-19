import { SiGithub, SiTwitter, SiInstagram, SiLastDotFm } from 'react-icons/si'
import { CgCode } from 'react-icons/cg'

import styles from './index.module.sass'

function Social() {
  return (
    <div>
      <div className="social">
        <a href="https://github.com/marcker/skvggor.dev/tree/master/skvggor-site">
          <CgCode className="icon" />
        </a>
        <a href="https://github.com/marcker">
          <SiGithub className="icon" />
        </a>
        <a href="https://twitter.com/marcker">
          <SiTwitter className="icon" />
        </a>
        <a href="https://instagram.com/skvggor">
          <SiInstagram className="icon" />
        </a>
        <a href="https://last.fm/user/skvggor">
          <SiLastDotFm className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Social