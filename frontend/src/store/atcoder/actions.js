export const SET_BASE_ATCODER_INFORMATION = 'SET_BASE_ATCODER_INFORMATION'
export const SET_USER_ATCODER_INFORMATION = 'SET_USER_ATCODER_INFORMATION'
export const set_base_atcoder_information = (base_atcoder_information) => ({type: SET_BASE_ATCODER_INFORMATION, base_atcoder_information})
export const set_user_atcoder_information = (user_atcoder_information) => ({type: SET_USER_ATCODER_INFORMATION, user_atcoder_information})

export const ATCODER_LOGIN = 'ATCODER_LOGIN'
export const ATCODER_LOGOUT = 'ATCODER_LOGOUT'
export const atcoder_login = (username) => ({type: ATCODER_LOGIN, username})
export const atcoder_logout = () => ({type: ATCODER_LOGOUT})
