import {createTheme} from '@material-ui/core/styles'
// Create a theme instance
const theme = createTheme({
	palette: {
		care: {
			main: '#7047ea',
			light: '#a773ff',
			dark: '#3316b6',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #7047eab3, #7047eae6)',
			buttonBackgroundImage: 'transparent linear-gradient(253deg, #7047EA 0%, #9847EA 100%)',
		},
		fitness: {
			main: '#32B4F9',
			light: '#484755',
			dark: '#000000',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #0095EB64 , #46C0FF64)',
			buttonBackgroundImage: 'transparent linear-gradient(253deg, #0095EB 0%, #46C0FF 100%)',
		},
		yoga: {
			main: '#0cc593',
			light: '#60f9c4',
			dark: '#009365',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #8fb26764, #0cc59364)',
			buttonBackgroundImage: 'transparent linear-gradient(253deg, #0CC593 0%, #0CC593 100%)',
		},
		sports: {
			main: '#F0662E',
			light: '#ff66b2',
			dark: '#c60057',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #F0662E64, #F0662E64)',
			buttonBackgroundImage: 'transparent linear-gradient(253deg, #F0662E 0%, #F0662E 100%)',
		},
		spa: {
			main: '#E4208A',
			light: '#65c3ff',
			dark: '#0066b7',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #E4208A64, #E4208A64)',
			buttonBackgroundImage: 'transparent linear-gradient(253deg, #E4208A 0%, #E4208A 100%)',
		},
		section: {
			main: '#fafcfc',
			light: '#ffffff',
			dark: '#c7c9c9',
			contrastText: '#fff',
		},
		heading: {
			main: '#481ca9',
			light: '#7e4adc',
			dark: '#000079',
			contrastText: '#fff',
		},
		paragraph: {
			main: '#475677',
			light: '#7482a6',
			dark: '#1c2d4b',
			contrastText: '#fff',
		},
		aidiva: {
			main: '#0062DD',
			light: '#ff664f',
			dark: '#a80000',
			contrastText: '#fff',
		},
		lyfngo: {
			main: '#0062DD',
			backgroundImage: 'linear-gradient(90deg, #0062DD 0%, #2EB2FF 101.53%)',
			light: '#ff664f',
			dark: '#f44336',
			contrastText: '#fff',
			fontFamily: 'Poppins',
			gradientText: 'linear-gradient(90deg, #8CC63F 0%, #0062DD 51.49%, #178AEE 100%)',
			gradientText1: 'linear-gradient(180deg, #0062DD 0%, #2EB2FF 100%)',
			lightText: '#FFFFFF',
			darkText: '#000000',
			content1: '#303030',
		},
		//
		primary: {
			main: '#1976d2',
			light: '#4791db',
			dark: '#115293',
			contrastText: '#fff',
		},
		secondary: {
			main: '#dc004e',
			light: '#e33371',
			dark: '#9a0036',
			contrastText: '#000',
		},
		error: {
			main: '#f44336',
			light: '#e57373',
			dark: '#d32f2f',
			contrastText: '#FF2083',
		},
		warning: {
			main: '#ff9800',
			light: '#ffb74d',
			dark: '#f57c00',
		},
		info: {
			main: '#2196f3',
			light: '#64b5f6',
			dark: '#1976d2',
		},
		success: {
			main: '#4caf50',
			light: '#81c784',
			dark: '#388e3c',
			contrastText: '#0CC593',
		},
		background: {
			main: '#fff',
		},
		button: {
			backgroundImage: 'linear-gradient(to right, #481ca9, #ab5fc5)',
		},
	},
	typography: {
		h1: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 60,
			fontWeight: 500,
			fontStyle: 'normal',
			color: '#000',
		},
		h2: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 38,
			fontWeight: 600,
			fontStyle: 'normal',
			color: '#000',
			lg: {
				fontSize: 26,
			},
			md: {
				fontSize: 22,
			},
			sm: {
				fontSize: 18,
			},
		},
		h3: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 32,
			fontWeight: 500,
			fontStyle: 'normal',
			color: '#000',
		},
		h4: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 22,
			fontStyle: 'italic',
			color: '#000',
			lg: {
				fontSize: 18,
			},
			md: {
				fontSize: 16,
			},
			sm: {
				fontSize: 13,
			},
		},
		h5: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 14,
			fontWeight: 400,
			fontStyle: 'normal',
			color: '#000',
		},
		h6: {
			fontFamily: ['"Poppins"', 'sans-serif'].join(','),
			fontSize: 12,
			fontWeight: 400,
			fontStyle: 'normal',
			color: '#000',
		},
		body1: {
			fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
			fontSize: 18,
			fontWeight: 400,
			fontStyle: 'normal',
			color: '#000',
		},
		body2: {
			fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
			fontSize: 22,
			fontWeight: 400,
			fontStyle: 'normal',
			color: '#000',
		},
		subtitle1: {
			fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
			fontWeight: 400,
			fontSize: 16,
			fontStyle: 'normal',
			color: '#000',
		},
	},
	spacing: 8,
	shape: {
		buttonBorderRadius: 16,
		cardBorderRadius: '24px 0px 0px 24px',
	},
})

export default theme
