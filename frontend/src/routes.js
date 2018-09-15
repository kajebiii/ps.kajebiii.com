import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'containers'
import { SignUpPage } from 'containers'
import { AtcoderPage } from 'containers'
import { HandleLoginPage } from 'containers'
import { KajebiiiBOJSubmissionPage } from 'containers'
import { KajebiiiBOJCodePage } from 'containers'
import { RealtimeMarkdownPage } from 'components'
import { CppToImagePage } from 'components'
import { BOJContestPage } from 'containers'
import { BOJLengthPage } from 'containers'
import { TagListPage } from 'containers'
import { TagPage } from 'containers'

export const routes = (store) => {
  const authRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.users.user_state.username;
    if (username === "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  const authNotRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.users.user_state.username;
    if (username != "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="handle-login" component = {HandleLoginPage} />
      <Route path="atcoder" component = {AtcoderPage} />
      <Route path="kajebiii/boj" component = {KajebiiiBOJSubmissionPage} />
      <Route path="kajebiii/boj/:boj_problem" component = {KajebiiiBOJCodePage} />
      <Route path="realtime-markdown" component = {RealtimeMarkdownPage} />
      <Route path="code-to-image" component = {CppToImagePage} />
      <Route path="boj/contest" component = {BOJContestPage} />
      <Route path="boj/length" component = {BOJLengthPage} />
      <Route path="tag" component = {TagListPage} />
      <Route path="tag/:tag_id" component = {TagPage} />
      
      <Route onEnter={authNotRequired}>
        <Route path="signup" component = {SignUpPage} />
      </Route>
      <Route onEnter={authRequired}>
      </Route>
    </Route>
  )
}

export default routes