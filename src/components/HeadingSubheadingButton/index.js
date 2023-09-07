import {makeStyles, Typography} from '@material-ui/core'
import Button from '../GradientButton'
import Link from 'next/link'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import useCareContext from '../../../lib/Utils/hooks/useCareContext'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			paddingBlockStart: 26,
			paddingInline: 10,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockStart: 34,
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
			flexDirection: 'row',
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockStart: 40,
			paddingInline: 100,
		},

		'& .MuiTypography-h2': {
			fontWeight: 300,
			'& span': {
				fontWeight: 600,
			},
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

		'& .MuiTypography-h4': {
			color: '#484755',
			fontWeight: 300,
			fontStyle: 'normal',

			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.h4.sm.fontSize,
				paddingBlock: 6,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.h4.md.fontSize,
				paddingBlock: 10,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: theme.typography.h4.lg.fontSize,
				paddingBlock: 10,
			},
		},
	},
	buttonContainer: {
		[theme.breakpoints.down('sm')]: {
			alignSelf: 'flex-end',
		},
	},
}))

export default function HeadingSubheadingButton({heading, boldText, subheading, textColor, btnColor, btnContent}) {
	const classes = useStyles()
	const {loading, setLoading, setSearchKey} = useContextApi()
	const {careProfileSearch, setOffset, setHasMore} = useCareContext()

	// Care Doctor Profile List
	const handleDoctorSearch = () => {
		setOffset(1)
		setHasMore(true)
		let searchKey = 'physiotherapist'
		setSearchKey(searchKey)
		careProfileSearch(searchKey)
	}

	return (
		<div className={classes.root}>
			<div>
				<Typography variant='h2' style={{color: textColor}}>
					{heading}
					<span>{boldText}</span>
				</Typography>
				<Typography variant='h4'>{subheading}</Typography>
			</div>
			<div className={classes.buttonContainer}>
				{/* <Link href={btnLink || ''}> */}
				<Button onClick={handleDoctorSearch} findMorebtn={btnColor}>
					{btnContent}
				</Button>
				{/* </Link> */}
			</div>
		</div>
	)
}
