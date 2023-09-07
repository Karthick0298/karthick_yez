import {makeStyles, Typography, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Question from '../../../model/FaqQuestions/data'
import FitnesspageFaq from '../../../components/FitnessPageFaqTabs'
import Button from '../../../components/GradientButton'
import SpaFaqApi from '../../../../Service/LandingPage/Spa/SpaFaq'
import useContextApi from '../../../../lib/Utils/hooks/useContextApi'

const useStyles = makeStyles(theme => ({
	priorityPosition: {
		[theme.breakpoints.down('sm')]: {
			paddingInline: 10,
			gap: 28,
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
	priority: {
		display: 'flex',
		justifyContent: 'space-between',

		'& .MuiTypography-h2': {
			fontWeight: 600,
			color: theme.palette.spa.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h2.sm.fontSize,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.h2.md.fontSize,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: theme.typography.h2.lg.fontSize,
			},
		},
	},
	priorityImage: {
		display: 'grid',
		paddingBlock: 30,
		// paddingInline: 50,
		gap: 16,
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
		},
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns: '1fr',
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: '1fr 1fr',
		},

		'& .MuiPaper-root': {
			background: 'transparent linear-gradient(289deg, #FAFAFA40 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
			boxShadow: '0px 10px 34px #7c9cae80',
		},
		'& .MuiAccordionDetails-root': {
			flexDirection: 'column',
		},
		'& .MuiAccordionSummary-root': {
			flexDirection: 'row-reverse',
			gap: 12,
		},
		'& .MuiAccordionSummary-content': {
			borderLeft: '2px solid #475677',
			paddingLeft: 10,
		},
		'& .MuiAccordion-rounded': {
			borderRadius: 8,
		},
		'& .MuiAccordionSummary-root.Mui-expanded': {
			borderBottom: '1px solid #475677',
			color: 'white',
		},

		'& .MuiAccordion-root:before': {
			backgroundColor: 'transparent',
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontSize: theme.typography.h5.fontSize,
			fontWeight: 500,
			paddingTop: 17,
			paddingBottom: 18,
		},
		'& .MuiTypography-subtitle1': {
			color: '#475677',
			fontSize: theme.typography.subtitle1.fontSize,
			fontWeight: 700,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			'-webkit-box-orient': 'vertical',
		},
	},
	readallquestions: {
		'& .MuiTypography-h5': {
			display: 'flex',
			justifyContent: 'end',
			paddingInlineEnd: 32,
			cursor: 'pointer',
		},
	},
	findMorebtn: {
		background: theme.palette.spa.buttonBackgroundImage,
	},
	leftAccord: {
		display: 'flex',
		flexDirection: 'column',
		gap: 16,
	},
	rightAccord: {
		display: 'flex',
		flexDirection: 'column',
		gap: 16,
	},
}))

export default function Faq() {
	const classes = useStyles()
	const [expandedPanel, setExpandedPanel] = useState(false)
	const {loading, setLoading} = useContextApi()
	const [list, setList] = useState([])

	const handleAccordionChange = panel => (event, isExpanded) => {
		setExpandedPanel(isExpanded ? panel : false)
	}
	useEffect(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				setList(res?.data?.data)
				setLoading(false)
			} else {
				setList([])
			}
		}
		const onFailure = () => {
			console.log('error')
			setLoading(false)
		}
		SpaFaqApi.SpaFaq().then(onSuccess, onFailure)
	}, [])
	return (
		<div className={classes.priorityPosition}>
			<div className={classes.priority}>
				<Typography variant='h2'>FAQ</Typography>
				<Button findMorebtn={classes.findMorebtn}>View All</Button>
			</div>

			<div className={classes.priorityImage}>
				<div className={classes.leftAccord}>
					{list.slice(0, 3)?.map(item => (
						<Accordion expanded={expandedPanel === item?.mastFaqHelpUuid} onChange={handleAccordionChange(item?.mastFaqHelpUuid)}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<>
									{expandedPanel ? (
										<Typography variant='subtitle1' style={{webkitLineClamp: '5'}}>
											{item?.mastFaqHelpQues}
										</Typography>
									) : (
										<Typography variant='subtitle1' style={{webkitLineClamp: '1'}}>
											{item?.mastFaqHelpQues}
										</Typography>
									)}
								</>
							</AccordionSummary>

							<AccordionDetails>
								<Typography variant='h5'>{item?.mastFaqHelpAns}</Typography>
								{/* <Typography variant='h5'>{content2}</Typography> */}
							</AccordionDetails>
							<div className={classes.readallquestions}>
								<Typography variant='h5'>Read all questions </Typography>
							</div>
						</Accordion>
					))}
				</div>
				<div className={classes.rightAccord}>
					{list.slice(4, 7)?.map(item => (
						<Accordion expanded={expandedPanel === item?.mastFaqHelpUuid} onChange={handleAccordionChange(item?.mastFaqHelpUuid)}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<>
									{expandedPanel ? (
										<Typography variant='subtitle1' style={{webkitLineClamp: '5'}}>
											{item?.mastFaqHelpQues}
										</Typography>
									) : (
										<Typography variant='subtitle1' style={{webkitLineClamp: '1'}}>
											{item?.mastFaqHelpQues}
										</Typography>
									)}
								</>
							</AccordionSummary>

							<AccordionDetails>
								<Typography variant='h5'>{item?.mastFaqHelpAns}</Typography>
								{/* <Typography variant='h5'>{content2}</Typography> */}
							</AccordionDetails>
							<div className={classes.readallquestions}>
								<Typography variant='h5'>Read all questions </Typography>
							</div>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	)
}
