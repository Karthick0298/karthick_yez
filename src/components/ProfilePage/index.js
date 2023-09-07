import {makeStyles, Typography} from '@material-ui/core'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
	cardlist: {
		display: 'flex',
		border: '0px solid',
		flexDirection: 'column',
		marginInline: 100,
		marginBottom: 12,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
			paddingInline: '0.1rem',
		},
		[theme.breakpoints.up('sm')]: {
			marginInline: 88,
			marginInlineEnd: 0,
		},
	},
	ProfileCard: {
		display: 'flex',
		gap: 60,
		background: 'transparent linear-gradient(106deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #999',
		borderRadius: 10,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		paddingInline: 23,
		paddingBlock: 24,
		marginBlock: 8,
		cursor: 'pointer',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 3,
			paddingBlock: 3,
			gap: 0,
			flexWrap: 'wrap',
		},
		[theme.breakpoints.up('sm')]: {
			gap: 5,
		},
		'&:hover': {
			opacity: 0.5,
			border: '2px solid #FFF',
			background: '#7047EA45',
		},
	},
}))

function Index() {
	const classes = useStyles()
	const router = useRouter()
	return (
		<div className={classes.cardlist}>
			<div className={classes.ProfileCard}>
				<div className={classes.profilesection}>
					<h4>Person Profile list card</h4>
				</div>
			</div>
		</div>
	)
}
export default Index
