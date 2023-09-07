import {makeStyles, Typography, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import React, {useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Question from '../../../model/FaqQuestions/data'
const useStyles = makeStyles(theme => ({
	priorityPosition: {
		// paddingInline: 100,

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
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			padding: 12,
		},
		'& .MuiTypography-h2': {
			color: '#7047ea',
			fontSize: 26,
			textTransform: 'uppercase',
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h2.fontSize,
				fontSize: 22,
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
}))

export default function Index() {
	const classes = useStyles()
	const [expandedPanel, setExpandedPanel] = useState(false)

	const handleAccordionChange = panel => (event, isExpanded) => {
		setExpandedPanel(isExpanded ? panel : false)
	}
	return (
		<div className={classes.priorityPosition}>
			<div className={classes.priority}>
				<Typography variant='h2'>FAQ</Typography>
			</div>

			<div className={classes.priorityImage}>
				{Question.map(({heading, content1, content2, panel}) => (
					<Accordion expanded={expandedPanel === panel} onChange={handleAccordionChange(panel)}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant='subtitle1'>{heading}</Typography>
						</AccordionSummary>

						<AccordionDetails>
							<Typography variant='h5'>{content1}</Typography>
							<Typography variant='h5'>{content2}</Typography>
						</AccordionDetails>
						<div className={classes.readallquestions}>
							<Typography variant='h5'>Read all questions </Typography>
						</div>
					</Accordion>
				))}
			</div>
		</div>
	)
}
