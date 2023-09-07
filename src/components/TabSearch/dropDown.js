import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import dropdownData from '../../model/TabSearchDropdown/data'

const useStyles = makeStyles(theme => ({
	rootToggle: {
		display: 'none',
	},
	root: {
		background: 'transparent linear-gradient(123deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		opacity: 1,
		transform: 'translate(94px,10px)',
		backdropFilter: 'blur(30px)',
		'& -webkit-backdrop-filter': 'blur(30px)',
		paddingBlock: 16,
		paddingInline: 20,
		borderRadius: 35,
		maxWidth: 584,
		[theme.breakpoints.down('md')]: {
			transform: 'translate(0px,0px)',
			margin: 'auto',
			marginBlockStart: 12,
		},
		[theme.breakpoints.down('756')]: {
			marginBlockStart: 12,
			marginInlineStart: 100,
		},
		[theme.breakpoints.down('690')]: {
			marginBlockStart: 12,
			marginInlineStart: 100,
			maxWidth: 546,
		},
		[theme.breakpoints.down('652')]: {
			paddingInline: 12,
			maxWidth: 496,
		},
		[theme.breakpoints.down('600')]: {
			margin: 'auto',
			marginBlockStart: 12,
		},
	},
	labelSection: {
		display: 'flex',
		alignItems: 'center',
	},
	labelWrapper: {
		background: 'transparent linear-gradient(259deg, #7047EA 0%, #9847EA 100%) 0% 0% no-repeat padding-box',
		borderRadius: 16,
		marginInlineEnd: 20,
	},
	label1: {
		paddingBlock: 4,
		paddingInline: 8,
		color: '#ffffff',
	},
	label2: {
		color: '#475677',
		opacity: 0.5,
	},
	specialities: {
		display: 'flex',
	},
	table: {
		display: 'flex',
		flexDirection: 'column',
		paddingInlineEnd: 16,
		[theme.breakpoints.down('690')]: {
			paddingInlineEnd: 14,
		},
	},
	heading: {
		color: '#333333',
		fontWeight: 600,
		marginBlockStart: 8,
		minHeight: 52,
	},
	subText: {
		color: '#333333',
		fontWeight: 300,
		paddingBlock: 4,
		cursor: 'pointer',
	},
}))

const DropDown = props => {
	const classes = useStyles()
	const {toggleState} = props
	return (
		<>
			<section className={toggleState ? classes.root : classes.rootToggle}>
				<div className={classes.labelSection}>
					<section className={classes.labelWrapper}>
						<Typography variant='h5' className={classes.label1}>
							Specialities
						</Typography>
					</section>
					<Typography variant='h5' className={classes.label2}>
						Health concerns
					</Typography>
				</div>
				<div className={classes.specialities}>
					{dropdownData?.inputs?.map(val => (
						<section className={classes.table}>
							<Typography variant='h5' className={classes.heading}>
								{val?.heading}
							</Typography>
							{val?.content?.map(data => (
								<Typography variant='h5' className={classes.subText}>
									{data?.text}
								</Typography>
							))}
						</section>
					))}
				</div>
			</section>
		</>
	)
}

export default DropDown
