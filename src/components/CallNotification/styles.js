import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	container: {
		background: 'transparent linear-gradient(180deg, #7047EA 0%, #2900A7 100%) 0% 0% no-repeat padding-box',
		height: '250px',
		width: '270px',
		borderRadius: '15px',
		opacity: 1,
		textAlign: 'center',
		boxShadow: '0px 0px 20px #887ce3',
		marginBottom: '10px',
	},
	callingPopUpContainer: {
		background: 'transparent linear-gradient(180deg, #7047EA 0%, #2900A7 100%) 0% 0% no-repeat padding-box',
		height: '270px',
		width: '100%',
		borderRadius: '15px',
		opacity: 1,
		textAlign: 'center',
		boxShadow: '0px 0px 20px #887ce3',
		// marginBottom: "10px"
	},
	containerWrap: {
		bottom: '0px',
		position: 'fixed',
		zIndex: 9999,
		alignContent: 'end',
		right: '0px',
		width: 'fit-content',
	},
	callUserName: {
		fontSize: '14px',
		fontFamily: 'Poppins',
		color: '#FFFFFF',
		marginBottom: '10px',
	},
	callStatus: {
		fontSize: '12px',
		fontFamily: 'Poppins',
		color: '#FFFFFF',
	},
	IconBgCss: {
		cursor: 'pointer',
		backgroundColor: 'white',
		width: '52px',
		height: '52px',
		'&:hover, &:focus, &:active': {
			backgroundColor: 'white',
		},
	},
	callIcon: {
		fontSize: '24px',
		color: '#049426',
	},
	callEndIcon: {
		fontSize: '24px',
		color: '#AA0808',
	},
	loaderTxt: {
		marginTop: 10,
		display: 'block',
	},
	callingPopupDialog: {
		'& .MuiDialog-paperFullWidth': {
			width: '300px',
			borderRadius: '15px',
			boxShadow: '0px 0px 20px #887ce3',
			background: '#7047EA 0% 0% no-repeat padding-box',
		},
	},
	jitsiLayout: {
		background: 'transparent linear-gradient(180deg, #7047EA 0%, #2900A7 100%) 0% 0% no-repeat padding-box',
		'& body .new-toolbox': {
			bottom: 0,
			top: 0,
		},
		'& body #etherpad': {
			background: 'transparent linear-gradient(180deg, #7047EA 0%, #2900A7 100%) 0% 0% no-repeat padding-box',
		},
	},
	optionsLayer: {
		justifyContent: 'space-between',
		padding: '10px',
		alignItems: 'center',
	},
	endButton: {
		background: 'red',
		padding: '6px 18px',
		'&:hover': {
			background: 'red',
		},
	},
	consultTime: {
		display: 'flex',
		alignItems: 'center',
		//    '& span:first-child': {
		//        color: 'white',
		//        fontWeight: 'bold',
		//        paddingRight: '10px',
		//    },
		//    '& span:nth-child(even)': {
		//        color: '#7fff00'
		//    },
		//    '& span:nth-child(odd)': {
		//        color: 'white',
		//        padding: '0px 5px',
		//    }
	},
	aidivaText: {
		color: 'white',
		alignItems: 'center',
		textAlign: 'center',
		padding: '14px',
		fontWeight: 'bold',
		fontStyle: 'italic',
		letterSpacing: '1px',
		fontSize: '18px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	copyRightText: {
		fontWeight: 'bold',
		color: 'white',
		padding: '10px',
		textAlign: 'left',
		fontSize: '12px',
	},
	minimizedJitsiLayer: {
		// position: 'absolute',
		right: '10px',
		bottom: '0px',
		zIndex: 999999,
		position: 'fixed',
	},
	minimizeStyle: {
		position: 'unset',
		height: '0px',
		width: '0px',
		display: 'none',
		'& .MuiBackdrop-root': {
			opacity: '0 !important',
		},
		'& .MuiDialog-container': {
			opacity: '0 !important',
		},
	},
	meetOptions: {
		background: 'white',
		color: 'black',
	},
	minimizePopup: {
		position: 'relative',
	},
	maxIcon: {
		position: 'absolute',
		right: 0,
		color: 'white',
	},
}))
