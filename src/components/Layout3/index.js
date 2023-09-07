import {useState, useEffect, useCallback} from 'react'
import Header from '../Header'
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
			<Header />
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
						display={'none'}
						CareText={''}
						FitnessText={''}
						MindText={''}
						SportsText={''}
						SpaText={''}
						CareLink={''}
						FitnessLink={''}
						MindLink={''}
						SportsLink={''}
						SpaLink={''}
						CareIcon={care?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/care.svg'}
						FitnessIcon={fitness?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/fitness.svg'}
						MindIcon={mind?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg'}
						SportsIcon={sports?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg'}
						SpaIcon={spa?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg'}
						Care={'/https://meet.google.com/yih-nouk-ydsimages/icons/care.svg'}
						Fitness={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/fitness.svg'}
						Mind={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg'}
						Sports={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg'}
						Spa={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg'}
						ShoppingCart={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/stpre.svg'}
						Live={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/Icon material-live-tv.svg'}
						Heading1={care?.b2cMenuName || 'Care'}
						Heading2={fitness?.b2cMenuName || 'Fitness'}
						Heading3={mind?.b2cMenuName || 'Mind'}
						Heading4={sports?.b2cMenuName || 'Sports'}
						Heading5={spa?.b2cMenuName || 'Spa & Wellness'}
						Heading6={'Shopping Cart'}
						Heading7={'Live'}
						doctors={'/care'}
						nurse={'/'}
						dietician={'/'}
						physiotherapy={'/'}
						consult={'/'}
						lab={'/'}
						store={'/'}
					/>
					{children}
				</>
			)}
		</>
	)
}

export default Layout
