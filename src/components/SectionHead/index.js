import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'next/image'
import Play from '../../components/ButtonCom/PlayButton'
import Store from '../../components/ButtonCom/StoreButton'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			paddingBlock: 26,
			paddingInline: 10,
			flexDirection: 'column-reverse !important',
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 26,
			paddingInlineStart: 100,
			paddingInlineEnd: 30,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 26,
			paddingInline: 100,
		},
	},

	card: {
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
		position: 'relative',
		background: 'transparent linear-gradient(131deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
		border: '2px solid #FFFFFF',
		borderRadius: 15,
		opacity: 1,
		overflow: 'hidden',
		backdropFilter: 'blur(6px)',
		'-webkit-backdrop-filter': 'blur(6px)',
		[theme.breakpoints.down('sm')]: {
			padding: 18,
		},
		[theme.breakpoints.up('sm')]: {
			minWidth: '60%',
		},
		[theme.breakpoints.up('md')]: {
			minWidth: '40%',
		},
	},

	backgroundRedBlurred: {
		width: 155,
		height: 155,
		background: '#FF2327',
		borderRadius: '4px 24px 117px 63px',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
		opacity: 0.1,
		boxShadow: '1px 1px 26px 50px #FF2327',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},

	headSection: {
		'& .MuiTypography-h3': {
			textAlign: 'left',
			fontSize: 28,
			fontWeight: 400,
			color: theme.palette.paragraph.main,

			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
			},

			'& span': {
				fontWeight: '500',
				color: '#E22C24',
				paddingInline: '4px',
			},
		},

		'& .MuiTypography-h5': {
			maxWidth: 350,
			paddingBlock: 6,
			color: theme.palette.paragraph.main,
			fontWeight: 600,
			fontSize: 20,
			fontFamily: 'Source Sans Pro',
			[theme.breakpoints.down('sm')]: {
				fontSize: 16,
			},
		},
	},

	listContainer: {
		paddingInline: 4,
	},
	listItem: {
		display: 'flex',
		gap: 12,
		paddingBlock: 4,
		alignItems: 'baseline',
		[theme.breakpoints.down('sm')]: {
			paddingBlock: 2,
		},

		'& .MuiTypography-h6': {
			color: theme.palette.paragraph.main,
			fontSize: 17,
			fontFamily: 'Source Sans Pro',
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
		},
	},

	sideBlockImage: {},

	downloadButtonContainer: {
		paddingBlockStart: 10,
		display: 'flex',
		gap: 18,
	},

	downloadText: {
		color: '#475677',
		fontWeight: 600,
		fontFamily: 'Source Sans Pro',
		fontSize: 20,
		paddingInline: 4,
		paddingBlockStart: 12,
		[theme.breakpoints.down('sm')]: {
			fontSize: 17,
		},
	},
}))
export default function SectionHead(props) {
	const {title, Subhead, listData, sideBlockImg, imgPositionLeft} = props
	const classes = useStyles()

	return (
		<div className={classes.root} style={{flexDirection: imgPositionLeft ? 'row-reverse' : 'row'}}>
			<div className={classes.card}>
				<div>
					<div className={classes.headSection}>
						<Typography variant='h3'>
							<span>LFYnGO </span>
							{title}
						</Typography>
						<Typography variant='h5'>{Subhead}</Typography>
					</div>

					<div className={classes.listContainer}>
						{listData.map(listItem => (
							<div key={listItem.id} className={classes.listItem}>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Hospital-care/select.svg' width={10} height={10} />
								<Typography variant='h6'>{listItem.content}</Typography>
							</div>
						))}
					</div>

					<div className={classes.backgroundRedBlurred}></div>

					<Typography variant='h5' className={classes.downloadText}>
						Download Now at:
					</Typography>

					<div className={classes.downloadButtonContainer}>
						<Store />
						<Play />
					</div>
				</div>
			</div>

			<div className={classes.sideBlockImage}>
				<Image src={sideBlockImg} width={585} height={480} priority />
			</div>
		</div>
	)
}
