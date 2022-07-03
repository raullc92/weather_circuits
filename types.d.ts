export interface Circuit {
  name: string
  latitude: number
  longitude: number
  location: string
  price?: number
  forecasts: Array<Forecast>
  comunity: Comunity
}

export interface Forecast {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  humidity: number
  main: string
  description: string
  clouds: number
  pop: number
}

export enum Comunity {
  Cataluna,
  Madrid,
}
