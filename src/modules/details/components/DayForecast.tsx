// src/modules/details/components/DayForecast.tsx

import React from 'react'
import { Forecast } from '../../api/types'

interface DayForecastProps {
	forecast: Forecast
}

// Helper function to get the day name
const getDayName = (timestamp: string): string => {
	const date = new Date(timestamp)
	const options = { weekday: 'short' } as const
	return new Intl.DateTimeFormat('en-Intl', options).format(date)
}

const DayForecast: React.FC<DayForecastProps> = ({ forecast }) => {
	return (
		<div className="day-forecast">
			<h4>{getDayName(forecast.dt_txt)}</h4>
			<p>{forecast.weather[0].description}</p>
			<p>{forecast.main.temp}°C</p>
		</div>
	)
}

export default DayForecast
