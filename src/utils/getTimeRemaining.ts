/**
 * get remaining seconds
 */

export const getTimeRemaining = (second: number) => {
  const currentTime = new Date().getTime()
  return second - Math.round(currentTime / 1000)
}
