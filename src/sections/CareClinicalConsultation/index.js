import {makeStyles} from '@material-ui/core/styles'
import Image from 'next/image'

import Clinicalcard from '../../components/ClinicalConsultation'
const useStyles = makeStyles(theme => ({
	clinicalconsultion: {
		paddingInline: 66,
		display: 'flex',
		justifyContent: 'flex-start',
		[theme.breakpoints.down('xs')]: {
			paddingInline: 0,
		},
		[theme.breakpoints.up('sm')]: {
			paddingInline: 66,
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: 16,
		},
	},
	clinicalconst: {
		flex: 2,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			flex: 1,
		},
	},
	clinicalcard: {
		flex: 1,

		[theme.breakpoints.down('xs')]: {
			marginBlock: 0,
			marginInlineEnd: 0,
			paddingInline: 12,
			paddingBlock: 12,
		},
		[theme.breakpoints.up('sm')]: {
			marginBlock: 0,
			marginInlineEnd: 0,
			paddingBlock: 12,
			// marginInlineStart: 124,
		},
		[theme.breakpoints.up('md')]: {
			marginBlock: 4,
			marginInlineEnd: -12,
			marginInlineStart: 33,
		},
	},
}))
function CareClinicalConsultation() {
	const classes = useStyles()
	return (
		<div className={classes.clinicalconsultion}>
			<div className={classes.clinicalconst}>
				<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/handpic1.png' width={700} height={467} alt='Clinical hand photo' />
			</div>
			<div className={classes.clinicalcard}>
				<Clinicalcard />
			</div>
		</div>
	)
}
export default CareClinicalConsultation
