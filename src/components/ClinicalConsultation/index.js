import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Clinicaldata from '../../model/ClinicalConsultation/data'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
import Appstore from '../../../publichttps://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/appstore.png'
import Playstore from '../../../publichttps://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/playstore.png'
const useStyles = makeStyles(theme => ({
	clinicalcard: {
		background: 'transparent linear-gradient(231deg, #7047EAE6 0%, #7047EAB3 100%) 0% 0% no-repeat padding-box',
		borderRadius: 20,
		opacity: 1,
		backdropFilter: 'blur(7px)',
		padding: 20,
		[theme.breakpoints.up('sm')]: {
			paddingInline: 14,
			paddingBlock: 12,
			marginInlineStart: 25,
			marginInlineEnd: 20,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 12,
			paddingInline: 14,
			marginInlineEnd: 40,
			marginInlineStart: 25,
		},
		[theme.breakpoints.up('lg')]: {
			paddingBlock: 22,
			paddingInline: 22,
			marginInlineEnd: 106,
			marginInlineStart: 25,
		},
	},
	spacing: {
		[theme.breakpoints.up('xs')]: {
			paddingInline: 8,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 8,
			paddingBlock: 4,
		},
		[theme.breakpoints.up('md')]: {
			paddingInline: 8,
			paddingBlock: 4,
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: 12,
			paddingBlock: 8,
		},
	},
	clinicalheading: {
		fontSize: theme.typography.h4.fontSize,
		color: theme.palette.section.light,
		paddingBottom: 0,
		[theme.breakpoints.down('xs')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.typography.h4.fontSize,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 18,
			paddingBlockEnd: 8,
		},
	},
	clinicallist: {
		color: theme.palette.section.light,
		paddingBottom: 12,
		fontSize: theme.typography.subtitle1.fontSize,
		fontFamily: theme.typography.h3.fontFamily,
		fontStyle: theme.typography.h4.fontStyle,
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
			paddingBottom: 4,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.typography.subtitle1.fontSize,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlockEnd: 4,
			fontSize: 16,
		},
	},
	appstore: {
		'& .MuiButton-text': {
			paddingBlock: 4,
			paddingInline: 4,
		},

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
		},
	},
}))
export default function ClincalConsultation() {
	const classes = useStyles()
	return (
		<div className={classes.clinicalcard}>
			<section className={classes.spacing}>
				{Clinicaldata.map(clinicaldatas => (
					<div className={classes.clinial} key={clinicaldatas.id}>
						<Typography variant='h5' className={classes.clinicalheading}>
							{clinicaldatas.heading}
						</Typography>
						<Typography variant='h6' className={classes.clinicallist}>
							<li>{clinicaldatas.list}</li>
						</Typography>
					</div>
				))}
				<Typography variant='h6' className={classes.clinicallist}>
					Download Now at:
				</Typography>
				<div className={classes.appstore}>
					<Button>
						<Image src={Appstore} alt='app store' width={130} height={40} />
					</Button>
					<Button>
						<Image src={Playstore} alt='app store' width={130} height={40} />
					</Button>
				</div>
			</section>
		</div>
	)
}
