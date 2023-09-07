import axios from 'axios'
import _ from 'lodash'
import { useRouter } from 'next/router'
import  secureLocalStorage  from  "react-secure-storage"

//PATH VARIABLE REPLACER
function bindPath(url, pathVal) {
	var newUrl = url
	var pathExpression = /:[a-z0-9]+/gi
	var pathVar
	while (((pathVar = pathExpression.exec(url)), pathVar != null)) {
		let pathVarName = pathVar[0]
		newUrl = newUrl.replace(pathVarName, pathVal[pathVarName.substring(1, pathVarName.length)])
	}
	return newUrl
}

// const getToken = (authKey = "") => {
//  const authToken  = secureLocalStorage.getItem('user')
//  return JSON.parse(authToken)
//  if(_.isEmpty(authKey)){
//      return authKey
//  } else if(getLocalStorage) {

//  }

// }
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setupInterceptors: store => {
		axios.interceptors.request.use(
			function(config) {
				//CHECK REQUEST NEED TO ADD AUTH TOKEN IN THE HEADER
				if (config.headers.isAuthRequired) {
					// const token = config.headers.authKey //GET TOKEN FROM REDUX STATE
					// const configData = JSON.parse(store)
					// const token1 = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
					const token = store.token
					if (token) config.headers.Authorization = `Bearer ${token}` //ADD AUTHORIZATION HEADER
				}
				console.log('configdata', config, store)

				//DELETE CUSTOM PROPERTY IN THE REQUEST HEADERS
				delete config.headers.isAuthRequired
				delete config.headers.authKey

				//PATH VARIABLES IS AVAILABLE
				if (config.headers.path) {
					try {
						config.url = bindPath(config.url, config.headers.path)
					} catch (e) {
						console.log('ERROR OCCURED WHEN REPLACING PATH VARIABLES', e)
					}
				}

				config.baseURL = config.headers.isJava
					? process.env.NEXT_PUBLIC_API_URL
					: config.headers.isCancel
					? process.env.NEXT_PUBLIC_API_APPOINTMENT_CANCEL_LIST_URL
					: config.headers.isPhp
					? process.env.NEXT_PUBLIC_API_PHP_URL
					: config.headers.isArticle
					? process.env.NEXT_PUBLIC_API_ARTICLE_URL
					: config.headers.isB2b
					? process.env.NEXT_PUBLIC_API_FEEDBACK_URL
					: config.headers.isJavaList
					? process.env.NEXT_PUBLIC_API_JAVA_PROFILE_LIST
					: config.headers.isYear
					? process.env.NEXT_PUBLIC_API_YEAR_URL
					: config.headers.isFile
					? process.env.NEXT_PUBLIC_API_FILE_URL
					: config.headers.isTest
					? process.env.NEXT_PUBLIC_API_TEST_URL
					: config.headers.isConsult
					? process.env.NEXT_PUBLIC_API_FIREBASE_CONSULT
					: config.headers.isAes
					? process.env.NEXT_PUBLIC_V1_API
					: null

				delete config.headers?.isPhp
				delete config.headers?.isJava
				delete config.headers?.isCancel
				delete config.headers?.isB2b
				delete config.headers?.isArticle
				delete config.headers?.path
				delete config.headers?.isAuthRequired
				delete config.headers?.isYear
				delete config.headers?.isFile
				delete config.headers?.isTest
				delete config.headers?.isConsult
				return config
			},
			function(error) {
				return Promise.reject(error)
			}
		)

		// Add a response interceptor
		// axios.interceptors.response.use(
		// 	function (response) {
		// 		return response
		// 	},
		// 	function (error) {
		// 		const router = useRouter()
		// 		//catches if the session ended!
		// 		if (!axios.isCancel(error) && (_.get(error, 'response.status', '') === 401 || _.get(error, 'response.status', '') === 403)) {
		// 			if (_.get(error, 'response.data.more_info.is_access_denied')) {
		// 				//access denied error
		// 				window.location = '/403'
		// 				window.alert('Access Denied')
		// 			} else {
		// 				//session timeout error
		// 				secureLocalStorage.clear()
		// 				router.push('/')
		// 			}
		// 		}
		// 		return Promise.reject(error)
		// 	}
		// )
		axios.interceptors.response.use(
			function(response) {
				console.log('response.headers', response)
				return response
			},
			function(error) {
				if (error?.response?.status === 401) {
					window.location.href = '/marketplace'
					secureLocalStorage.clear()
					console.log(error)
				} else {
					return Promise.reject(error)
				}
			}
		)
	},
}
