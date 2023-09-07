import {useContext} from 'react'
import ConsultContextApi from '../contexts/ConsultContextApi'

const useConsultContextApi = () => useContext(ConsultContextApi)

export default useConsultContextApi
