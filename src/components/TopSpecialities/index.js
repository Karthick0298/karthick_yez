import React from 'react'
import {makeStyles, Breadcrumbs, Paper, Typography, MenuItem, MenuList, useTheme, useMediaQuery} from '@material-ui/core'
import {NavigateNext, Cancel, ArrowDropDown, ArrowForward} from '@material-ui/icons'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	root: {
		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%)',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			padding: 10,
		},
		[theme.breakpoints.up('sm')]: {
			padding: 20,
		},

		'& .MuiTypography-h3': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
		},
	},
	specialityList: {
		'& a': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
}))

const sampleSpecialityData = [
	{
		id: 1,
		link: '',
		speciality: 'Thyroid Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 2,
		link: '',
		speciality: 'Cardiac Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 3,
		link: '',
		speciality: 'LASIC Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 4,
		link: '',
		speciality: 'Facelift Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 5,
		link: '',
		speciality: 'Rhinoplasty Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 6,
		link: '',
		speciality: 'Liposuction Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 11,
		link: '',
		speciality: 'Thyroid Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 12,
		link: '',
		speciality: 'Cardiac Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 13,
		link: '',
		speciality: 'LASIC Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 14,
		link: '',
		speciality: 'Facelift Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 15,
		link: '',
		speciality: 'Rhinoplasty Surgery at anna nagar',
		location: 'Chennai',
	},
	{
		id: 16,
		link: '',
		speciality: 'Liposuction Surgery  Liposuction Surgery at anna nagar',
		location: 'Chennai',
	},
]

const TopSpecialities = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h3'>Top Speciality In {'Chennai'}</Typography>
			<div className={classes.specialityList}>
				{sampleSpecialityData?.map(data => (
					<div key={data?.id}>
						<Link href={data?.link}>
							<a>
								{data?.speciality}, {data?.location}
							</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopSpecialities
