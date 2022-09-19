import React from 'react'
import { getCountDown } from '../../utils/getCountDown'
import styles from './raceItem.module.scss'

export interface IRaceItem {
  advertised_start: number
  meeting_name: string
  race_number: number
  timeRemaining?: number
}

function RaceItem({ meeting_name, race_number, timeRemaining }: IRaceItem) {
  const countDown = timeRemaining ? getCountDown(timeRemaining) : ''

  return (
    <div className={styles.raceItem}>
      <div className={styles.name}>{meeting_name}</div>
      <div className={styles.time}>{countDown}</div>
      <div className={styles.number}>Race {race_number}</div>
    </div>
  )
}
export default RaceItem
