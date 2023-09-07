import React, {useState} from 'react'
import MenuToggle from '../MenuToggle'
import SignUp from '../SignUp'
import {Drawer, makeStyles, List, ListItem, IconButton, Typography} from '@material-ui/core'
import Image from 'next/image'
import MobileSignUp from '../SignUp/MobileSignUp'

const useStyles = makeStyles(theme => ({
	root: {
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		transition: 'all 0.5s ease',
		'& .MuiListItem-gutters': {
			padding: 0,
		},
		'& .MuiListItem-root': {
			width: 'auto',
			display: 'block',
		},
		'& .MuiTypography-h5': {
			color: theme.palette.paragraph.main,
			fontWeight: 500,
		},
	},
	drawer: {
		'& .MuiDrawer-paper': {
			transform: 'translateY(58px)',
			minWidth: '100%',
		},
	},
}))

function DrawerComponent() {
	const [isOpen, setOpen] = useState(false)
	const [openDrawer, setopenDrawer] = useState(true)
	const classes = useStyles()
	return (
		<>
			<MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<>
					<Drawer open={openDrawer} onClose={() => setopenDrawer(false)} className={classes.drawer}>
						<List component='nav' aria-label='main burger-folder' className={classes.root}>
							<ListItem>
								<SignUp />
								<MobileSignUp />
							</ListItem>
							{/* <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc'}}>
								<ListItem>
									<IconButton>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/notification-b2c.svg' alt='logo' width={40} height={40} />
									</IconButton>
								</ListItem>
								<Typography variant='h5'>Notification</Typography>
							</div>
							<div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc'}}>
								<ListItem>
									<IconButton>
										<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/cart-b2c.svg' alt='logo' width={40} height={40} />
									</IconButton>
								</ListItem>
								<Typography variant='h5'>Shopping Cart</Typography>
							</div> */}
						</List>
					</Drawer>
				</>
			)}
		</>
	)
}

export default DrawerComponent
