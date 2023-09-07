import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import {makeStyles, Button, Typography} from '@material-ui/core'
import BotHeader from './HeaderElement'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import {ToastContainer, toast} from 'react-toastify'
import RazorPay from '../Payment/RazorPay'

const useStyles = makeStyles(theme => ({
	optionCard: {
		background: 'none',
		boxShadow: 'none',
		borderRadius: 0,
		display: 'flex',
		flexWrap: 'wrap',
		gap: 10,
		'& .MuiButton-root': {
			color: '#7047EA',
			border: '2px solid #7047EA',
			fontSize: theme.typography.h6.fontSize,
			fontFamily: theme.typography.h6.fontFamily,
			// fontWeight: 600,
			textTransform: 'capitalize',
			borderRadius: 9,
		},
		'& .MuiButton-label': {
			display: 'flex',
			gap: 8,
		},
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		gap: 62,
		'& .MuiTypography-h6': {
			fontSize: 13,
		},
		'& .MuiButton-root': {
			background: '#5F41C6',
			color: '#fff',
			borderRadius: 24,
			textTransform: 'capitalize',
			paddingInline: 26,
		},
	},
	subWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
}))

export const OptionStep = ({symptyoms, triggerNextStep}) => {
	const classes = useStyles()
	const {setSymptomsUuid} = useContextApi()
	const handleSymbtomClick = uuid => {
		setSymptomsUuid(uuid)
		triggerNextStep()
	}

	return (
		<div className={classes.optionCard}>
			{!_.isEmpty(symptyoms) &&
				symptyoms?.map(item => (
					<Button
						onClick={() => {
							handleSymbtomClick(item?.symtomUuid)
						}}>
						{item?.symtomName}
					</Button>
				))}
		</div>
	)
}

export const PriceList = ({triggerNextStep}) => {
	const classes = useStyles()
	const {symptomsPriceList, setSubId, setPrice, setSpecialities} = useContextApi()

	const handleSymbtomClick = (uuid, maxPrice, spl) => {
		setSubId(uuid)
		setPrice(maxPrice)
		setSpecialities(spl)
		triggerNextStep()
	}
	return (
		<>
			<div className={classes.optionCard}>
				{!_.isEmpty(symptomsPriceList) &&
					symptomsPriceList?.map(item => (
						<Button
							onClick={() => {
								handleSymbtomClick(item?.b2cSubscriptionUuid, item?.b2cSubscriptionMaxPrice, item?.b2cSubsriptionName)
							}}>
							{item?.b2cSubsriptionName}{' '}
							<Typography variant='h6'>
								<span style={{fontWeight: 'bolder', fontFamily: 'Roboto'}}>&#8377;</span> {item?.b2cSubscriptionMaxPrice}
							</Typography>
						</Button>
					))}
			</div>
			<>{/* <ToastContainer style={{transform: 'translateY(50px)'}} /> */}</>
		</>
	)
}

export const BookAppt = () => {
	return (
		<>
			<RazorPay />
		</>
	)
}

export default function BotKit() {
	const {symptomsList, specialities} = useContextApi()
	const symptyoms = symptomsList.slice(0, 5)
	const theme = {
		background: 'transparent linear-gradient(139deg,#fffffff5 0%,#ffffffb8 100%)',
		fontFamily: ['"Poppins"', 'sans-serif'].join(','),
		headerBgColor: 'transparent linear-gradient(99deg,#ebeaeacc 0%,#efeeeecc 100%)',
		headerFontColor: '#4B5155',
		headerFontSize: '16px',
		botBubbleColor: '#FFFFFF 0% 0%',
		botFontColor: '#616161',
		userBubbleColor: '#779BEB4C 0% 0%',
		userFontColor: '#364461',
	}

	const config = {
		width: '350px',
		height: '500px',
	}

	const icons = {
		width: '60px',
		height: '60px',
		borderRadius: '40px 12px 56px 51px',
		background: '#7C60DC',
		boxShadow: 'inset 0px 0px 20px #0000004f, 0px 3px 20px #7c60dc80',
	}

	const steps = [
		{
			id: '1',
			message: 'Hi, welcome to online consultation',
			trigger: '2',
		},
		{
			id: '2',
			message: 'Consult with top doctors',
			trigger: '3',
		},
		{
			id: '3',
			message: 'Please select your category below suggestion or Type your symptoms or health problems given below to show speciality',
			trigger: '4',
		},
		{
			id: '4',
			component: <OptionStep symptyoms={symptyoms} />,
			waitAction: true,
			trigger: '5',
		},
		{
			id: '5',
			message: 'Select relevant speciality',
			trigger: '6',
		},
		{
			id: '6',
			component: <PriceList />,
			waitAction: true,
			trigger: '7',
		},

		{
			id: '7',
			message: `Verified ${specialities} online now. one of them will speak to you shortly`,
			trigger: '8',
		},
		{
			id: '8',
			component: <BookAppt />,
			end: true,
		},
		// {
		// 	id: '8',
		// 	user: true,
		// 	trigger: '9',
		// 	validator: value => {
		// 		if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
		// 			return true
		// 		} else {
		// 			return 'Please enter a valid phone number.'
		// 		}
		// 	},
		// },
		// {
		// 	id: '9',
		// 	message: 'Enter Patient name',
		// 	trigger: '10',
		// },
		// {
		// 	id: '10',
		// 	user: true,
		// 	trigger: '11',
		// },
		// {
		// 	id: '11',
		// 	message: 'Verified Dermatologist online now. one of them will speak to you shortly',
		// 	end: true,
		// },
	]

	const classes = useStyles()
	return (
		<>
			<ThemeProvider theme={theme}>
				<ChatBot
					headerComponent={<BotHeader />}
					headerTitle={'consult'}
					botAvatar={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/lyfngo_redlogo1x.png'}
					userAvatar={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/avatar.png'}
					floatingIcon={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/doctorChat.png'}
					floatingStyle={icons}
					placeholder='Type here....'
					steps={steps}
					{...config}
					className={classes.root}
				/>
			</ThemeProvider>
			<>{/* <ToastContainer style={{transform: 'translateY(50px)'}} /> */}</>
		</>
	)
}
