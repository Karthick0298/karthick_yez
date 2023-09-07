import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <div>{children}</div>}
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

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		'& .MuiAppBar-root': {
			background: 'transparent',
			boxShadow: 'none',
			[theme.breakpoints.up('xs')]: {
				paddingInlineStart: 0,
			},
			[theme.breakpoints.up('sm')]: {
				paddingInlineStart: 60,
			},
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
	},

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
		paddingBlockStart: 10,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
		justifyItems: 'center',
		gap: 14,
	},

	cardRoot: {
		maxWidth: 200,
		borderRadius: 12,
		'& .MuiCardContent-root': {
			padding: 8,
			'& .MuiTypography-h5': {
				color: '#475677',
				fontWeight: 500,
				[theme.breakpoints.up('xs')]: {
					fontSize: 13,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 14,
				},
			},
			'& .MuiTypography-body1': {
				color: '#475677',
				[theme.breakpoints.up('xs')]: {
					fontSize: 13,
				},
				[theme.breakpoints.up('sm')]: {
					fontSize: 14,
				},
			},
		},
		'& .MuiCardActions-root': {
			display: 'flex',
			alignItems: 'flex-start',
			paddingInline: 8,
			paddingBlock: 0,
		},
	},
	multiLineEllipsis: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		'-webkit-line-clamp': 2,
		'-webkit-box-orient': 'vertical',
	},
	cardImage: {
		height: 142,
	},
	likeCommentContainer: {
		display: 'flex',
	},
	like: {
		color: '#475677',
		display: 'flex',

		'& span': {
			marginInlineStart: 4,
			marginInlineEnd: 10,
			display: 'flex',
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 15,
			},
		},
	},
}))

export default function SimpleTabs() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const sampleData = [
		{
			id: 1,
			question: 'The best recreation areas for general immunity recreation areas for general immunity',
			likes: 123,
			comments: 342,
		},
		{
			id: 2,
			question: 'Dmmunity recreat recreation areas for general immunity recreation areas for general immunity',
			likes: 433,
			comments: 598,
		},
		{
			id: 3,
			question: 'Dmmunity recreat recreation areas for general immunity recreation areas for general immunity',
			likes: 124,
			comments: 598,
		},
		{
			id: 4,
			question: 'Dmmunity recreat recreation areas for general immunity recreation areas for general immunity',
			likes: 123,
			comments: 598,
		},
		{
			id: 5,
			question: 'Dmmunity recreat recreation areas for general immunity recreation areas for general immunity',
			likes: 123,
			comments: 598,
		},
	]

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
					<Tab label='Health Article' {...a11yProps(0)} />
					<Tab label='Health Tips' {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<div className={classes.cardContainer}>
					{sampleData.map(data => (
						<Card className={classes.cardRoot} key={data.id}>
							<CardActionArea>
								<CardMedia className={classes.cardImage} image='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/endcustomer.jpg' title='Contemplative Reptile' />
								<CardContent>
									<Typography variant='h5' className={classes.multiLineEllipsis}>
										{data.question}
									</Typography>
									<Typography variant='body1'>November 7, 2018 </Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<div className={classes.likeCommentContainer}>
									<div className={classes.like}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/like.svg' alt='like' width={42} height={42} />
										<span>{data.likes}</span>
									</div>
									<div className={classes.like}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/comment.svg' alt='comment' width={42} height={42} />
										<span>{data.comments}</span>
									</div>
									<div className={classes.like}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/view.svg' alt='views' width={45} height={45} />
										<span>{data.comments}</span>
									</div>
								</div>
								<div>
									<div className={classes.save}>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/save.svg' alt='save' width={42} height={42} />
									</div>
								</div>
							</CardActions>
						</Card>
					))}
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
	)
}

// ;<div className={classes.bottomSection}>
// 	<div className={classes.likeCommentContainer}>
// 		<div className={classes.like}>
// 			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/like.svg' alt='doctor' width={16} height={16} />
// 			<span>225</span>
// 		</div>
// 		<div className={classes.like}>
// 			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/comment.svg' alt='doctor' width={16} height={16} />
// 			<span>225</span>
// 		</div>
// 		<div className={classes.like}>
// 			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/view.svg' alt='doctor' width={16} height={16} />
// 			<span>225</span>
// 		</div>
// 	</div>
// 	<div>
// 		<div className={classes.save}>
// 			<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Tabview/save.svg' alt='doctor' width={35} height={25} />
// 		</div>
// 	</div>
// </div>

// src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/endcustomer.jpg'
