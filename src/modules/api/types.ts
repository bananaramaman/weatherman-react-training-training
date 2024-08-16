export interface FetchLocationsResponse {
    list: Location[]
    count: number
}

export interface Location {
    id: number
    name: string
    main: Weather
    sys: Country
}

export interface Weather {
    temp: number
    temp_max: number
    temp_min: number
    humidity: number
    pressure: number
}

export interface Country {
    country: string
}

export interface FetchForecastResponse {
    list: Forecast[]
    count: number
}

export interface Forecast {
    dt: number
    dt_txt: string
    main: Weather
    weather: WeatherDescription[]
}

export interface WeatherDescription {
    description: string
    icon: string
}