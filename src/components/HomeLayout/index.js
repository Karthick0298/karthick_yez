import React from 'react'
import _ from 'lodash'
import {FadeLoader} from 'react-spinners'
import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import useAuthApi from '../../../lib/Utils/hooks/UseAuth'
import SideNavbar from '../SideNavbar'
import Footer from '../../components/LandingFooter'

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
}))

const HomeLayout = ({children, navigationQuery}) => {
	const classes = useStyles()

	return (
		<>
			<SideNavbar navigationQuery={navigationQuery} />
			{children}
			<Footer />
		</>
	)
}

export default HomeLayout
