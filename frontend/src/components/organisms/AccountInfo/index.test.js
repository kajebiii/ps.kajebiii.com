import React from 'react'
import { shallow } from 'enzyme'
import AccountInfo from '.'

const wrap = (props = {}) => shallow(<AccountInfo user_state={{profile:{username:"kajebiii", nickname:"kajebiii_nick"}}} {...props}/>)

it('renders username when passed in', () => {
  let username = "kajebiii"
  const wrapperWithName = wrap({user_state: {profile:{username:"kajebiii", nickname:"kajebiii_nick"}}})
  expect(wrapperWithName.find('SignIn')).toHaveLength(0)
  expect(wrapperWithName.find('SignOut')).toHaveLength(1)
  const wrapperWithoutName = wrap({user_state: {profile:{username:"", nickname:""}}})
  expect(wrapperWithoutName.find('SignIn')).toHaveLength(1)
  expect(wrapperWithoutName.find('SignOut')).toHaveLength(0)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
