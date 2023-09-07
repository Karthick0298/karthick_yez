import React, {useState, useEffect, useCallback} from 'react'
import {List, ListItemIcon, ListItemText, Card, CardContent, Typography} from '@material-ui/core'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import MuiListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-scroll'
import Image from 'next/image'
import Links from 'next/link'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import secureLocalStorage from 'react-secure-storage'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
	'@global': {
		'::-webkit-scrollbar': {
			width: 5,
		},

		/* Handle */
		'::-webkit-scrollbar-thumb': {
			background: '#00000040',
			borderRadius: 50,
		},

		/* Handle on hover */
		'::-webkit-scrollbar-thumb:hover': {
			background: '#00000040',
		},
	},
	position: {
		position: 'fixed',
		left: 12,
		bottom: 0,
		top: 0,
		transform: 'translateY(78px)',
		zIndex: 9999,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},

		'@global': {
			'::-webkit-scrollbar': {
				width: 6,
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#7047EA00',
				borderRadius: 50,
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: '#7047EA00',
			},
		},
	},
	navigation: {
		overflowY: 'scroll',
		position: 'relative',
		borderRadius: 26,
		height: '86vh',
		width: 70,
		background: '#7047EA',
		overflowX: 'hidden',
		transition: 'width 0.5s',
		'& .MuiTypography-h5': {
			display: 'none',
		},
		'&:hover': {
			width: 324,
			'& .MuiSvgIcon-root': {
				display: 'none',
			},
			'& .MuiTypography-h5': {
				display: 'block',
			},
		},
		'& .MuiList-root': {
			position: 'absolute',
			width: '100%',
			paddingBlockStart: 52,
			paddingLeft: 4,
			paddingInlineStart: 9,
			paddingInlineEnd: 4,
		},
		'& .MuiListItem-button': {
			position: 'relative',
			color: '#fff',
			borderRadius: 12,
			// paddingLeft: 12,
			overflowX: 'hidden',
			'&:hover': {
				backgroundColor: '#a775ff62',
			},
			'& .MuiTypography-body1': {
				color: '#fff',
				whiteSpace: 'nowrap',
			},
			'& .MuiListItem-root': {
				paddingBottom: 4,
			},
		},
		'& .MuiListItem-gutters': {
			paddingLeft: 12,
			paddingRight: 12,
		},
	},
	scroll: {
		display: 'contents',
		'& .MuiListItem-root': {
			paddingtop: 4,
			marginBottom: 10,
		},
	},
	scrollIcon: {
		display: 'flex',
		paddingInline: 4,
		'& .MuiListItemIcon-root': {
			minWidth: 30,
		},
	},
	root: {
		margin: 32,
		backgroundColor: '#CB212187',
		borderRadius: 24,
		boxShadow: 'none',
		'& .MuiTypography-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			color: '#fff',
		},
		'& .MuiCardContent-root:last-child': {
			paddingBottom: 14,
		},
		'& .MuiTypography-subtitle2': {
			fontSize: 13,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			color: '#fff',
		},
		'& .MuiAvatar-root': {
			position: 'absolute',
			marginTop: -34,
			left: 134,
		},
	},
	iconList: {
		display: 'flex',
		paddingBlockStart: 52,
		paddingInlineStart: 3,
	},
	TextHeading: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			color: '#fff',
		},
		'& .MuiSvgIcon-root': {
			color: '#fff',
		},
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

function Sidebar({
	display,
	CareIcon,
	CareText,
	FitnessText,
	MindText,
	SportsText,
	SpaText,
	CareLink,
	FitnessLink,
	MindLink,
	SportsLink,
	SpaLink,
	FitnessIcon,
	MindIcon,
	SportsIcon,
	SpaIcon,
	Care,
	Fitness,
	Mind,
	Sports,
	Spa,
	ShoppingCart,
	Live,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Heading7,
	doctors,
	nurse,
	dietician,
	physiotherapy,
	consult,
	lab,
	store,
}) {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [selectedIcon, setSelectedIcon] = useState(0)
	const [selectedColor1, setSelectedColor1] = useState('')
	const [selectedColor2, setSelectedColor2] = useState('')
	const [selectedColor3, setSelectedColor3] = useState('')
	const [selectedColor4, setSelectedColor4] = useState('')
	const [selectedColor5, setSelectedColor5] = useState('')
	const [menuBarList, setMenuBarList] = useState([])
	const handleListIcon = (event, index, val) => {
		setSelectedIcon(index)
		if (val?.b2cMenuName === 'Care') {
			secureLocalStorage.setItem('Current_mastTentGroupUuid', careIcon?.mastTentGroupUuid)
		} else if (val?.b2cMenuName === 'Fitness') {
			secureLocalStorage.setItem('Current_mastTentGroupUuid', fitnessIcon?.mastTentGroupUuid)
		} else if (val?.b2cMenuName === 'Mind') {
			secureLocalStorage.setItem('Current_mastTentGroupUuid', mindIcon?.mastTentGroupUuid)
		} else if (val?.b2cMenuName === 'Sports') {
			secureLocalStorage.setItem('Current_mastTentGroupUuid', sportsIcon?.mastTentGroupUuid)
		} else if (val?.b2cMenuName === 'Spa and Wellness') {
			secureLocalStorage.setItem('Current_mastTentGroupUuid', spaIcon?.mastTentGroupUuid)
		}
	}
	const handleListItemClick = (event, index, background) => {
		setSelectedIndex(index)
		setSelectedColor1(background)
		setSelectedColor2(background)
		setSelectedColor3(background)
		setSelectedColor4(background)
		setSelectedColor5(background)
	}
	const classes = useStyles()

	return (
		<div className={classes.position}>
			<div
				className={classes.navigation}
				style={{
					background: selectedColor1,
					background: selectedColor2,
					background: selectedColor3,
					background: selectedColor4,
					background: selectedColor5,
				}}>
				{/* Side Bar Row Menu Icons */}
				<div className={classes.iconList} style={{display: display}}>
					{menuBarList.map(val => {
						return (
							<>
								<div className={classes.TextHeading}>
									<div>
										<Link
											activeClass={
												val?.b2cMenuName === 'Care'
													? 'active'
													: val?.b2cMenuName === 'Fitness'
													? 'active'
													: val?.b2cMenuName === 'Mind'
													? 'active'
													: val?.b2cMenuName === 'Sports'
													? 'active'
													: val?.b2cMenuName === 'Spa and Wellness'
													? 'active'
													: null
											}
											to={val?.b2cMenuName}
											spy={true}
											smooth={true}
											offset={-60}
											duration={500}
											className={classes.scrollIcon}>
											<ListItem
												button
												selected={
													val?.b2cMenuName === 'Care'
														? selectedIndex === 0
														: val?.b2cMenuName === 'Fitness'
														? selectedIndex === 1
														: val?.b2cMenuName === 'Mind'
														? selectedIndex === 2
														: val?.b2cMenuName === 'Sports'
														? selectedIndex === 3
														: val?.b2cMenuName === 'Spa and Wellness'
														? selectedIndex === 4
														: null
												}
												onClick={event =>
													handleListIcon(
														event,
														val?.b2cMenuName === 'Care'
															? 0
															: val?.b2cMenuName === 'Fitness'
															? 1
															: val?.b2cMenuName === 'Mind'
															? 2
															: val?.b2cMenuName === 'Sports'
															? 3
															: val?.b2cMenuName === 'Spa and Wellness'
															? 4
															: null,
														val
													)
												}>
												<Links
													href={
														val?.b2cMenuName === 'Care'
															? CareLink
															: val?.b2cMenuName === 'Fitness'
															? FitnessLink
															: val?.b2cMenuName === 'Mind'
															? MindLink
															: val?.b2cMenuName === 'Sports'
															? SportsLink
															: val?.b2cMenuName === 'Spa and Wellness'
															? SpaLink
															: '/'
													}>
													<ListItemIcon>
														<Image
															alt='icon'
															src={
																val?.b2cMenuName === 'Care'
																	? CareIcon || careIcon?.imageUrl
																	: val?.b2cMenuName === 'Fitness'
																	? FitnessIcon || fitnessIcon?.imageUrl
																	: val?.b2cMenuName === 'Mind'
																	? MindIcon || mindIcon?.imageUrl
																	: val?.b2cMenuName === 'Sports'
																	? SportsIcon || sportsIcon?.imageUrl
																	: val?.b2cMenuName === 'Spa and Wellness'
																	? SpaIcon || spaIcon?.imageUrl
																	: null
															}
															width={24}
															height={24}
														/>
													</ListItemIcon>
												</Links>
											</ListItem>
										</Link>
									</div>
									<ArrowDropDownIcon />
									<Typography variant='h5'>
										{val?.b2cMenuName === 'Care'
											? CareText
											: val?.b2cMenuName === 'Fitness'
											? FitnessText
											: val?.b2cMenuName === 'Mind'
											? MindText
											: val?.b2cMenuName === 'Sports'
											? SportsText
											: val?.b2cMenuName === 'Spa and Wellness'
											? SpaText
											: ''}
									</Typography>
								</div>
							</>
						)
					})}
					{/* <div className={classes.TextHeading}>
						<div>
							<Link activeClass='active' to='Care' spy={true} smooth={true} offset={-60} duration={500} className={classes.scrollIcon}>
								<ListItem button selected={selectedIcon === 0} onClick={event => handleListIcon(event, 0)}>
									<Links href={CareLink}>
										<ListItemIcon>
											<Image alt='icon' src={CareIcon} width={24} height={24} />
										</ListItemIcon>
									</Links>
								</ListItem>
							</Link>
						</div>
						<ArrowDropDownIcon />
						<Typography variant='h5'>{CareText}</Typography>
					</div>
					<div className={classes.TextHeading}>
						<div>
							<Link activeClass='active' to='Fitness' spy={true} smooth={true} offset={-60} duration={500} className={classes.scrollIcon}>
								<ListItem button selected={selectedIcon === 1} onClick={event => handleListIcon(event, 1)}>
									<Links href={FitnessLink}>
										<ListItemIcon>
											<Image alt='icon' src={FitnessIcon} width={24} height={24} />
										</ListItemIcon>
									</Links>
								</ListItem>
							</Link>
						</div>
						<Typography variant='h5'>{FitnessText}</Typography>
					</div>
					<div className={classes.TextHeading}>
						<div>
							<Link activeClass='active' to='Mind' spy={true} smooth={true} offset={-60} duration={500} className={classes.scrollIcon}>
								<ListItem button selected={selectedIcon === 2} onClick={event => handleListIcon(event, 2)}>
									<Links href={MindLink}>
										<ListItemIcon>
											<Image alt='icon' src={MindIcon} width={24} height={24} />
										</ListItemIcon>
									</Links>
								</ListItem>
							</Link>
						</div>
						<Typography variant='h5'>{MindText}</Typography>
					</div>
					<div className={classes.TextHeading}>
						<div>
							<Link activeClass='active' to='Sports' spy={true} smooth={true} offset={-60} duration={500} className={classes.scrollIcon}>
								<ListItem button selected={selectedIcon === 3} onClick={event => handleListIcon(event, 3)}>
									<Links href={SportsLink}>
										<ListItemIcon>
											<Image alt='icon' src={SportsIcon} width={24} height={24} />
										</ListItemIcon>
									</Links>
								</ListItem>
							</Link>
						</div>
						<Typography variant='h5'>{SportsText}</Typography>
					</div>
					<div className={classes.TextHeading}>
						<div>
							<Link activeClass='active' to='Spa and Wellness' spy={true} smooth={true} offset={-60} duration={500} className={classes.scrollIcon}>
								<ListItem button selected={selectedIcon === 4} onClick={event => handleListIcon(event, 4)}>
									<Links href={SpaLink}>
										<ListItemIcon>
											<Image alt='icon' src={SpaIcon} width={24} height={24} />
										</ListItemIcon>
									</Links>
								</ListItem>
							</Link>
						</div>
						<Typography variant='h5'>{SpaText}</Typography>
					</div> */}
				</div>
				{/* End of Side Bar Row Menu Icons */}

				{/* Landing Page Menu's */}
				<List>
					{menuBarList.map(val => {
						return (
							<>
								<Link
									activeClass={
										val?.b2cMenuName === 'Care' && selectedIndex === 0
											? 'active'
											: val?.b2cMenuName === 'Fitness' && selectedIndex === 1
											? 'active'
											: val?.b2cMenuName === 'Mind' && selectedIndex === 2
											? 'active'
											: val?.b2cMenuName === 'Sports' && selectedIndex === 3
											? 'active'
											: val?.b2cMenuName === 'Spa and Wellness' && selectedIndex === 4
											? 'active'
											: null
									}
									to={val?.b2cMenuName}
									spy={true}
									smooth={true}
									offset={-60}
									duration={500}
									className={classes.scroll}>
									<ListItem
										button
										selected={
											val?.b2cMenuName === 'Care'
												? selectedIndex === 0
												: val?.b2cMenuName === 'Fitness'
												? selectedIndex === 1
												: val?.b2cMenuName === 'Mind'
												? selectedIndex === 2
												: val?.b2cMenuName === 'Sports'
												? selectedIndex === 3
												: val?.b2cMenuName === 'Spa and Wellness'
												? selectedIndex === 4
												: null
										}
										onClick={event =>
											handleListItemClick(
												event,
												val?.b2cMenuName === 'Care'
													? 0
													: val?.b2cMenuName === 'Fitness'
													? 1
													: val?.b2cMenuName === 'Mind'
													? 2
													: val?.b2cMenuName === 'Sports'
													? 3
													: val?.b2cMenuName === 'Spa and Wellness'
													? 4
													: null,
												val?.b2cMenuName === 'Care'
													? '#7047EA'
													: val?.b2cMenuName === 'Fitness'
													? '#20202C'
													: val?.b2cMenuName === 'Mind'
													? '#0CC593'
													: val?.b2cMenuName === 'Sports'
													? '#FF2083'
													: val?.b2cMenuName === 'Spa and Wellness'
													? '#0693EA'
													: '#7047EA'
											)
										}>
										<ListItemIcon>
											<Image alt='icon' src={val?.imageUrl} width={24} height={24} />
										</ListItemIcon>
										<Links
											href={
												val?.b2cMenuName === 'Care'
													? doctors
													: val?.b2cMenuName === 'Fitness'
													? nurse
													: val?.b2cMenuName === 'Mind'
													? dietician
													: val?.b2cMenuName === 'Sports'
													? physiotherapy
													: val?.b2cMenuName === 'Spa and Wellness'
													? consult
													: '/'
											}>
											<ListItemText
												primary={
													val?.b2cMenuName === 'Care'
														? Heading1
														: val?.b2cMenuName === 'Fitness'
														? Heading2
														: val?.b2cMenuName === 'Mind'
														? Heading3
														: val?.b2cMenuName === 'Sports'
														? Heading4
														: val?.b2cMenuName === 'Spa and Wellness'
														? Heading5
														: ''
												}></ListItemText>
										</Links>
									</ListItem>
								</Link>
							</>
						)
					})}
					<ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
						<ListItemIcon>
							<Image alt='icon' src={ShoppingCart} width={24} height={24} />
						</ListItemIcon>
						<Links href={lab}>
							<ListItemText primary={Heading6} />
						</Links>
					</ListItem>
					<ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6)}>
						<ListItemIcon>
							<Image alt='icon' src={Live} width={24} height={24} />
						</ListItemIcon>
						<Links href={store}>
							<ListItemText primary={Heading7} />
						</Links>
					</ListItem>
					<Card className={classes.root}>
						<CardContent>
							<Avatar alt='Remy Sharp' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/avatar.png' />
							<Typography variant='subtitle1'>Become a PRO</Typography>
							<Typography variant='h6'>Save up to 60% off on your health care expenses</Typography>
						</CardContent>
					</Card>
				</List>
				{/* ----------------------------------------------- */}
				{/* <List>
					<Link activeClass='active' to='Care' spy={true} smooth={true} offset={-60} duration={500} className={classes.scroll}>
						<ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0, '#7047EA')}>
							<ListItemIcon>
								<Image alt='icon' src={Care} width={24} height={24} />
							</ListItemIcon>
							<Links href={doctors}>
								<ListItemText primary={Heading1}></ListItemText>
							</Links>
						</ListItem>
					</Link>
					<Link activeClass='active' to='Fitness' spy={true} smooth={true} duration={500} className={classes.scroll}>
						<ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1, '#20202C')}>
							<ListItemIcon>
								<Image alt='icon' src={Fitness} width={24} height={24} />
							</ListItemIcon>
							<Links href={nurse}>
								<ListItemText primary={Heading2} />
							</Links>
						</ListItem>{' '}
					</Link>
					<Link activeClass='active' to='Yoga' spy={true} smooth={true} duration={500} className={classes.scroll}>
						<ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2, '#0CC593')}>
							<ListItemIcon>Yoga
								<Image alt='icon' src={Yoga} width={24} height={24} />
							</ListItemIcon>
							<Links href={dietician}>
								<ListItemText primary={Heading3} />
							</Links>
						</ListItem>{' '}
					</Link>
					<Link activeClass='active' to='Sports' spy={true} smooth={true} duration={500} className={classes.scroll}>
						<ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3, '#FF2083')}>
							<ListItemIcon>
								<Image alt='icon' src={Sports} width={24} height={24} />
							</ListItemIcon>
							<Links href={physiotherapy}>
								<ListItemText primary={Heading4} />
							</Links>
						</ListItem>
					</Link>
					<Link activeClass='active' to='Spa' spy={true} smooth={true} duration={500} className={classes.scroll}>
						<ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4, '#0693EA')}>
							<ListItemIcon>
								<Image alt='icon' src={Spa} width={24} height={24} />
							</ListItemIcon>
							<Links href={consult}>
								<ListItemText primary={Heading5} />
							</Links>
						</ListItem>
					</Link>
					<ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
						<ListItemIcon>
							<Image alt='icon' src={ShoppingCart} width={24} height={24} />
						</ListItemIcon>
						<Links href={lab}>
							<ListItemText primary={Heading6} />
						</Links>
					</ListItem>
					<ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6)}>
						<ListItemIcon>
							<Image alt='icon' src={Live} width={24} height={24} />
						</ListItemIcon>
						<Links href={store}>
							<ListItemText primary={Heading7} />
						</Links>
					</ListItem>
					<Card className={classes.root}>
						<CardContent>
							<Avatar alt='Remy Sharp' src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/avatar.png' />
							<Typography variant='subtitle1'>Become a PRO</Typography>
							<Typography variant='h6'>Save up to 60% off on your health care expenses</Typography>
						</CardContent>
					</Card>
				</List> */}
				{/*End of  Landing Page Menu's */}
			</div>
		</div>
	)
}

export default Sidebar
