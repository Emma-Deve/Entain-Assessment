import React from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  updateCategory,
  selectCategory,
} from '../../store/features/categorySlice'
import { Categories } from '../../interfaces/categories'
import styles from './header.module.scss'
import { Container } from '../index'

function Header() {
  const { category } = useAppSelector(selectCategory)
  const dispatch = useAppDispatch()

  const getActiveNav = (item: Categories) =>
    item === category ? styles.navActive : styles.navItem

  const handleChangeNav = (item: Categories) => {
    dispatch(updateCategory(item))
  }

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.left}>Next to go</div>
        <nav className={styles.right}>
          <div
            className={getActiveNav(Categories.all)}
            onClick={() => handleChangeNav(Categories.all)}
          >
            ALL
          </div>
          <div
            className={getActiveNav(Categories.greyHound)}
            onClick={() => handleChangeNav(Categories.greyHound)}
          >
            GREYHOUND
          </div>
          <div
            className={getActiveNav(Categories.harness)}
            onClick={() => handleChangeNav(Categories.harness)}
          >
            HARNESS
          </div>
          <div
            className={getActiveNav(Categories.horse)}
            onClick={() => handleChangeNav(Categories.horse)}
          >
            HORSE
          </div>
        </nav>
      </header>
    </Container>
  )
}

export default Header
