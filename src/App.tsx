import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './modules/root'
import { Paths } from './modules/navigation/types'
import LazySwitch from './modules/navigation/components/LazySwitch'
import Routes from './modules/navigation/routes'
import NavigateSetter from './modules/navigation/components/NavigateSetter'

const App = (): JSX.Element => (
	<Provider store={store}>
		<BrowserRouter>
			<NavigateSetter />
			<LazySwitch>
				<Route path={Paths.HOME} element={<Routes.Search />} />
				<Route path={Paths.DETAILS} element={<Routes.Details />} />
			</LazySwitch>
		</BrowserRouter>
	</Provider>
)

export default App
