import React from 'react'

import { PageTemplate } from 'containers'
import { Link } from 'react-router'

const HomePage = ( {user_state, children, ...props}) => {
  return (
    <PageTemplate {...props}>
    <div className="container">
      <h1>Problem Solving For You</h1>
      <h2>Announcement</h2>
      <ul>
      <li>
        <p>추가하고 싶은 기능이 있으시면 <a href="https://github.com/kajebiii/ps4u.kajebiii.com">GitHub</a>에 Issue를 등록해주세요.</p>
      </li>
      </ul>
      <h2>Login</h2>
      <ul>
      <li>
        <Link to="/handle-login">Login</Link><br/>
        <p>handle 정보로 로그인 할 수 있습니다.</p>
      </li>
      </ul>
      <h2>Atcoder</h2>
      <ul>
      <li>
        <Link to="/atcoder">Atcoder Problem Chest</Link><br/>
        <p>Atcoder 궤짝을 볼 수 있습니다.</p>
      </li>
      </ul>
      <h2>BOJ</h2>
      <ul>
      <li>
        <Link to="/kajebiii/boj">kajebiii AC Problem List in BOJ</Link>
        <br/>
        <del>BOJ에서 kajebiii가 AC받은 코드를 확인할 수 있습니다.</del> (삭제)
        <br/>
        <p>BOJ 정책을 따라, 문제를 맞춘 유저에게만 공개할 생각입니다. (TODO)</p>
      </li>
      <li>
        <Link to="/boj/contest">BOJ Contest Chest</Link><br/>
        <p>BOJ Contest에 대한 궤짝을 볼 수 있습니다.</p>
      </li>
      <li>
        <Link to="/boj/length">BOJ Length List</Link><br/>
        <p>BOJ 문제들을 설명이 짧은 순서로 볼 수 있습니다.</p>
      </li>
      </ul>
      <h2>Utility</h2>
      <ul>
      <li>
        <Link to="/code-to-image">C++ Code To Image</Link><br/>
        <p>C++ Code를 입력하면 Image로 바꾸어 줍니다.</p>
      </li>
      <li>
        <Link to="/realtime-markdown">Realtime Markdown Editor With Mathjax</Link><br/>
        <p>텍스트 기반의 마크업언어 Markdown를 실시간으로 작업할 수 있습니다.</p>
      </li>
      </ul>
      {children}
    </div>
    </PageTemplate>
  )
}

export default HomePage
