import React from 'react'
import { useSelector } from 'react-redux'

import { Location as LocationType } from '../../api/types'
import { RootStoreState } from '../../root'
import Location from './Location'

const SearchResults = (): JSX.Element => {

	/**
	 * Store State
	 */

	const loading = useSelector<RootStoreState, boolean>(state => state.search.loading)
	const error = useSelector<RootStoreState, Error | undefined>(state => state.search.error)
	const results = useSelector<RootStoreState, LocationType[]>(state => state.search.searchResults)

	/**
	 * Local Functions
	 */

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>An error occurred while loading the locations.</p>
	}

	return (
		<React.Fragment>
			{results.map(item => <Location key={item.id} location={item} />)}
		</React.Fragment>
	)
}

export default SearchResults
