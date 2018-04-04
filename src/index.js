/*
* @Author: baosheng
* @Date:   2018-04-02 22:36:11
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-03 13:06:26
*/
import React from 'react'
import ReactDOM from 'react-dom'
import MainRouter from './Router'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <MainRouter/>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
