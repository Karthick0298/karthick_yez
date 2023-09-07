import React, {useState} from 'react'
import MenuToggle from './MenuToggle'
import SignUp from './SignUp'
import {makeStyles, List, ListItem, IconButton} from '@material-ui/core'
import Image from 'next/image'
import MobileSignUp from './SignUp/MobileSignUp'

const useStyles = makeStyles(theme => ({
	root: {
		margin: 0,
		padding: 0,
		display: 'flex',
		background: 'transparent linear-gradient(93deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		width: '100%',
		flexDirection: 'column',
		position: 'fixed',
		transform: 'translateY(7px)',
		height: '100vh',
		left: 0,
		overflowY: 'scroll',
		transition: 'all 0.5s ease',
		'& .MuiListItem-gutters': {
			padding: 0,
		},
		'& .MuiListItem-root': {
			width: 'auto',
		},
	},
}))
export default function MobileNavLinks(props) {
	const [isOpen, setOpen] = useState(false)
	const classes = useStyles()
	return (
		<>
			<MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<>
					<List component='nav' aria-label='main burger-folder' className={classes.root}>
						<ListItem>
							<SignUp />
							<MobileSignUp />
						</ListItem>
						<ListItem>
							<IconButton>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/notification-b2c.svg' alt='logo' width={40} height={40} />
							</IconButton>
						</ListItem>
						<ListItem>
							<IconButton>
								<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/cart-b2c.svg' alt='logo' width={40} height={40} />
							</IconButton>
						</ListItem>
					</List>
				</>
			)}
		</>
	)
}
