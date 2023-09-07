// import Search from '../../../components/Search'
import {makeStyles, Typography} from '@material-ui/core'
import Button from '../../../components/GradientButton'
import GoogleMap from '../../../components/GoogleMap'
// import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ProfileFilter from '../../../components/ProfileFilter'
import {useRouter} from 'next/router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from 'next/link'
// import  Breadcrumbs  from "../../../components/Breadcrumbs";
const useStyles = makeStyles(theme => ({
	Positionroot: {
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg'})`,
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		padding: 8,
	},
	searchroot: {
		paddingBlock: 12,
		marginInline: 100,
		[theme.breakpoints.down('xs')]: {
			marginInline: 0,
		},
	},
	maincontentPosition: {
		display: 'flex',
		alignItems: 'center',
		paddingInlineEnd: 18,
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			paddingBottom: 12,
		},
	},
	textname: {
		marginBlock: 12,
		marginInlineStart: 100,
		[theme.breakpoints.down('xs')]: {
			marginInlineStart: 0,
		},
		'& .MuiTypography-body1': {
			fontFamily: 'Poppins',
			color: theme.palette.primary.contrastText,
		},
	},
	doctorlocation: {
		color: '#7047ea !important',
	},
	textchildname: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		gap: 12,
		'& .MuiButton-label': {
			color: theme.palette.paragraph.main,
			fontWeight: theme.typography.h1.fontWeight,
		},
		'& .MuiButton-contained': {
			background: 'transparent linear-gradient(109deg, #FFFFFFCC 0%, #FFFFFF40 100%) 0% 0% no-repeat padding-box',
			boxShadow: '0px 4px 15px #0000000D',
			border: '1px solid #FFFFFF80',
			borderRadius: 10,
		},
	},
	nearmeposition: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
	},
	flexdivision: {
		flex: 1,
	},
	flexsplitdivision: {
		display: 'flex',
		gap: 12,
	},
	flexsubsivision1: {
		flex: 3,
		marginInlineStart: 100,
		[theme.breakpoints.down('xs')]: {
			marginInlineStart: 0,
		},
	},
	flexsubsivision2: {
		flex: 1,
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	Breadcrumbscs: {
		paddingInline: 100,
		cursor: 'pointer',
	},

	findMorebtn: {
		background: theme.palette.care.buttonBackgroundImage,
	},
}))

const items = [
	{to: '/care', label: 'care'},
	{to: '/care/DoctorProfile', label: 'Doctorlist'},
	{to: '/care/DoctorProfile/MapFilter', label: 'Maplist'},
]
export default function Index() {
	const classes = useStyles()
	const router = useRouter()

	return (
		<div className={classes.Positionroot}>
			{/* <div className={classes.searchroot}>
				<Search />
			</div> */}
			<div className={classes.Breadcrumbscs}>
				<Breadcrumbs separator='›'>
					{items.map(({to, label}) => (
						<Link key={to} href={to}>
							<Typography variant='h5'>{label}</Typography>
						</Link>
					))}
				</Breadcrumbs>
			</div>
			{/* <Breadcrumbs 
           Care={"care"}
           Doctorlist={"Doctorlist"}
           Maplist={"Maplist"}
           /> */}
			<div className={classes.maincontentPosition}>
				<div className={classes.textname}>
					<Typography variant='body1' className={classes.doctorlocation}>
						Best Doctors @ Chennai
					</Typography>
					<div className={classes.nearmeposition}>
						<Typography variant='h5'>172 Results |</Typography>
						<Typography variant='h5'>Find near me</Typography>
					</div>
				</div>

				<div className={classes.textchildname}>
					<Button findMorebtn={classes.findMorebtn}>Filters</Button>
					<Button findMorebtn={classes.findMorebtn}>Sort By</Button>
					{/* <div onClick={() => router.back()}>
            <Button>
              <span style={{ display: "flex" }}>
                <ArrowBackIcon />
              </span>
              View Profile{" "}

            </Button>
          </div> */}
				</div>
			</div>
			<div className={classes.flexsplitdivision}>
				<div className={classes.flexsubsivision1}>
					<GoogleMap />
				</div>
				<div className={classes.flexsubsivision2}>
					<ProfileFilter />
				</div>
			</div>
		</div>
	)
}
