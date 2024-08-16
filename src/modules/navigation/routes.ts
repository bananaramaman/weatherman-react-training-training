import { lazy } from 'react'

/**
 * Provides the routes used across the app.
 * The components are wrapped with lazy so we only load what's necessary based on the current route.
 * 
 * Note: The lazy route/component should then be rendered inside a `Suspense`, so we can show fallback content while waiting for the lazy component to load.
 *
 * @see [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
 * @see [Route-based code splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
 */
export default {
	Search: lazy(() => import('../search/components/Search')),
	Details: lazy(() => import('../details/components/Details')),
}