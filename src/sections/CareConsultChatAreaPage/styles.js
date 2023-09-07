import {makeStyles} from '@material-ui/core/styles'
import {styled} from '@mui/material/styles'
import {Badge} from '@mui/material'

export const fileStyles = makeStyles(theme => ({
	items: {
		boxShadow: '0px 3px 6px #00000029',
		borderRadius: '25px',
		width: '50px',
		height: '50px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0px 8px',
	},
	docImg: {
		background: 'transparent linear-gradient(180deg, #548CCB 0%, #040FA8 100%) 0% 0% no-repeat padding-box',
	},
	photoImg: {
		background: 'transparent linear-gradient(180deg, #6B18E8 0%, #8B17EF 100%) 0% 0% no-repeat padding-box',
	},
	gallaryImg: {
		background: 'transparent linear-gradient(180deg, #E81879 0%, #D439BF 100%) 0% 0% no-repeat padding-box',
	},
	gridStyle: {
		background: '#FFFFFF',
		boxShadow: '0px 0px 10px #00000014',
		border: '1px solid #DBE5ED',
		borderRadius: '10px',
		padding: '12px 9px',
	},
	labelStyle: {
		display: 'flex',
		cursor: 'pointer',
	},
	helpIcon: {
		position: 'absolute',
		top: '5px',
		right: '5px',
		fontSize: '14px',
		color: '#e22c24',
	},
}))

export const useStyles = makeStyles(theme => ({
	// headerSection: {
	//     background: '#F94C61',
	//     color: '#FAFAFA',
	//     alignItems: 'center',
	// },
	flex: {
		display: 'flex',
	},
	alignSelf: {
		alignSelf: 'center',
	},
	flexProp: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	font20: {
		fontSize: '20px',
	},
	btnTxtCss: {
		fontSize: '12px',
		marginLeft: '10px',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	IconBtnSq: {
		padding: '15px',
		'& .MuiIconButton-label': {
			backgroundColor: '#F0F1F4',
			padding: '5px',
			borderRadius: '12px',
		},
		'& .MuiSvgIcon-root': {
			fill: '#00000099',
			opacity: 1,
		},
		'&:hover, &:focus, &:active': {
			background: 'transparent',
		},
	},
	searchBox: {
		width: '100%',
		marginBottom: '0px',
		borderRadius: '10px',
		background: '#FFFF',
		border: '1px solid #DBE5ED',
		position: 'relative',
		'& .MuiOutlinedInput-root': {
			height: '48px',
		},
		'& .MuiTextField-root': {
			marginTop: '14px',
		},
		'& .MuiOutlinedInput-adornedEnd': {
			paddingRight: '5px',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			border: '0px',
		},
	},
	startNew: {
		background: '#7047EA !important',
		borderRadius: '10px !important',
		width: '100% !important',
		color: 'white !important',
		margin: '10px 0px',
	},
	activeChat_card: {
		'&:hover, &:focus, &:active': {
			boxShadow: '3px 3px 10px 3px #00000012',
			borderRadius: '13px',
			alignItems: 'center',
			cursor: 'pointer',
		},
	},
	activechat_msgContent: {
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '160px',
	},
	activechat_unreadCount: {
		backgroundColor: '#F94C61',
		textAlign: 'center',
		color: '#FFFFFF',
		width: '20px',
		height: '20px',
		opacity: 1,
		borderRadius: '50px',
		fontSize: '12px',
		'& .MuiBadge-badge': {
			top: '10px',
			right: '10px',
		},
	},
	chatArea_CardContent: {
		paddingBottom: '0px !important',
		background: 'transparent linear-gradient(139deg, #FFFF 0%, #FFFFF 100%) 0% 0% no-repeat padding-box',
		opacity: 1,
		boxShadow: '0px 3px 6px #00000026',
		backdropFilter: 'blur(25px)',
	},
	topHeader: {
		background: 'transparent linear-gradient(274deg, #FFFF 0%, #FFFFFFCC 100%) 0% 0% no-repeat padding-box',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(25px)',
		position: 'static',
		display: 'flex',
		justifyContent: 'space-between',
		boxShadow: '0px 5px 5px #d9d5d524',
		height: '65px',
		// padding: '10px',
		textAlign: 'center',
		zIndex: 1,
		'&:hover': {
			cursor: 'pointer',
		},
	},
	msg_area: {
		padding: '10px 10px 10px 20px',
		height: '70vh',
		overflow: 'auto',
		marginRight: '5px',
		'&::-webkit-scrollbar': {
			width: '4px !important',
			height: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			border: '2px solid transparent',
			borderRadius: '20px',
			backgroundColor: '#E7E7E7 !important',
		},
	},
	active_scrollWrap: {
		height: '55vh',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '4px !important',
			height: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			border: '2px solid transparent',
			borderRadius: '20px',
			backgroundColor: '#E7E7E7 !important',
		},
	},
	chatArea_name: {
		color: '#4B5155',
		fontSize: '16px',
		fontFamily: 'poppins',
		fontWeight: 500,
		lineHeight: '21px',
		alignSelf: 'center',
		opacity: 1,
		marginLeft: '15px',
	},

	sentimentIcon: {
		fontSize: '24px',
		color: ' #AFBBC6',
		cursor: 'pointer',
		'&:hover': {
			color: '#7047EA',
		},
	},
	attachFileIcon: {
		transform: 'rotate(45deg)',
		fontSize: '24px',
		color: '#AFBBC6',
		cursor: 'pointer',
		'&:hover': {
			color: '#7047EA',
		},
	},
	navigationOutlinedIcon: {
		transform: 'rotate(-45deg)',
		fontSize: '20px',
		color: '#FFFFFF',
		margin: '0px 0px 5px 5px',
	},
	sendIconLayer: {
		background: '#7047EA',
		borderRadius: '50px',
		display: 'flex',
		alignItems: 'center',
		width: '35px',
		height: '35px',
		justifyContent: 'center',
		borderRadius: '10px',
		cursor: 'pointer',
		opacity: 1,
		'&:hover': {
			background: '#7047EA',
		},
	},
	disabledSendIcon: {
		background: '#c9b8ff',
		cursor: 'default',
		'&:hover': {
			background: '#c9b8ff',
		},
	},
	leftMessageContent: {
		backgroundColor: '#F0F1F4',
		maxWidth: '400px',
		width: 'auto',
		padding: '12px',
		fontSize: '14px',
		borderRadius: '10px 10px 10px 0px',
		color: '#2A2A2A',
		opacity: 0.8,
	},
	rightMessageContent: {
		backgroundColor: '#887CE3',
		color: '#FFFF',
		maxWidth: '400px',
		width: 'auto',
		padding: '12px',
		fontSize: '14px',
		borderRadius: '10px 10px 0px 10px',
		opacity: 1,
	},
	rightMessageImageContent: {
		backgroundColor: '#887CE3',
		width: '94px',
		border: '2px solid #887CE3',
		borderRadius: '6px',
		height: '100px !important',
	},
	leftMessageImageContent: {
		backgroundColor: '#F0F1F4',
		width: '94px',
		border: '2px solid #F0F1F4',
		borderRadius: '6px',
		height: '100px !important',
	},
	rightMessageDocumentContent: {
		display: 'flex',
		background: '#887CE3',
		borderRadius: '10px 10px 0px 10px',
		padding: '10px',
	},
	leftMessageDocumentContent: {
		display: 'flex',
		background: '#F0F1F4',
		borderRadius: '10px 10px 10px 0px',
		padding: '10px',
	},
	documentText: {
		color: '#2A2A2A',
		fontSize: '14px',
		marginLeft: '5px',
		marginRight: '5px',
	},
	emojiFont: {
		fontSize: '24px !important',
		padding: '5px !important',
	},
	rightMsg_wrap: {
		flexDirection: 'row-reverse',
		display: 'flex',
		justifyContent: 'end',
	},
	msgWrap: {
		display: 'flex',
	},
	timeDisplayFont: {
		fontSize: '10px',
		marginTop: '5px',
		font: 'Sofia Pro',
		color: '#AFBBC6',
		opacity: 1,
	},
	floatRight: {
		float: 'right',
	},
	sysMsg: {
		backgroundColor: '#F4F5F8',
		padding: '5px 10px',
		font: '12px/18px Poppins',
		color: '#2A2A2A',
		opacity: '0.59',
	},
	callMessageType: {
		margin: 'auto',
		display: 'flex',
		//  backgroundColor: "#dcd8f5",
		color: '#000000',
		padding: '5px 10px',
		borderRadius: '4px',
	},
	missedCallTxt: {
		font: '12px/18px Poppins',
		color: '#000000',
		opacity: '1',
		margin: '2px 0px 0px 0px',
	},
	buttonBgCss: {
		font: 'normal medium 14px/22px Sofia Pro',
		background: '#38A4FF',
		color: '#FFF',
		cursor: 'pointer',
		height: '35px',
		boxShadow: '0px 0px 3px #00000012',
		borderRadius: '15px',
		opacity: 1,
		textTransform: 'capitalize',
		'&:hover, &:focus, &:active': {
			background: '#38A4FF',
			color: '#FFF',
		},
	},
	btnOutlined: {
		font: 'normal normal medium 14px/22px Sofia Pro',
		background: '#FFF',
		color: '#38A4FF',
		cursor: 'pointer',
		border: '1px solid #38A4FF',
		borderRadius: '0px',
		'&:hover, &:focus, &:active': {
			border: '1px solid #38A4FF',
			color: '#38A4FF',
		},
	},
	resetBtn: {
		border: '1px solid #7047EA',
		borderRadius: '10px',
		color: '#7047EA',
		opacity: 1,
		textTransform: 'capitalize',
		height: '36px',
		alignSelf: 'center',
		'&:hover, &:focus, &:active': {
			backgroundColor: 'transparent',
			color: '#7047EA',
		},
	},
	chatDetailHeader: {
		fontSize: '14px',
		fontFamily: 'Poppins',
		color: '#2A2A2A',
		opacity: '0.8',
		alignSelf: 'center',
	},
	accordianHead: {
		fontWeight: 'bold',
		color: '#4B5155',
		opacity: 0.8,
		fontSize: '14px',
	},
	fileIconBg: {
		backgroundColor: '#F5F4F6',
	},
	pink_iconBg: {
		backgroundColor: '#fce8f2',
		color: '#E51D84',
		padding: '10px',
	},
	skyBlue_iconBg: {
		backgroundColor: '#e5f0fc',
		color: '#036CE3',
		padding: '10px',
	},
	blue_iconBg: {
		backgroundColor: '#e9ecf8',
		color: '#2A4AB9',
		padding: '10px',
	},
	fileIcon: {
		fontSize: '20px',
	},
	accordianWrap: {
		paddingTop: '20px',
		cursor: 'pointer',
	},
	chat_heading: {
		fontSize: '12px',
		color: '#535354',
		fontFamily: 'Poppins',
	},
	chat_subHead: {
		fontSize: '10px',
		width: '60px',
		color: '#2A2A2A',
		fontFamily: 'Poppins',
		textAlign: 'end',
	},
	chat_fileCount: {
		fontSize: '10px',
		color: '#2A2A2A',
		opacity: 0.4,
		fontFamily: 'Poppins',
		float: 'left',
	},
	ArrowIcon: {
		color: '#AFBBC6',
		fontSize: '15px',
		marginLeft: '10px',
	},
	imgDisplay: {
		height: '100%',
		width: '100%',
		borderRadius: '6px',
	},
	accordianSummary: {
		padding: '0px 15px',
		minHeight: '30px !important',
		'&  .MuiAccordionSummary-content': {
			margin: '0px',
		},
		'& .MuiAccordionSummary-root.Mui-expanded': {
			minHeight: '30px !important',
		},
	},
	accoridanWrap: {
		'.MuiAccordion-root': {
			position: 'unset',
		},
	},
	noRecords: {
		fontSize: '14px',
		color: '#4B5155',
		textAlign: 'center',
		padding: '10px 45px',
		opacity: 0.5,
	},
	IconBtnAccordian: {
		padding: '0px',
		'& .MuiIconButton-label': {
			backgroundColor: '#F0F1F4',
			padding: '0px',
			borderRadius: '5px',
		},
		'& .MuiSvgIcon-root': {
			fill: '#7B8793',
			opacity: 1,
			fontSize: '20px',
		},
		'&:hover, &:focus, &:active': {
			background: 'transparent',
		},
	},
	scroll: {
		height: '220px',
		overflowY: 'auto',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			width: '4px !important',
			height: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			border: '2px solid transparent',
			borderRadius: '20px',
			backgroundColor: '#E7E7E7 !important',
		},
	},
	footer: {
		padding: '0px 10px 10px',
		// margin: '0px -8px'
	},
	docImage: {
		width: '30%',
		borderRadius: '6px',
		height: '100px',
		maxWidth: 'calc(50% - 10px)',
		margin: '4px',
		cursor: 'pointer',
	},
	IconBtnActiveSq: {
		padding: '15px',
		backgroundColor: '#F0F1F4',
		padding: '5px',
		borderRadius: '12px',
		marginRight: '10px',
		cursor: 'pointer',
		'&:hover, &:focus, &:active': {
			background: '#F0F1F4',
		},
	},
	HeadingTxt: {
		fontSize: '14px',
		fontFamily: 'Poppins',
		color: '#2A2A2A',
		opacity: 0.8,
		lineHeight: '30px',
	},
	chatDetailsWrap: {
		height: '70vh',
		overflow: 'auto',
		padding: '15px 0px 15px 15px',
		'&::-webkit-scrollbar': {
			width: '4px !important',
			height: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			border: '2px solid transparent',
			borderRadius: '20px',
			backgroundColor: '#E7E7E7 !important',
		},
	},
	chatDtHeader: {
		borderBottom: '1px solid #f3f3f380',
		display: 'flex',
		padding: '20px',
	},
	chatDt_noContent: {
		fontSize: '16px',
		textAlign: 'center',
	},

	swiperContainer: {
		height: 476,
		'& .swiper-button-next': {
			right: 10,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_right1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 26,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
		},
		'& .swiper-button-prev': {
			left: 10,
			backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/arrow_left1.svg'})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% auto',
			backgroundPosition: 'center',
			padding: 26,
			'&::after': {
				display: 'none',
			},
			[theme.breakpoints.down('sm')]: {
				top: 420,
				padding: 16,
			},
		},
	},
	slide: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	dialogLayer: {
		overflow: 'hidden',
		// top: '60px !important',
		marginTop: '10px',
		'& .MuiDialogContent-root': {
			padding: '0px',
		},
	},
	imgLayer: {
		width: '100%',
		height: '100%',
	},
	activeIcon: {
		color: '#7047EA',
	},
	inputLayer: {
		'& .emoji-mart': {
			borderRadius: '10px',
			boxShadow: '0px 0px 10px #00000014',
			background: '#FFFFFF',
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: '50px',
		},
		'& .emoji-mart-preview': {
			display: 'none',
		},
	},
	dialogLayout: {
		'& .MuiDialog-container': {
			// height: 'unset',
		},
		'& .MuiDialog-paper': {
			marginLeft: '90px',
			top: '30px',
			borderRadius: '0px !important',
			marginRight: '20px',
		},
		'& .MuiDialog-paperScrollPaper': {
			height: 'unset !important',
		},
	},
	date: {
		color: 'grey',
		fontSize: '12px',
		paddingBottom: '10px',
		fontWeight: '500',
	},
	linkData: {
		margin: '8px',
		wordBreak: 'break-all',
		'& p:first-child': {
			background: '#3531B21A',
			borderRadius: '10px 10px 10px 0px',
			padding: '12px 10px',
			marginBottom: '5px',
			fontWeight: '500',
			width: 'fit-content',
			fontSize: '14px',
			'& a': {
				color: '#0500A2',
				background: 'unset',
				// borderBottom: '1px solid #0500A2',
				'&:hover': {
					background: 'unset',
				},
			},
		},
	},
	smallText: {
		fontSize: '10px',
		fontWeight: '500',
		color: '#AFBBC6',
	},
	alignRight: {
		textAlign: 'right',
	},
	alignLeft: {
		textAlign: 'left',
	},
	marginLeftAuto: {
		marginLeft: 'auto',
		marginRight: '5px',
	},
	docData: {
		width: 'fit-content',
		marginBottom: '16px',
		// flexWrap: 'nowrap',
		'& div:first-child': {
			padding: '8px',
		},
	},
	docCust: {
		borderRadius: '10px 10px 10px 0px',
		background: '#F5F4F6',
		color: '#535353',
		'& p': {
			paddingLeft: '5px',
			paddingRight: '5px',
			maxWidth: '250',
			fontSize: '14px',
		},
	},
	docTenet: {
		borderRadius: '10px 10px 0px 10px',
		background: '#887CE3',
		color: '#FFFFFF',
		'& p': {
			paddingLeft: '17px',
			paddingRight: '22px',
			maxWidth: '135px',
			fontSize: '14px',
		},
	},
	iconBtn: {
		display: 'none',
		color: 'transparent',
		border: 'transparent',
		borderRadius: '50%',
		width: '30px',
		height: '30px',
		fontSize: '17px',
		paddingTop: '15px',
		paddingLeft: '15px',
	},
	custDownload: {
		'&:hover': {
			'& button': {
				display: 'inherit',
				color: '#887CE3',
				border: '2px solid #887CE3',
			},
		},
	},
	tenetDownload: {
		'&:hover': {
			'& button': {
				display: 'inherit',
				color: '#FFFFFF',
				border: '2px solid #FFFFFF',
			},
		},
	},
	downloadItem: {
		cursor: 'pointer',
		// whiteSpace: 'nowrap',
		width: 'fit-content',
	},
	timeStorageDisplayFont: {
		fontSize: '10px',
		margin: '5px 0px 5px !important',
		font: 'Sofia Pro',
		color: '#AFBBC6',
		opacity: 1,
		display: 'flex',
		justifyContent: 'space-between',
	},
	videoLinkDoc: {
		backgroundColor: 'transparent !important',
		borderBottom: 'transparent !important',
		alignSelf: 'center',
		textDecoration: 'none',
	},
	chatAreaSkeletonCircle: {
		alignSelf: 'center',
		borderRadius: '50px',
		'& div': {
			width: '50px',
		},
	},
	chatAreaSkeletonRectangle: {
		margin: '15px',
		background: '#F5F4F6',
		borderRadius: '8px 8px 8px 0px',
	},
	imgContent: {
		float: 'left',
		display: 'flex',
		margin: '5px',
		fontSize: '16px',
	},
	reverseDisplay: {
		display: 'flex',
		flexDirection: 'row-reverse',
	},
	chatDetailsVideo: {
		backgroundColor: 'transparent !important',
		borderBottom: 'transparent !important',
		alignSelf: 'center',
		width: '45%',
		margin: '5px',
	},
	menuListAction: {
		fontSize: '12px',
		padding: '5px 12px',
	},
	photoLayerHeader: {
		borderBottom: '1px solid grey',
		'& h2': {
			fontSize: '20px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
	},
	btnStyle: {
		background: '#7047EA',
		color: 'white',
		width: 'fit-content',
		paddingTop: '10px',
		marginBottom: '10px',
		'&:hover': {
			background: '#7047EA',
		},
	},
	cancelBtn: {
		color: 'red',
		width: 'fit-content',
		paddingTop: '10px',
		marginBottom: '10px',
		border: '1px solid #f0f0f0',
		borderRadius: '4px',
		marginRight: '10px',
	},
	noContentStyle: {
		color: 'gray',
		fontStyle: 'italic',
		fontSize: '16px',
		textAlign: 'center',
	},
	textLinkView: {
		color: '#0500A2 !important',
		fontWeight: '500 !important',
		background: 'transparent !important',
		borderBottom: '1px solid #0500A2 !important',
		textDecoration: 'unset !important',
	},
}))

export const StyledBadge = styled(Badge)(({theme}) => ({
	'& .MuiBadge-badge': {
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))
