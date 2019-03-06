import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import Loading from './components/Loading'
import { setStartArticle } from './store/actions/article'
import * as serviceWorker from './serviceWorker'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

const app = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(app, document.getElementById('root'))
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister()
    hasRendered = true
  }
}


ReactDOM.render(<Loading />, document.getElementById('root'))

store.dispatch(setStartArticle()).then(() => {
  renderApp()
  console.log('Done!')
})
