/* eslint-disable react/jsx-key */
import {makeStyles, Typography} from '@material-ui/core'
import React, {useState} from 'react'
import Button from '../../../components/GradientButton'
import Image from 'next/image'
import BmiCalculator from '../../../model/BmiFontDetails/data'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles(theme => ({
	Positionroot: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.png'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: '100% 100%',

		[theme.breakpoints.down('sm')]: {
			paddingBlockStart: 26,
			paddingInline: 10,
			paddingBlockEnd: 34,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 40,
			paddingBlockEnd: 40,
			paddingInline: 100,
		},
	},
	doctorPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingInline: 4,
			alignItems: 'center',
			gap: 10,
		},
	},
	leftSidePosition: {
		'& .MuiTypography-h2': {
			color: '#E4208A',
			fontSize: 28,
			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
	},

	rightSidePosition: {
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			order: -1,
		},
	},
	BmiPosition: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 44,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			paddingTop: 16,
		},
	},
	BmiCalculatorLeft: {
		flex: 2,
	},
	BmicalculatorMaincard: {
		background: 'transparent linear-gradient( #F0F0F032 0%, #FAFAFA 0%) 0% 0% no-repeat padding-box',
		padding: 12,
		borderRadius: 12,
	},
	BmicalculatorSubcard: {
		display: 'flex',
		borderRadius: 20,
		background: 'transparent linear-gradient(289deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box;',
		backdropFilter: 'blur(30px)',
		boxShadow: '0px 10px 34px #7C9CAE80',
	},
	BmicalculatorPosition: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-h2': {
			color: '#E4208A',
			fontSize: 22,
			[theme.breakpoints.down('xs')]: {
				fontSize: 18,
			},
		},
		'& .MuiTypography-h6': {
			fontSize: 20,
			color: theme.palette.paragraph.main,
			fontFamily: '"Source Sans Pro", sans-serif',
			[theme.breakpoints.down('xs')]: {
				fontSize: 14,
			},
		},
	},
	BmiCalculatorRight: {
		flex: 3,
	},
	BmishoesPosition: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	BmicalculatorMainRightcard: {
		display: 'flex',
	},
	BmicalculatorSubRightcard: {
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
		padding: 10,
		borderRadius: 8,
		'&:hover': {
			background: 'transparent linear-gradient(289deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box;',
			backdropFilter: 'blur(30px)',
			boxShadow: '0px 10px 34px #7C9CAE80',
		},
		'& .MuiTypography-h2': {
			color: '#E4208A',
			fontSize: 24,
			[theme.breakpoints.down('xs')]: {
				fontSize: 20,
			},
		},
	},
	numberMainPosition: {
		display: 'flex',
		gap: 22,
		padding: 24,
		paddingBottom: 48,
		[theme.breakpoints.down('xs')]: {
			padding: 0,
		},
		[theme.breakpoints.up('md')]: {
			padding: 24,
		},
	},
	textMainPosition: {
		color: '#ffff',
		boxShadow: '0px 3px 6px #0000001a',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		padding: 20,
		height: 30,
		'& .MuiTypography-h5': {
			color: '#ffff',
			fontSize: 18,
			fontWeight: 500,
		},
	},
	viewtoolsSec: {
		display: 'flex',
		justifyContent: 'end',
		alignItems: 'center',
		paddingBlock: 12,
		gap: 4,
		color: theme.palette.spa.main,
		fontFamily: theme.typography.body2.fontFamily,
	},
	viewtools: {
		textDecoration: 'none',
		cursor: 'pointer',
	},
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
}))

export default function Index() {
	const classes = useStyles()
	const [isShown, setIsShown] = useState(true)
	const [idval, setIdVal] = useState(1)
	return (
		<div className={classes.Positionroot}>
			<div className={classes.doctorPosition}>
				<div className={classes.leftSidePosition}>
					<Typography variant='h2'>Health Tools</Typography>
				</div>

				<Button findMorebtn={classes.findMorebtn}>All Tools</Button>
			</div>
			<div className={classes.BmiPosition}>
				<div className={classes.BmiCalculatorLeft}>
					<div className={classes.BmicalculatorMaincard}>
						{idval && (
							<>
								{BmiCalculator.filter(headingBmi => headingBmi.id == idval).map(({heading, id}) => (
									<div key={id} className={classes.BmicalculatorSubcard}>
										<Image
											src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/bmi_calculator.svg'
											alt='bmicalculator'
											width={100}
											height={100}></Image>
										{isShown && (
											<div className={classes.BmicalculatorPosition}>
												<Typography variant='h2'>{heading}</Typography>
											</div>
										)}
									</div>
								))}
							</>
						)}
						<div className={classes.BmishoesPosition}>
							<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/bmi_shoes.png' alt='bmishoes' width={300} height={300}></Image>
						</div>
					</div>
					<div className={classes.viewtoolsSec}>
						<a className={classes.viewtools}>View Tools</a>
						<ArrowForwardIcon />
					</div>
				</div>
				<div className={classes.BmiCalculatorRight}>
					{BmiCalculator.map(({id, heading, text, color}) => (
						<div
							key={id}
							className={classes.numberMainPosition}
							onMouseEnter={() => {
								setIdVal(id)
								setIsShown(true)
							}}
							onMouseLeave={() => setIsShown(true)}>
							<div className={classes.textMainPosition} style={{background: color}}>
								<Typography variant='h5'>{id}</Typography>
							</div>
							<div className={classes.BmicalculatorSubRightcard}>
								<Typography variant='h2'>{heading}</Typography>

								<div className={classes.BmicalculatorPosition}>
									<Typography variant='h6'>{text}</Typography>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
