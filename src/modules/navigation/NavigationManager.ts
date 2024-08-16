import { NavigateFunction } from 'react-router-dom'

import { Paths } from './types'

/**
 * NavigateFunction must be aquired from the useNavigation hook, so is set via NavigateSetter dummy component
 */
let navigate: NavigateFunction

export function setNavigateFunction(func: NavigateFunction): void {
	navigate = func
}

/* -------------------------------------------------------------------------- */
/*                              Screen Navigation                             */
/* -------------------------------------------------------------------------- */

export const navigateToDetails = (): void => {
	navigate(Paths.DETAILS)
}
