import React from 'react'
// CSS
import classes from './InfoSection.module.css'
// Logo
import defaultLogo from '../../../assets/svg/personal-logo.svg'

const infoSection = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.InfoWrapper}>
        <div className={classes.Header}>
          {props.header}
        </div>
        <div className={classes.InfoContainer}>
          <div className={classes.Info}
            dir='ltr'
            tabIndex='-1'>
            {props.children}
          </div>
        </div>
      </div>
      <div className={classes.LogoWrapper}>
        <div className={classes.LogoContainer}>
          <div className={classes.Logo}>
            <img src={props.src ? props.src : defaultLogo}
              draggable="false"
              height="72" 
              width="72" 
              alt={props.title} 
              title={props.title} />
          </div>
        </div>
        <div className={classes.Name}>{props.logoTitle}</div>
      </div>
    </div>
  )
}

export default infoSection