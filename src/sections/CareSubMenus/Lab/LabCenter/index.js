import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import LabCenter from '../../../../components/CareCardContent'
import Button from '../../../../components/GradientButton'
import AddIcon from '@material-ui/icons/Add'
const useStyles = makeStyles(theme => ({
	main: {
		display: 'flex',
		justifyContent: 'space-between',
		marginInline: 124,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 20,
			marginInline: 2,
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: 6,
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 20,
			display: 'grid',
			gridTemplateColumns: '1fr 1fr ',
			gap: 6,
		},
	},
	buttonAll: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 12,
	},
	headItem: {
		marginInline: 124,
		paddingBlock: 46,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
		[theme.breakpoints.down('md')]: {
			marginInline: 2,
		},
		'& .MuiTypography-h3': {
			fontSize: 28,
			color: theme.palette.care.main,
			fontWeight: 100,
		},
		'& .MuiTypography-h5': {
			fontSize: 18,
			paddingBlockStart: 10,
			color: theme.palette.paragraph.main,
			fontFamily: 'Source Sans Pro',
		},
	},
	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))
export default function Lab() {
	const classes = useStyles()
	return (
		<>
			<div className={classes.headItem}>
				<Typography variant='h3'>
					Top Lab centre for -<span style={{fontWeight: 600}}> Consultations</span>{' '}
				</Typography>
				<Typography variant='h5'>
					Explore scan centres in<span style={{fontWeight: 600}}> Chennai</span>
				</Typography>
			</div>
			<div className={classes.main}>
				<LabCenter head={'Top Lab centre for - Consultations'} subhead={'Explore scan centres in Chennai'} image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/1mg.svg'} product={'1mg Lab'} />
				<LabCenter image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/1mg.svg'} product={'Psychiatry'} />
				<LabCenter image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/1mg.svg'} product={'Pediatric'} />
				<LabCenter image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/1mg.svg'} product={'Preagnancy'} />
				<LabCenter image={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/1mg.svg'} product={'Ayurvedic'} />

				<Button findMorebtn={classes.findMorebtn}>
					<div className={classes.buttonAll}>
						<AddIcon />
						Find more
					</div>
				</Button>
			</div>
		</>
	)
}
