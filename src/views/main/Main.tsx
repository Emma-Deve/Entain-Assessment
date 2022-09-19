import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectCategory } from '../../store/features/categorySlice'
import { Container, Loading } from '../../components'
import { reqRaceData } from '../../api'
import { INextRaces } from '../../interfaces/nextRaces'
import { RaceList } from '../../components'
import { getCategoryId } from '../../utils/getCategoryId'

function Main() {
  const { category } = useAppSelector(selectCategory)
  const currentCategoryId = getCategoryId(category)
  const [raceData, setRaceData] = useState<INextRaces | null>(null)

  // get race list from API
  const getRacesData = async () => {
    const { data } = await reqRaceData()
    if (data.data) setRaceData(data.data)
  }

  useEffect(() => {
    getRacesData()
  }, [])

  // filter race list by category_id
  const currentRaceIds = raceData
    ? raceData.next_to_go_ids.filter(
        (id) =>
          !currentCategoryId ||
          raceData.race_summaries[id].category_id === currentCategoryId,
      )
    : []

  // sort by time ascending
  if (raceData && currentRaceIds.length > 0) {
    currentRaceIds.sort(
      (id1, id2) =>
        raceData.race_summaries[id1].advertised_start.seconds -
        raceData.race_summaries[id2].advertised_start.seconds,
    )
  }

  // pick out necessary data
  const raceList =
    raceData && currentRaceIds.length > 0
      ? currentRaceIds.map((id) => ({
          advertised_start:
            raceData.race_summaries[id].advertised_start.seconds,
          meeting_name: raceData.race_summaries[id].meeting_name,
          race_number: raceData.race_summaries[id].race_number,
        }))
      : []

  return raceData ? (
    <Container>
      <RaceList list={raceList} />
    </Container>
  ) : (
    <Loading />
  )
}

export default Main
