import {makeStyles} from '@material-ui/core/styles'
import MoreCard from '../../../../components/ExploreMoreCard'
import ClinicalCardData from '../../../../model/ClinicalCardData/data'
const useStyles = makeStyles(theme => ({
	mainone: {
		display: 'flex',
		background: 'aliceblue',
		paddingBlock: 45,
		marginBlock: 100,
		marginInline: 100,
		background: 'transparent linear-gradient(102deg, #FAFAFACC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		borderRadius: 10,
		paddingInline: 20,
		[theme.breakpoints.down('xs')]: {
			paddingInline: 20,
			marginBlock: 33,
			marginInline: 32,
			flexDirection: 'column',
		},
		[theme.breakpoints.down('md')]: {
			paddingInline: 20,
			marginBlock: 33,
			marginInline: 32,
			flexDirection: 'column',
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 20,
			marginBlockStart: '-10px',
			marginBlock: 33,
			marginInline: 96,
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
	},
}))
export default function DoctorExploreCard() {
	const classes = useStyles()
	return (
		<div className={classes.mainone}>
			{ClinicalCardData.map(data => (
				<MoreCard image={data.image} heading={data.heading} subheading={data.subheading} />
			))}
		</div>
	)
}
