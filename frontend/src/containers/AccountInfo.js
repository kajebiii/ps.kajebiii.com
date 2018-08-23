import React from 'react'
import { connect } from 'react-redux'
import { AccountInfo } from 'components'
import { user_login, user_logout } from '../store/ps4u/actions'


const mapStateToProps = (state) => ({user_state : state.ps4u.user_state})
const mapDispatchToProps = (dispatch) => {
    return {
        action_login: (username, password) => {
            dispatch(user_login(username, password))
        },
        action_logout: () => {
            dispatch(user_logout()) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((props)=>(<AccountInfo {...props} />))
