import React, {createContext, useState, useCallback, useEffect} from 'react'
import _ from 'lodash'
import moment from 'moment'
import {useRouter} from 'next/router'
import SymptomsListApi from '../../../Service/ChatBot/SymptomsList'

const ConsultContextApi = createContext()

export const ConsultContextApiProvider = ({children}) => {
	const router = useRouter()
	const [symptomsLists, setSymptomsList] = useState([])
	//Symptoms List
	useEffect(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setSymptomsList(res?.data?.data)
			} else {
				setSymptomsList([])
			}
		}
		const onFailure = err => {
			console.log('Symptoms list', err)
		}
		SymptomsListApi.SymptomsList().then(onSuccess, onFailure)
	}, [])

	return (
		<ConsultContextApi.Provider
			value={{
				symptomsLists,
			}}>
			{children}
		</ConsultContextApi.Provider>
	)
}

export default ConsultContextApi
