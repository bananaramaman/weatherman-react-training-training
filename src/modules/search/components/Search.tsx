import '../styles/Search.scss'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchLocationsAction } from '../actions'
import SearchResults from './SearchResults'

const SearchScreen = (): JSX.Element => {

	/**
	 * Dependency Hooks
	 */

	const dispatch = useDispatch()

	/**
	 * Local State
	 */

	const [query, setQuery] = useState<string>('')

	/**
	 * Local Functions
	 */

	const _handleQueryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const _fetchLocations = () => {
		if (query) {
			dispatch(fetchLocationsAction.started(query))
		}
	}

	return (
		<div className='search'>
			<h2>React Weather app</h2>
			<div>
				<input type="text" placeholder="Search text" value={query} onChange={_handleQueryChanged} autoFocus={true} />
			</div>
			<button className='search__text--button' onClick={_fetchLocations}>Fetch Locations</button>
			<SearchResults />
		</div>
	)
}

export default SearchScreen