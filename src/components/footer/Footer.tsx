import React from 'react'
import styles from './footer.module.scss'
import { Container } from '../index'

function Footer() {
  return (
    <Container>
      <footer className={styles.header}>
        <h6 className={styles.left}>Entain Assessment</h6>
        <h5 className={styles.right}>Emma Li.</h5>
      </footer>
    </Container>
  )
}

export default Footer
