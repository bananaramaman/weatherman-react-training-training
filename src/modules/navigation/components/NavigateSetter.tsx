import { useNavigate } from 'react-router-dom'

import { setNavigateFunction } from '../NavigationManager'

/**
 * Needed a way to get access to navigate hook to use from redux-sagas, without using history router.
 * https://stackoverflow.com/questions/68399876/how-to-navigate-outside-of-react-component-using-react-router-6/70002872#70002872
 */
const NavigateSetter = (): null => {
	const navigate = useNavigate()

	setNavigateFunction(navigate)

	return null
}

export default NavigateSetter