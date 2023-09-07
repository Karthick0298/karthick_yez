import {useState, useEffect, useCallback} from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import _ from 'lodash'
import {FadeLoader} from 'react-spinners'
import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

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
			[theme.breakpoints.down('xs')]: {
				fontSize: 24,
			},
		},
	},
}))

const Layout = ({children}) => {
	const {loading, setLoading} = useContextApi()
	// const [loading, setLoading] = useState(false)
	const classes = useStyles()

	return (
		<>
			{_.isEmpty(menuBarList) ? (
				<>
					{loading ? (
						<>
							<div className={classes.loader}>
								<FadeLoader size={80} color={'#e22c24'} loading={loading} />
								<Typography variant='h5'>Loading...</Typography>
							</div>
						</>
					) : (
						<div className={classes.background}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/comingSoon.png' width={400} height={80} />
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noConnection.png' width={1150} height={650} />
						</div>
					)}
				</>
			) : (
				<>
					<Sidebar
						display={''}
						CareText={care?.b2cMenuName || 'Care'}
						FitnessText={fitness?.b2cMenuName || 'Fitness'}
						MindText={mind?.b2cMenuName || 'Mind'}
						SportsText={sports?.b2cMenuName || 'Sports'}
						SpaText={spa?.b2cMenuName || 'Spa and Wellness'}
						CareLink={'/care'}
						FitnessLink={'/fitness'}
						MindLink={'/'}
						SportsLink={'/'}
						SpaLink={'/'}
						CareIcon={care?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/care.svg'}
						FitnessIcon={fitness?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/fitness.svg'}
						MindIcon={mind?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg'}
						SportsIcon={sports?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg'}
						SpaIcon={spa?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg'}
						Care={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Icon metro-stethoscope.svg'}
						Fitness={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Nurse.svg'}
						Mind={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Icon metro-lab.svg'}
						Sports={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/package.svg'}
						Spa={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/home-service.svg'}
						ShoppingCart={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/monitor.svg'}
						Live={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/shopping-cart.svg'}
						Heading1={'Doctors'}
						Heading2={'Hospitals'}
						Heading3={'Lab/Scan'}
						Heading4={'Packages'}
						Heading5={'Home Services'}
						Heading6={'Consult'}
						Heading7={'Store'}
						doctors={'/care/submenu/doctors'}
						nurse={'/care/submenu/hospitals'}
						dietician={'/care/submenu/labscan'}
						physiotherapy={'/care/submenu/packages'}
						consult={'/care/submenu/homeservices'}
						lab={'/care/submenu/consult'}
						store={'/care/submenu/store'}
					/>
					{children}
					<Footer backgroundImage={`url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`} />
				</>
			)}
		</>
	)
}

export default Layout
