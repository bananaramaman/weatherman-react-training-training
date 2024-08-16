import React from 'react'
import { useDispatch } from 'react-redux'

import { locationSelectedAction } from '../actions'
import { Location as LocationType } from '../../api/types'

interface Props {
	location: LocationType
}

const Location = (props: Props): JSX.Element => {

	/**
	 * Dependency Hooks
	 */

	const dispatch = useDispatch()

	/**
	 * Local Functions
	 */

	const _onItemClicked = () => {
		dispatch(locationSelectedAction(props.location))
	}

	return (
		<p className='search__text--clickable' onClick={_onItemClicked}>
			{props.location.name}, {props.location.sys.country} - <span className='search__text--italic'>{props.location.main.temp}°C</span>
		</p>
	)
}

export default Location
