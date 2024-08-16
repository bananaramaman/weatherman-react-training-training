import { Middleware } from 'redux'
import { createLogger } from 'redux-logger'

const loggerMiddleware: Middleware = createLogger({ predicate: () => true })
export default loggerMiddleware