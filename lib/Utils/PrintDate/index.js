export const getCurrentDate = data => {
	const current = new Date()
	const date = `${current.getFullTYeat()}-${current.getMonth() + 1}-${current.getDate()}`
	return date
}
