import React, {useState, useEffect} from 'react'
import {List, makeStyles, Typography} from '@material-ui/core'
import NumberBlob from '../../../components/NumberBlob'
// import Ticker from './CountUp'
import LandingPagecountApi from '../../../../Service/HomePage/OurAchievements'
import axios from 'axios'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 100,
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: 100,
		},
	},
	container: {
		paddingBlock: 40,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		'& .MuiTypography-h2': {
			color: theme.palette.spa.main,
			paddingBlock: 14,
			fontSize: 34,
			letterSpacing: 0.2,
			[theme.breakpoints.down('sm')]: {
				fontSize: 24,
			},
		},
		'& .MuiTypography-body1': {
			maxWidth: 750,
			color: '#475677',
			textAlign: 'center',
			padding: 4,
		},
		[theme.breakpoints.down('sm')]: {
			padding: 16,
			'& .MuiTypography-body1': {
				padding: 0,
				fontSize: theme.typography.h5.fontSize,
				paddingBottom: 12,
			},
			'& .MuiTypography-h2': {
				fontSize: theme.typography.body2.fontSize,
				paddingBottom: 12,
			},
		},
	},
	counter: {
		display: 'flex',
		flexDirection: 'row',
		gap: 48,
		padding: 18,
		'& .Mui-Typography-body1': {
			color: theme.palette.paragraph.main,
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: 0,
			gap: 32,
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
	},
	blobSectionOne: {
		display: 'flex',
		alignItems: 'center',
		gap: 48,
		[theme.breakpoints.down('sm')]: {
			gap: 32,
		},
	},
	blobSectionTwo: {
		display: 'flex',
		gap: 48,
		[theme.breakpoints.down('sm')]: {
			gap: 32,
		},
	},
}))

export default function Achievements() {
	const classes = useStyles()
	const [list, setList] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let cancel
		setLoading(true)
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setList(res.data)
				setLoading(false)
			} else {
			}
		}
		const onFailure = err => {
			console.log('Error', err)
			setLoading(false)
		}
		LandingPagecountApi.LandingPageCount({cancelToken: new axios.CancelToken(c => (cancel = c))}).then(onSuccess, onFailure)
		return () => cancel()
	}, [])

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography variant='h2'>Our Achievements</Typography>
				<Typography variant='body1'>
					We are a strong team with great professional and technical support providing services which make our happy customers who made us reach
					heights as one of the top rated apps
				</Typography>
				<div className={classes.counter}>
					<div className={classes.blobSectionOne}>
						<NumberBlob
							end={!_.isEmpty(list) && list?.Doctors}
							suffix='+'
							start={0}
							duration={5}
							blobName={'doctors'}
							backgroundColor={'#2680EB32'}
							textColor={'#2680EB'}
						/>
						<NumberBlob
							end={!_.isEmpty(list) && list?.Users}
							suffix='+'
							start={0}
							duration={5}
							blobName={'Users'}
							backgroundColor={'#00B59232'}
							textColor={'#00B592'}
						/>
					</div>
					<div className={classes.blobSectionTwo}>
						<NumberBlob
							end={!_.isEmpty(list) && list?.Speciality}
							suffix='+'
							start={0}
							duration={5}
							blobName={'Specialities'}
							backgroundColor={'#EF920032'}
							textColor={'#EF9200'}
						/>
						<NumberBlob
							end={!_.isEmpty(list) && list?.Reviews}
							suffix='+'
							start={0}
							duration={5}
							blobName={'Review'}
							backgroundColor={'#E0474E32'}
							textColor={'#E0474E'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
