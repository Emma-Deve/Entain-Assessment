export interface INextRaces {
  next_to_go_ids: string[]
  race_summaries: IRaceSummaries
}

export interface IRaceSummaries {
  [key: string]: IRaceSummary
}

export interface IRaceSummary {
  race_id: string
  race_name: string
  race_number: number
  meeting_id: string
  meeting_name: string
  category_id: string
  advertised_start: IAdvertisedStart
  race_form: IRaceForm
  venue_id: string
  venue_name: string
  venue_state: string
  venue_country: string
}

export interface IAdvertisedStart {
  seconds: number
}

export interface IRaceForm {
  distance: number
  distance_type: IDistanceType
  distance_type_id: string
  track_condition: ITrackCondition
  track_condition_id: string
  weather: IWeather
  weather_id: string
  race_comment: string
  additional_data: string
  generated: number
  silk_base_url: string
  race_comment_alternative: string
}

export interface IDistanceType {
  id: string
  name: string
  short_name: string
}

export interface ITrackCondition {
  id: string
  name: string
  short_name: string
}

export interface IWeather {
  id: string
  name: string
  short_name: string
  icon_uri: string
}
