import React, {useState, useEffect} from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import Image from 'next/image'
import BotKit from '../BotKit'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'
import ChatBotAidiva from '../ChatBotAidiva/index'

const useStyles = makeStyles(theme => ({
	chatPosition: {
		cursor: 'pointer',
		position: 'fixed',
		right: 12,
		bottom: 0,
		zIndex: 99,
		// transform: 'translateY(-104px)',
		// borderRadius: 16,
		// boxShadow: '0px 0px 15px #c6baba3b',
	},

	box: {
		display: 'flex',
		position: 'relative',
		width: '400px',
		// transform: 'translateY(-90px)',
		transform: 'translate(-40px,-90px)',
		// borderRadius: 26,
		// width: 186,
		// background: '#7C60DC 0% 0% no-repeat padding-box',
		// overflowX: 'hidden',
		// padding: '7px 27px 7px 28px',
		// borderRadius: '24px 28px 4px 28px',
		// boxShadow: 'inset 0px 0px 20px #0000004F, 0px 3px 20px #7C60DC80',
		// '& .MuiTypography-h6': {
		// 	fontSize: theme.typography.h5.fontSize,
		// 	color: '#fff',
		// },
		[theme.breakpoints.down('sm')]: {
			maxWidth: '300px',
		},
	},
	doctorPosition: {
		cursor: 'pointer',
		position: 'fixed',
		right: 50,
		bottom: 0,
		transform: 'translateY(-16px)',
		zIndex: 9999,
	},
	doctorPosition_1: {
		cursor: 'pointer',
		position: 'fixed',
		right: 50,
		bottom: 0,
		transform: 'translateY(-16px)',
		zIndex: 9999,
	},
	boxOne: {
		position: 'relative',
		borderRadius: 26,
		minHeight: 64,
		width: 64,
		// backgroundColor: '#7C60DC',
		// backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/doctorChat.png'})`,
		backgroundRepeat: 'no-repeat',
		// backgroundSize: '100% auto',
		backgroundPosition: 'center',
		overflowX: 'hidden',
		borderRadius: '40px 12px 56px 51px',
		// padding: '24px 27px 14px 27px',
		boxShadow: 'inset 0px 0px 20px #0000004F, 0px 3px 20px #7C60DC80',
		backgroundSize: 52,
	},
	boxOne_2: {
		position: 'relative',
		borderRadius: 26,
		minHeight: 64,
		width: 64,
		backgroundColor: '#7C60DC',
		backgroundImage: `url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/close.svg'})`,
		backgroundRepeat: 'no-repeat',
		// backgroundSize: '100% auto',
		backgroundPosition: 'center',
		overflowX: 'hidden',
		borderRadius: '40px 12px 56px 51px',
		// padding: '24px 27px 14px 27px',
		boxShadow: 'inset 0px 0px 20px #0000004F, 0px 3px 20px #7C60DC80',
		backgroundSize: 28,
	},
}))

function ChatBot({backgroundImage, backgroundColor}) {
	const classes = useStyles()
	const [state, setState] = useState(false)
	const {setGroupId} = useContextApi()

	const location = typeof window !== 'undefined' ? window.location.pathname : null

	useEffect(() => {
		setGroupId(location && location?.split('/')?.pop())
	}, [location])

	const handleChange = () => {
		setState(!state)
	}
	return (
		<>
			<div className={classes.chatPosition}>
				{state && (
					<>
						<div className={classes.box}>
							{/* <BotKit /> */}
							<ChatBotAidiva setState={setState} />
						</div>
					</>
				)}

				<div className={classes.doctorPosition}>
					<div className={classes.boxOne} onClick={handleChange} style={{backgroundImage: backgroundImage, backgroundColor: backgroundColor}}></div>
				</div>
				{state && (
					<>
						<div className={classes.doctorPosition_1}>
							<div className={classes.boxOne_2} onClick={handleChange} style={{backgroundColor: backgroundColor}}></div>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default ChatBot
