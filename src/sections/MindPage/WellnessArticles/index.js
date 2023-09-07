import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import Image from 'next/image'
import MindWellnessArticlesCardDetails from '../../../model/MindWellnessArticlesCardDetails/data'
import React, {useState, useEffect} from 'react'
import MindArticleApi from '../../../../Service/LandingPage/Mind/MindArticle'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	Positionroot: {
		display: 'grid',
		gridTemplateColumns: '.6fr 1fr',
		paddingBlock: 36,
		gap: 12,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	PositionMainroot: {
		marginInline: 124,

		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 0,
			paddingBlock: 0,
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h2': {
			color: theme.palette.yoga.main,
			fontSize: 28,
			fontWeight: 500,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	gfg: {
		position: 'relative',
		display: 'grid',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	gfg1: {
		display: 'grid',
		position: 'relative',
	},
	firsttxt: {
		position: 'absolute',
		top: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: '18px 18px 0px 0px',
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 16,
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 14,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	secondtxt: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: '0px 0px 18px 18px',
		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 16,
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 16,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},
	secondtxt2: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		background: '#00000032 0% 0% no-repeat padding-box',
		boxShadow: '0px 10px 34px #0000001A',
		borderRadius: '0px 0px 22px 22px',

		'& .MuiTypography-h5': {
			color: '#fff',
			fontSize: 16,
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			color: '#fff',
			fontSize: 14,
			textAlign: 'left',
			fonyStyle: 'none',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			padding: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
		},
	},
	cardsmallPosion: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gap: 24,

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			flexShrink: 4,
		},
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'center',
			flexShrink: 3,
		},
	},
	imageBorder: {
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		width: 328,
		height: 290,
	},
	findMorebtn: {
		background: theme.palette.yoga.buttonBackgroundImage,
	},
}))

export default function WellnessArticles() {
	const classes = useStyles()
	const {loading, setLoading} = useContextApi()
	const [article, setArticle] = useState([])
	const [singleImg, setSingleImg] = useState([])
	const exceptIndex = 0
	const filteredItems = article.filter((value, index) => exceptIndex !== index).slice(0, 6)

	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setArticle(res?.data?.data)
				setSingleImg(res?.data?.data?.[0])
				setLoading(false)
			} else {
				setArticle([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		MindArticleApi.YogaArticle().then(onSuccess, onFailure)
	}, [])
	return (
		<div className={classes.PositionMainroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2' className={classes.AppoinmentFont}>
						Health & Wellness Articles
					</Typography>
				</div>
				<div className={classes.rightPosition}>
					<Button findMorebtn={classes.findMorebtn}>View Health feed</Button>
				</div>
			</div>
			<div className={classes.Positionroot}>
				<div className={classes.gfg}>
					<Image
						src={singleImg?.thumbnailImageUrl ? singleImg?.thumbnailImageUrl : 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/Mind/art01.png'}
						quality={100}
						alt=''
						width={520}
						height={400}
						className={classes.imageBorder}></Image>
					<div className={classes.firsttxt}>
						<Typography variant='h5'>{singleImg?.title}</Typography>
					</div>
					<div className={classes.secondtxt}>{/* <Typography variant='h4'>{singleImg?.body}</Typography> */}</div>
				</div>
				<div className={classes.cardsmallPosion}>
					{filteredItems?.map(item => (
						<div key={item?.tentArticlesUuid} className={classes.gfg1}>
							<Image src={item?.thumbnailImageUrl} alt='articles' width={220} height={220}></Image>

							<div className={classes.secondtxt2}>
								<Typography variant='h4'>{item?.title}</Typography>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
