import Consent from '../CookieConsent'

export default function Layout({children}) {
	return (
		<>
			<div>{children}</div>
			<Consent />
		</>
	)
}
