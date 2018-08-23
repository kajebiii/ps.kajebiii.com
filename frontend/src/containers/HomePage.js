import React from 'react'
import { connect } from 'react-redux'
import { HomePage } from 'components'


const mapStateToProps = (state) => ({user_state: state.ps4u.user_state})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<HomePage {...props} />))
