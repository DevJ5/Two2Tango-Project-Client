import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {isExpired} from '../jwt'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const logout = () => ({
  type: USER_LOGOUT
})

const userLoginSuccess = ( payload ) => ({
	type: USER_LOGIN_SUCCESS,
	payload
})

 const userLoginFailed = (error) => ({
	type: USER_LOGIN_FAILED,
	payload: error || 'Unknown error'

})

  const userSignupFailed = (error) => ({
		type: USER_SIGNUP_FAILED,
		payload: error || 'Unknown error'
})

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
})


export const login = (email, password) => (dispatch) =>  
request
		.post(`${baseUrl}/login`)
    .send({email, password})
    .then(result => dispatch(userLoginSuccess(result.body)))
    .catch(err => {
      console.log("submiting login info!")
    	if (err.status === 400) {
    		dispatch(userLoginFailed(err.response.body.message))
    	}
    	else {
    		console.error(err)
    	}
    })

export const signup = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ email, password })
		.then(result => {
			dispatch(userSignupSuccess())
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
