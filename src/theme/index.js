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
		},
		fitness: {
			main: '#20202c',
			light: '#484755',
			dark: '#000000',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #2e233e64, #2e233e64)',
		},
		yoga: {
			main: '#0cc593',
			light: '#60f9c4',
			dark: '#009365',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #8fb26764, #0cc59364)',
		},
		sports: {
			main: '#ff2083',
			light: '#ff66b2',
			dark: '#c60057',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #eb606064, #ff208364)',
		},
		spa: {
			main: '#0693ea',
			light: '#65c3ff',
			dark: '#0066b7',
			contrastText: '#fff',
			backgroundImage: 'linear-gradient(to right, #1ebcee64, #0693ea64)',
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
			main: '#e22c24',
			light: '#ff664f',
			dark: '#a80000',
			contrastText: '#fff',
		},
		//
		primary: {
			main: '#1976d2',
			light: '#4791db',
			dark: '#115293',
			contrastText: '#7047EA',
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
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: '#fff',
				// backgroundColor: lightBlue.A200,
				color: '#fff',
			},
		},
		MuiPickersDay: {
			day: {
				color: '#475677',
			},
			daySelected: {
				backgroundColor: '#ccc',
			},
			dayDisabled: {
				color: '#7482a6',
			},
			current: {
				color: '#000',
			},
		},
	},
})

export default theme
