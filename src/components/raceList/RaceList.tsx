import React, { useEffect, useState } from 'react'
import { RaceItem } from '../index'
import { IRaceItem } from '../raceItem/RaceItem'
import { getTimeRemaining } from '../../utils/getTimeRemaining'
import styles from './raceList.module.scss'

interface IRaceList {
  list: IRaceItem[]
}

function RaceList({ list }: IRaceList) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])

  const dataWithTimeRemaining = list?.map((item) => ({
    ...item,
    timeRemaining: getTimeRemaining(item.advertised_start),
  }))

  const displayList = dataWithTimeRemaining.filter(
    (item) => item.timeRemaining >= -60,
  )

  return (
    <div className={styles.header}>
      {displayList?.length > 0 &&
        displayList
          .slice(0, 5)
          .map((item, index) => <RaceItem key={index} {...item} />)}
    </div>
  )
}

export default RaceList
