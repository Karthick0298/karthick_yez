import {makeStyles, Divider, Typography} from '@material-ui/core'
import Image from 'next/image'
import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
	roottt: {
		// border: '1px solid black',
		padding: 10,
	},

	tabContainer: {
		flexGrow: 1,
		backgroundColor: 'transparent',
		'& .MuiAppBar-colorPrimary': {
			backgroundColor: 'transparent',
			padding: 0,
		},
		'& .MuiAppBar-root': {
			backgroundColor: 'transparent',
			padding: 0,
		},
		'& .MuiTab-root': {
			marginRight: 8,

			[theme.breakpoints.down('sm')]: {
				padding: 0,
			},
			[theme.breakpoints.up('sm')]: {
				paddingInline: 10,
				paddingBlock: 12,
			},
		},
		'& .MuiBox-root': {
			background: 'none !important',
		},
		'& .MuiTab-wrapper': {
			color: theme.palette.care.main,
			border: `1px solid ${theme.palette.care.main}`,
			borderRadius: 20,
			[theme.breakpoints.down('sm')]: {
				paddingInline: 6,
			},
		},
		'& .MuiTab-textColorInherit.Mui-selected': {
			color: '#ffffff',
			'& .MuiTab-wrapper': {
				color: '#ffffff',
				background: theme.palette.care.backgroundImage,
			},
		},
		// '& .MuiBox-root': {
		// 	background: 'none !important',
		// },
	},

	//  No Data
	noData: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 220,
		[theme.breakpoints.down('sm')]: {
			height: 160,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontWeight: 500,
			marginBlockStart: 12,

			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
		},
	},
	cardContainer: {
		// border: '1px solid black',
		// padding: 10,
	},
	card: {
		borderRadius: 10,
		maxWidth: 200,
	},
	contentSection: {
		background: '#ffffff',
		padding: 10,
		borderRadius: 10,
	},
	likeCommentCobtainer: {
		display: 'flex',
	},
	bottomSection: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	content: {
		'& .MuiTypography-h5': {
			color: '#475677',
			fontWeight: 500,

			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h6': {
			color: '#475677',

			[theme.breakpoints.down('sm')]: {
				fontSize: 11,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 12,
			},
		},
	},
	imageContainer: {
		width: '100%',
		height: 130,
		backgroundPosition: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	like: {
		display: 'flex',
		alignItems: 'center',
		marginInlineEnd: 8,
		'& span': {
			color: '#475677',
			fontWeight: 500,
			marginInlineStart: 4,

			[theme.breakpoints.down('sm')]: {
				fontSize: 11,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	articleImg: {
		width: '100%',
		minWidth: '100%',
	},
}))

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function HealthFeed() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.roottt}>
			<div className={classes.tabContainer}>
				<AppBar position='static' style={{display: 'flex'}}>
					<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
						<Tab label='Health Article' {...a11yProps(0)} />
						<Tab label='Health Tips' {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<div className={classes.cardContainer}>
						<div className={classes.card}>
							<div className={classes.imageContainer} style={{backgroundImage: `url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/endcustomer.jpg)`}}>
								{/* <Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/endcustomer.jpg' alt='' width={90} height={100} className={classes.articleImg} /> */}
							</div>
							<div className={classes.contentSection}>
								<div className={classes.content}>
									<Typography variant='h5'>The best recreation areas for general immunity</Typography>
									<Typography variant='h6'>Nov 7 2021</Typography>
								</div>
								<div className={classes.bottomSection}>
									<div className={classes.likeCommentCobtainer}>
										<div className={classes.like}>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/like.svg' alt='doctor' width={16} height={16} />
											<span>225</span>
										</div>
										<div className={classes.like}>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/comment.svg' alt='doctor' width={16} height={16} />
											<span>225</span>
										</div>
										<div className={classes.like}>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/view.svg' alt='doctor' width={16} height={16} />
											<span>225</span>
										</div>
									</div>
									<div>
										<div className={classes.save}>
											<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/save.svg' alt='doctor' width={35} height={25} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{true && (
						<div className={classes.noData}>
							<div className={classes.noData}>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noFeedbackData.png' alt='' width={90} height={100} className={classes.noDataImg} />
								<Typography variant='h5'>No Articles yet</Typography>
							</div>
						</div>
					)}
				</TabPanel>
				<TabPanel value={value} index={1}>
					{true && (
						<div className={classes.noData}>
							<div className={classes.noData}>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/noFeedbackData.png' alt='' width={90} height={100} className={classes.noDataImg} />
								<Typography variant='h5'>No Tips yet</Typography>
							</div>
						</div>
					)}
				</TabPanel>
			</div>
		</div>
	)
}
