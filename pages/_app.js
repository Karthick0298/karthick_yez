import React, {createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {ToastContainer} from 'react-toastify'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme/theme'
import Axios from 'axios'
import NetworkService from '../Service/Network'
import {SWRConfig} from 'swr'
import Script from 'next/script'
import {getCookie} from 'cookies-next'
import GoogleTagManager from '../src/components/GoogleTagManager/index'
import 'swiper/swiper.scss'
import {AuthProvider} from '../lib/Utils/contexts/AuthContext'
import {ContextApiProvider} from '../lib/Utils/contexts/ContextApi'
import secureLocalStorage from 'react-secure-storage'
import Image from 'next/image'
import Loader from '../public/lottieFiles/loading1.json'
import {CareContextProvider} from '../lib/Utils/contexts/CareContextApi'
import {FitnessContextProvider} from '../lib/Utils/contexts/FitnessContextApi'
import {MindMasterContextProvider} from '../lib/Utils/contexts/MindMasterContext'
import {MindTherapistContextProvider} from '../lib/Utils/contexts/MindTherapistContext'
import {SportsContextProvider} from '../lib/Utils/contexts/SportsContextApi'
import {SpaBeauticianContextProvider} from '../lib/Utils/contexts/SpaBeauticianContext'
import {SpaTherapistContextProvider} from '../lib/Utils/contexts/SpaTherapistContext'
import {SearchContextProvider} from '../lib/Utils/contexts/SearchContextApi'
// import Lottie from 'react-lottie'
// import {useRouter} from 'next/router'
import CallNotification from '../src/components/CallNotification'
import './styles.css'

const userId = typeof window !== 'undefined' ? secureLocalStorage.getItem('userId') : null
const token = typeof window !== 'undefined' ? secureLocalStorage.getItem('token') : null
const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null
const appointmentUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('appointmentuuId') : null
const reason = typeof window !== 'undefined' ? secureLocalStorage.getItem('reason') : null
const config = {
	userId,
	token,
	userType,
	appointmentUuid,
	reason,
}
NetworkService.setupInterceptors(config)

const fetcher = async url => {
	try {
		const res = await Axios.get(url)
		return res.data
	} catch (err) {
		throw err.response.data
	}
}

// const defaultOptions = {
// 	loop: true,
// 	autoplay: true,
// 	animationData: Loader,
// 	rendererSettings: {
// 		preserveAspectRatio: 'xMidYMid slice',
// 	},
// }

// function Loading() {
// 	return (
// 		<div className='spinner-wrapper'>
// 			<div className='spinner'>
// 				<Lottie options={defaultOptions} height={200} width={280} />
// 			</div>
// 		</div>
// 	)
// }

export default function MyApp(props) {
	const {Component, pageProps} = props
	const consent = getCookie('localConsent')

	// const router = useRouter(),
	// 	[ready, setReady] = useState(false)

	// const enableReady = async loc => {
	// 	setReady(true)
	// }

	// const disableReady = async loc => {
	// 	setReady(false)
	// }

	// useEffect(() => {
	// 	router.events.on('routeChangeStart', async () => await enableReady('star a'))
	// 	router.events.on('routeChangeComplete', async () => await disableReady('com a'))
	// 	router.events.on('routeChangeError', async () => await disableReady('err a'))

	// 	return () => {
	// 		router.events.off('routeChangeStart', async () => await enableReady('star b'))
	// 		router.events.off('routeChangeComplete', async () => await disableReady('com b'))
	// 		router.events.off('routeChangeError', async () => await disableReady('err b'))
	// 	}
	// }, [router.events])

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Script
				id='gtag'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

				gtag('consent', 'default', {
					'ad_storage': 'denied',
					'analytics_storage': 'denied'
				});

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-TH3VP8P');`,
				}}
			/>
			<Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_INDIA_TRACKING_ID}`} />

			<Script strategy='lazyOnload'>
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_INDIA_TRACKING_ID}', {
page_path: window.location.pathname,
});
`}
			</Script>
			<Script strategy='lazyOnload1' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_SINGAPORE_TRACKING_ID}`} />

			<Script strategy='lazyOnload1'>
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_SINGAPORE_TRACKING_ID}', {
page_path: window.location.pathname,
});
`}

				{/* ///GA NEXT_PUBLIC_INDIA_GA_MEASUREMENT */}
			</Script>
			<Script strategy='lazyOnload2' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_SINGAPORE_GA_MEASUREMENT}`} />

			<Script strategy='lazyOnload2'>
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_SINGAPORE_GA_MEASUREMENT}', {
page_path: window.location.pathname,
});
`}
			</Script>
			<Script strategy='lazyOnload3' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_INDIA_GA_MEASUREMENT}`} />

			<Script strategy='lazyOnload3'>
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_INDIA_GA_MEASUREMENT}', {
page_path: window.location.pathname,
});
`}
			</Script>
			{consent === true && (
				<Script
					id='consupd'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
					}}
				/>
			)}
			<SWRConfig
				value={{
					fetcher,
					dedupingInterval: 8000,
				}}>
				<Head>
					<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<GoogleTagManager>
						<ContextApiProvider>
							<AuthProvider>
								{/* {ready === true ? <Loading /> : */}
								<Component {...pageProps} />
								{/* } */}
								<CallNotification />
							</AuthProvider>
						</ContextApiProvider>
					</GoogleTagManager>
				</ThemeProvider>
			</SWRConfig>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
// value={{ authTokens, setAuthTokens: setTokens }}
