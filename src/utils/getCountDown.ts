/**
 *
 * format count down remaining time.
 * eg: 100s -> 1m 40s
 *    3900s -> 1h 3m 20s
 */
export const getCountDown = (timeRemaining: number) => {
  const hours = Math.floor(timeRemaining / 3600)
  const minutes = Math.floor((timeRemaining % 3600) / 60)
  const seconds = Math.floor((timeRemaining % 3600) % 60)
  return `${hours > 0 ? `${hours}h ` : ''}${
    minutes > 0 ? `${minutes}m ` : ''
  }${seconds}s`
}
