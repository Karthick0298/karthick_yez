import {makeStyles, Typography} from '@material-ui/core'
import {Avatar} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
	root: {
		marginInline: 100,
		marginBlock: 36,

		display: 'flex',
		gap: 28,
		flexWrap: 'wrap',
		justifyContent: 'space-between',

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-around',
			marginInline: 16,
			gap: 16,
		},
	},
	card: {
		background: 'transparent linear-gradient(121deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		borderRadius: 15,
		opacity: 1,
		backdropFilter: 'blur(6px)',
		alignItems: 'center',
		paddingBlock: 28,
		paddingInline: 20,

		cursor: 'pointer',
		'& .MuiAvatar-root': {
			width: 82,
			height: 82,
		},
	},
	profilepart: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 16,
	},
	category: {
		fontWeight: theme.typography.h2.fontWeight,
		color: theme.palette.paragraph.main,
	},
	trainerDetail: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBlockStart: 12,
		gap: 4,
	},
	detail: {
		color: theme.palette.paragraph.main,
		fontWeight: 'normal',
		fontSize: 12,
	},
}))
export default function TrainersCategoryCardContainer({cardData}) {
	const classes = useStyle()
	return (
		<div className={classes.root}>
			{cardData.map(trainer => (
				<div className={classes.card} key={trainer.id}>
					<div className={classes.profilepart}>
						<Avatar alt='avatar photo' src={trainer.image} />
						<Typography variant='h5' className={classes.category}>
							{trainer.category}
						</Typography>
					</div>
					<div className={classes.trainerDetail}>
						<Typography variant='h5' className={classes.detail}>
							{trainer.experience}
						</Typography>
						<Typography variant='h5' className={classes.detail}>
							{trainer.location}
						</Typography>
					</div>
				</div>
			))}
		</div>
	)
}
