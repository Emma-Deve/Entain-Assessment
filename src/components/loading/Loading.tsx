import React from 'react'
import styles from './loading.module.scss'
import { Container } from '../index'

function Loading() {
  return (
    <Container>
      <div className={styles.loading}>Loading...</div>
    </Container>
  )
}

export default Loading
