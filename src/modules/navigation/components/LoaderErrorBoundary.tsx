import React, { ErrorInfo, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
}

const INITIAL_STATE: State = {
	hasError: false,
}

/**
 * Handle errors triggered when a module fails to load (ie due to network failure).
 * @see [Error Boundaries](https://reactjs.org/docs/code-splitting.html#error-boundaries)
 */
class LoaderErrorBoundary extends React.PureComponent<Props, State> {

	state = INITIAL_STATE

	static getDerivedStateFromError(): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Uncaught error:', error, errorInfo)
	}

	_onReloadPage = (): void => {
		window.location.reload()
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<p>Something went wrong...</p>

					<button onClick={this._onReloadPage}>Retry</button>
				</div>
			)
		}

		return this.props.children
	}
}

export default LoaderErrorBoundary
