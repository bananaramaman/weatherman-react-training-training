import React, { Suspense } from 'react'
import { Routes, RoutesProps } from 'react-router-dom'

import Loader from './Loader'
import LoaderErrorBoundary from './LoaderErrorBoundary'

/**
 * A wrapped react-router `Switch` to handle route-based splitting.
 * 
 * @param props component props
 */
const LazySwitch = ({ children }: RoutesProps): JSX.Element => (
	<LoaderErrorBoundary>
		<Suspense fallback={<Loader />}>
			<Routes>
				{children}
			</Routes>
		</Suspense>
	</LoaderErrorBoundary>
)

export default LazySwitch
