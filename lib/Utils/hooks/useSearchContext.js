import {useContext} from 'react'
import SearchContextApi from '../contexts/SearchContextApi'

const useSearchContext = () => useContext(SearchContextApi)

export default useSearchContext
