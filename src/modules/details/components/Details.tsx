import '../styles/Details.scss'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootStoreState } from '../../root'
import { Location , FetchForecastResponse, Forecast } from '../../api/types'

import { fetchForecastAction } from '../actions'
import DayForecast from './DayForecast'

const DetailsScreen = (): JSX.Element | null => {

	/**
	 * Dependency Hooks
	 */

	const dispatch = useDispatch()

	/**
	 * Store State
	 */

	const location = useSelector<RootStoreState, Location | undefined>(state => state.details.selectedLocation)

	const forecast = useSelector<RootStoreState, FetchForecastResponse | undefined>(state => state.details.forecast)
	const loading = useSelector<RootStoreState, boolean>(state => state.details.loading)
	const error = useSelector<RootStoreState, Error | undefined>(state => state.details.error)

	/**
	 * Effects/Subscriptions
	 */

	useEffect(() => {
		if (location) {
			// TODO dispatch action to load forecasts for given location id
			dispatch(fetchForecastAction.started(location.id))
		}
	}, [location, dispatch])

	/**
	 * Local Functions
	 */

	if (!location) {
		return null
	}
	
	const getFilteredForecast = (forecasts: Forecast[] | undefined): Forecast[] => {
		if (!forecasts)	return []

		// Return every 8th item from the forecast
		return forecasts.filter((_, index) => index %  9 === 0).slice(0, 5)
	}
	const filteredForecast = getFilteredForecast(forecast?.list)



	return (
		<div className='details'>
			<h2>Weather Details:</h2>
			<h3>{location.name}, {location.sys.country}</h3>

			{/* TODO render current temperatures */}
			{forecast && forecast.list.length > 0 && (
				<>
					<h3>{forecast.list[0].main.temp}°C</h3>
					<div className='current'>
						<h3>Min Temp <p>{forecast.list[0].main.temp_min}°C</p></h3>
						<h3>Max Temp <p>{forecast.list[0].main.temp_max}°C</p></h3>
						<h3>Humidity <p>{forecast.list[0].main.humidity}%</p></h3>
						<h3>Pressure <p>{forecast.list[0].main.pressure}hPa</p></h3>
					</div>
					
				</>
			)}

			{/* TODO render forecasts - with loading/error state */}
			{loading && <p>Loading forecast...</p>}
			{error && <p>Error loading forecast: {error.message}</p>}
			<>
				<h3>Forecast: </h3>
			</>
			{filteredForecast && filteredForecast.length > 0 && (
				<div className="forecast-list">
					{filteredForecast.map((dayForecast: Forecast) => (
						<DayForecast key={dayForecast.dt_txt} forecast={dayForecast} />
					))}
				</div>
			)}
		</div>
	)
}

export default DetailsScreen