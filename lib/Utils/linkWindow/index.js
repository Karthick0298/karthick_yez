import {FLASH_ENDPOINTS} from '../../../src/constants'
import {
	SOCIAL_MEDIA_TWITTER,
	SOCIAL_MEDIA_INSTAGRAM,
	SOCIAL_MEDIA_YOUTUBE,
	SOCIAL_MEDIA_FACEBOOK,
	SOCIAL_MEDIA_LINKED_IN,
} from '../../../src/constants'

export function flashLink() {
	return `${window.open(FLASH_ENDPOINTS.FLASH_LINK)}`
}

export function flashRegister() {
	const register = '/register'
	return `${window.open(FLASH_ENDPOINTS.FLASH_LINK + register)}`
}
export function getTwitter() {
	return `${window.open(SOCIAL_MEDIA_TWITTER.TWITTER_LINK)}`
}
export function getInstagram() {
	return `${window.open(SOCIAL_MEDIA_INSTAGRAM.INSTAGRAM_LINK)}`
}
export function getToutube() {
	return `${window.open(SOCIAL_MEDIA_YOUTUBE.YOUTUBE_LINK)}`
}
export function getFacebook() {
	return `${window.open(SOCIAL_MEDIA_FACEBOOK.FACEBOOK_LINK)}`
}
export function getLinkedIn() {
	return `${window.open(SOCIAL_MEDIA_LINKED_IN.LINKED_IN_LINK)}`
}
