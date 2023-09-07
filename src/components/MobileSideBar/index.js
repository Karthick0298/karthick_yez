/* eslint-disable max-len */
import React, {useState} from 'react'
import {List, ListItemIcon, ListItemText} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import MuiListItem from '@material-ui/core/ListItem'
import {Link} from 'react-scroll'
import Image from 'next/image'
const useStyles = makeStyles(theme => ({
	mainPosition: {
		position: 'fixed',
		zIndex: 3,
		bottom: 0,
		transform: 'translateY(-5%)',
		left: 24,
		right: 24,
		background: '#7047EA',
		borderRadius: 24,
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	position: {
		height: 45,
		overflowX: 'hidden',
		overflowY: 'hidden',
		transition: 'height 0.50s',
		transform: 'translateY(-15px)',
		'&:hover': {
			height: '280px',
		},
		'& .MuiIconButton-root': {
			color: '#fff',
		},

		'& .MuiListItem-root': {
			flexWrap: 'wrap',
			flexDirection: 'column',
			justifyContent: 'center',
			borderRadius: 12,
		},
		'& .MuiTypography-body1': {
			color: '#fff',
			fontSize: theme.typography.h6.fontSize,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: theme.typography.h6.fontWeight,
		},
	},
	navigation: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		// flexDirection: 'row-reverse',
		'& .MuiListItem-button': {
			display: 'flex',
			flexDirection: 'column',
			gap: 12,
		},
		'& .MuiListItemIcon-root': {
			justifyContent: 'center',
			borderRadius: 12,
		},
		'& .MuiTypography-body1': {
			color: '#fff',
			fontSize: theme.typography.h6.fontSize,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: theme.typography.h6.fontWeight,
		},
		'& .MuiListItem-gutters': {},
	},
	expandicon: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		transform: 'translate(-5px, -16px)',
		background: '#7047EA',
		clipPath: 'circle(6% at 50% 50%)',
		position: 'relative',
	},
}))
const ListItem = withStyles({
	root: {
		'&$selected': {
			backgroundColor: '#a775ff62',
		},
	},
	selected: {},
})(MuiListItem)

function MobileSideBar() {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [icon, SetIcon] = useState(false)
	const handleListItemClick = (event, index) => {
		setSelectedIndex(index)
	}
	const handleclick = () => {
		SetIcon(!icon)
	}

	const classes = useStyles()
	return (
		<div className={classes.mainPosition} onClick={handleclick}>
			<div className={classes.expandicon}>{icon ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
			<div className={classes.position}>
				<div className={classes.navigation}>
					<List>
						<Link activeClass='active' to='Care' spy={true} smooth={true} offset={-60} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
								<ListItemIcon>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/care.svg' alt='care' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Health Care' />
							</ListItem>
						</Link>
					</List>
					<List>
						<Link activeClass='active' to='Mind' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
								<ListItemIcon>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg' alt='mind' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Wellness' />
							</ListItem>
						</Link>
					</List>
					<List>
						<Link activeClass='active' to='Fitness' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
								<ListItemIcon>
									<Image src='Https://sit.rigelsoft.com/web/bo/uploads/b2cmenu/web/230119095203b2cmenu.png' alt='fitness' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Fitness' />
							</ListItem>
						</Link>
					</List>
					<List>
						<Link activeClass='active' to='Sports' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
								<ListItemIcon>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg' alt='sport' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Sports' />
							</ListItem>
						</Link>
					</List>

					{/* <List>
						<Link activeClass='active' to='Spa' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4)}>
								<ListItemIcon>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg' alt='spa' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Spa & Wellness' />
							</ListItem>
						</Link>
					</List> */}

					<List>
						<Link activeClass='active' to='Store' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
								<ListItemIcon>
									<Image src='Https://sit.rigelsoft.com/web/bo/uploads/b2cmenu/web/211201010806b2cmenu.svg' alt='stpre' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Store' />
							</ListItem>
						</Link>
					</List>

					{/* <List>
						<Link activeClass='active' to='Fitness' spy={true} smooth={true} duration={500} className={classes.scroll}>
							<ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6)}>
								<ListItemIcon>
									<Image src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/Icon material-live-tv.svg' alt='liveTv' width={24} height={24} />
								</ListItemIcon>
								<ListItemText primary='Live' />
							</ListItem>
						</Link>
					</List> */}
				</div>
			</div>
		</div>
	)
}

export default MobileSideBar
