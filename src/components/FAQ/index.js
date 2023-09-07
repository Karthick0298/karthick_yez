import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
	root: {
		// width: '100%',
		border: '1px solid blue',
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
			borderLeft: '1px solid #475677',
			paddingLeft: 10,
		},
		'& .MuiAccordion-rounded': {
			borderRadius: 8,
		},
		'& .MuiAccordionSummary-root.Mui-expanded': {
			borderBottom: '0.5px solid #475677',
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

	heading: {
		fontSize: 16,
	},
}))

export default function FAQ() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography variant='subtitle1'>Heading</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='h5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography variant='subtitle1'>Heading</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='h5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
