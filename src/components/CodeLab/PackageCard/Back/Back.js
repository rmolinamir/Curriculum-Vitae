import React from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '../../../../shared/getRandomColor'
// CSS
import classes from './Back.module.css'
// JSX
import { Icon } from 'react-svg-library'
import { NavLink } from 'react-router-dom'
import BokehBackground from '../../../UI/BokehBackground/BokehBackground'

const back = (props) => {
  const backgroundColor = getRandomColor(4)

  return (
    <div
      className={classes.Wrapper}>
      <BokehBackground
        randomColor
        settings={{
          backgroundSize: 90,
          sizeToBallRatio: 1.2,
          overlayOpacity: 0.25,
          animationDuration: 12,
          ballOpacity: 0.66,
          randomColor: true,
          randomDelay: true
        }}
        overlayOpacity={0.2}
        backgroundColor={backgroundColor} />
      <div className={classes.Container}>
        {props.children}
      </div>
      <div className={classes.Links}>
        <NavLink
          to={props.documentation}
          className={classes.Link}>
          <div><code>showcase</code></div>
          <Icon size={'52px'} icon='share-two' />
        </NavLink>
        <a
          className={classes.Link}
          href={props.github}
          target='_blank'
          rel='noopener noreferrer'>
          <div><code>repository</code></div>
          <Icon size={'52px'} icon='github' />
        </a>
      </div>
    </div>
  )
}

back.propTypes = {
  children: PropTypes.string.isRequired,
  documentation: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
}

export default React.memo(back)
