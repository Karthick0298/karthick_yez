import {API_ENDPOINTS} from '../../../src/constants'
import useAuth from '../../Utils/hooks/UseAuth'

export function ProfileUrlDetails(imageUrl) {
	return `data:image/png;base64,${imageUrl}`
}

// export const getImgUrl = uuid => {
// 	const token = secureLocalStorage.getItem('token')
// 	return `${process.env.NEXT_PUBLIC_API_JAVA_PROFILE_LIST}${API_ENDPOINTS.DOWNLOAD_FILE}/${uuid}?token=${token}`
// }

export const getImgUrl = uuid => {
	return `${API_ENDPOINTS.DOWNLOAD_FILE}/${uuid}?token=${encodeURIComponent(secureLocalStorage.getItem('token'))}`
}

export const getProfileImgUrl = (uuid, token) => {
	return `${process.env.NEXT_PUBLIC_API_FILE_URL}/download/${uuid}?token=${encodeURIComponent(token)}&isThumbnail=false`
}
