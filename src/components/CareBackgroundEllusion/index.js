import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: 'url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/care-bg.svg)',
		backgroundPosition: 'right',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		overflow: 'auto',
		minHeight: '100vh',
		'@global': {
			'::-webkit-scrollbar': {
				width: 6,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#ccc',
				borderRadius: 57,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: 'transparent linear-gradient(116deg, #FFFFFFC2 0%, #FFFFFFc2 100%)',
			},
		},
	},
}))

const CareBackgroundEllusion = ({children}) => {
	const classes = useStyles()
	return <div className={classes.background}>{children}</div>
}

export default CareBackgroundEllusion
