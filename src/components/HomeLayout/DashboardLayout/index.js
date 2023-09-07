import React from 'react'
import _ from 'lodash'
import {FadeLoader} from 'react-spinners'
import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
// import MobileSearch1 from '../../Search/MobileSearch1'
// import useContextApi from '../../../../lib/Utils/hooks/useContextApi'
import Header from '../../Header'
import SideNavbar from '../../SideNavbar'

const useStyles = makeStyles(theme => ({
	loader: {
		marginTop: '40vh',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		height: '50vh',
		'& .MuiTypography-h5': {
			display: 'flex',
			alignItems: 'center',
			paddingTop: 16,
			color: theme.palette.lyfngo.main,
		},
	},
	// background: {
	// 	backgroundImage: `url(${''})`,
	// 	backgroundPosition: 'right',
	// 	backgroundAttachment: 'fixed',
	// 	backgroundSize: '100% 100%',
	// },
	background: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(8),
		'& .MuiTypography-h1': {
			color: theme.palette.lyfngo.main,
		},
	},
	mobileSearch: {
		position: 'absolute',
		zIndex: 9999,
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100vh',
		display: 'none',
	},
}))

const DashboardLayout = ({children}) => {
	// const {loading, country, enableMobileSearch} = useContextApi()
	const classes = useStyles()
	return (
		<>
			{/* {enableMobileSearch ? (
				<section className={classes.mobileSearch}>
					<MobileSearch1 />
				</section>
			) : ( */}
			<>
				<Header />
				<SideNavbar />
				{children}
			</>
			{/* )} */}
		</>
	)
}

export default DashboardLayout
