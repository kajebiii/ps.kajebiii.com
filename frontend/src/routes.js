import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'containers'
import { SignUpPage } from 'containers'

export const routes = (store) => {
  const authRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.app_name.user_state.username;
    if (username === "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  const authNotRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.app_name.user_state.username;
    if (username != "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route onEnter={authNotRequired}>
        <Route path="signup" component = {SignUpPage} />
      </Route>
      <Route onEnter={authRequired}>
      </Route>
    </Route>
  )
}

export default routes