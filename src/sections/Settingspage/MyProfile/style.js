import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%)',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	container: {
		marginBlock: 62,
		width: 946,
		margin: '0 auto',
		width: '100%',
		paddingInline: 38,
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			padding: 12,
			marginBlockStart: 6,
		},
	},
	head: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 36,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			alignItems: 'normal',
			paddingBottom: 28,
		},
		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			fontSize: 20,
			fontWeight: 600,
		},
		'& .MuiButton-contained': {
			backgroundColor: '#1473e6',
			boxShadow: 'inset 0px 3px 6px #00000029, 0px 8px 13px #00000029',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			color: '#fff',
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiButton-root': {
			position: 'relative',
			top: 24,
			padding: '5px 28px',
			[theme.breakpoints.down('xs')]: {
				display: 'none',
			},
		},
		'& .MuiInputBase-input': {
			minWidth: 254,
		},
	},
	headTwo: {
		paddingTop: 38,
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiButton-contained': {
			backgroundColor: '#1473e6',
			boxShadow: 'inset 0px 3px 6px #00000029, 0px 8px 13px #00000029',
		},
		'& .MuiButton-label': {
			textTransform: 'capitalize',
			color: '#fff',
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiButton-root': {
			padding: '5px 28px',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	profileIcon: {
		flex: 2,
		position: 'relative',
		display: 'inline',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiAvatar-root': {
			width: 104,
			height: 104,
		},
	},
	nameField: {
		flex: 4,
		paddingBottom: 28,
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
		'& .MuiInputBase-input': {
			minWidth: 254,
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
	},
	profileView: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		paddingBottom: 28,
		gap: 24,
		paddingBottom: 28,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			gap: 12,
			paddingBottom: 16,
		},
		[theme.breakpoints.up('1412')]: {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		'& .MuiFormControl-root': {
			width: '100%',
		},
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#1473e6',
		// 		cursor: 'pointer',
		// 		position: 'absolute',
		//  top: -52,
		//  left: 76,
		// 	},
	},
	mailSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		paddingBottom: 28,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			paddingBottom: 16,
			alignItems: 'normal',
		},
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
				marginBlock: 12,
			},
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
		'& .MuiFormGroup-root': {
			flexDirection: 'row',
		},
		'& .MuiRadio-colorSecondary.Mui-checked': {
			color: theme.palette.primary.main,
		},
		'& .MuiTypography-body1': {
			color: '#4E4E4E',
			fontSize: theme.typography.h5.fontSize,
			fontFamily: 'poppins',
		},
		'& .MuiInputBase-input': {
			minWidth: 82,
		},
		'& .MuiInput-underline:before': {
			display: 'none',
		},
		'& .MuiInput-underline:after': {
			display: 'none',
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
	},
	wrapper: {
		display: 'block',
		flexDirection: 'column',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
	},
	timeSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		paddingBottom: 28,
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			alignItems: 'normal',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	bloodForm: {
		display: 'block',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			paddingBottom: 8,
		},
		'& .MuiInputLabel-formControl': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
		},
		// '& .MuiInputBase-root': {
		// 	minWidth: 285,
		// },
		'& .MuiFormControl-root': {
			display: 'block',
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	timezoneForm: {
		display: 'block',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			paddingBottom: 8,
		},
		'& .MuiInputLabel-formControl': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
		},
		// '& .MuiInputBase-root': {
		// 	minWidth: 285,
		// },
		'& .MuiFormControl-root': {
			display: 'block',
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	timeForm: {
		display: 'block',
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			paddingBottom: 8,
		},
		'& .MuiInputLabel-formControl': {
			color: theme.palette.paragraph.main,
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
		},
		'& .MuiInputBase-root': {
			minWidth: 269,
		},
		'& .MuiFormControl-root': {
			display: 'none',
		},
	},
	addressOne: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		paddingBottom: 28,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			alignItems: 'normal',
		},
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiInputBase-input': {
			minWidth: 254,
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	addressTwo: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		paddingBottom: 28,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			alignItems: 'normal',
		},
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiInputBase-input': {
			minWidth: 254,
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
	},
	addressThree: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			alignItems: 'normal',
		},
		[theme.breakpoints.up('1412')]: {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiInputBase-input': {
			minWidth: 82,
		},
		'& .MuiInput-underline:before': {
			display: 'none',
		},
		'& .MuiInput-underline:after': {
			display: 'none',
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'& .MuiTypography-h6': {
			color: theme.palette.error.main,
		},
	},
	datePicker: {
		'& .MuiTypography-h5': {
			fontSize: theme.typography.h5.fontSize,
			fontFamily: theme.typography.h5.fontFamily,
		},

		display: 'flex',
		flexDirection: 'column',
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	test: {
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
			padding: '1px 4px',
		},
	},
	testone: {
		'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
			padding: '1px 4px',
		},
	},
	inputText: {
		display: 'none',
	},
	photoIcon: {
		position: 'absolute',
		top: 84,
		left: 66,
	},
	avatarphoto: {
		position: 'relative',
	},
	breadcrumbContainer: {
		paddingBlock: 14,
		paddingInlineStart: 12,
	},
	breadcrumbone: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
		cursor: 'pointer',
	},
	breadcrumbtwo: {
		fontSize: 14,
		fontFamily: theme.typography.h5.fontFamily,
		color: '#707070',
		letterSpacing: 0.5,
	},
	profileLabel: {
		transform: 'translate(12px,0px)',
		paddingBlockEnd: 6,
	},
	basicInfoText: {
		paddingBlockEnd: 36,
		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			fontSize: 20,
			fontWeight: 600,
		},
	},
	basicInfoWrapper: {
		paddingBlockStart: 28,
	},
	basicInfoFields: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			gap: 16,
			alignItems: 'normal',
		},
		[theme.breakpoints.up('1412')]: {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		'& .MuiFormControl-root': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 573,
			},
		},
		'& .MuiFormLabel-root': {
			fontSize: 14,
			color: theme.palette.paragraph.main,
			fontFamily: 'poppins',
		},
		'& .MuiInputBase-input': {
			minWidth: 254,
		},
		'& .MuiOutlinedInput-input': {
			fontSize: 16,
			color: theme.palette.paragraph.main,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// borderColor: theme.palette.paragraph.main,
			borderColor: '#1473e6',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#999',
		},
	},
	removeBtn: {
		backgroundColor: '#1473e6',
		color: '#fff',
		borderRadius: 4,
		fontFamily: theme.typography.h5.fontFamily,
		textTransform: 'capitalize',
		'&:hover': {
			backgroundColor: '#1473e6',
		},
		'& .MuiButton-text': {
			padding: '4px 8px',
		},
	},
	mobField: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		[theme.breakpoints.up('sm')]: {
			maxWidth: 573,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 573,
		},
	},
	alternatemobField: {
		display: 'flex',
		alignItems: 'center',
		gap: 4,
		[theme.breakpoints.up('sm')]: {
			maxWidth: 573,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 573,
		},
	},
	autocomplteCountryCode: {
		width: 78,
	},
	alternateCountryCode: {
		width: 78,
		[theme.breakpoints.up('sm')]: {
			paddingBlockStart: 4,
		},
	},
}))
