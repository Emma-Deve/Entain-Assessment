import React from 'react'
import classnames from 'classnames'
import styles from './container.module.scss'

interface IContainer {
  children?: React.ReactNode
  className?: string
}

function Container({ children, className }: IContainer) {
  return (
    <div className={classnames(styles.container, className)}>{children}</div>
  )
}

export default Container
