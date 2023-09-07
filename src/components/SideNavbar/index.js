/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react'
import useStyles from './style'
import {List, ListItemIcon, Typography, Card, CardContent, Avatar, withStyles} from '@material-ui/core'
import MuiListItem from '@material-ui/core/ListItem'
import Image from 'next/image'
import Links from 'next/link'
import {Link} from 'react-scroll'
import _ from 'lodash'
import getMenuListApi from '../../../Service/SideNavbar'
import useContextApi from '../../../lib/Utils/hooks/useContextApi'

const ListItem = withStyles({
	root: {
		'&$selected': {
			background: '#FFFFFF33 0% 0% no-repeat padding-box',
		},
	},

	selected: {},
})(MuiListItem)

const SideNavbar = ({navigationQuery}) => {
	console.log('navigationQuery', navigationQuery)
	// context api data
	const {
		setLoading,
		mainMenuList,
		setMainMenuList,
		rowMenuList,
		setRowMenuList,
		careMenuList,
		setCareMenuList,
		fitnessMenuList,
		setFitnessMenuList,
		mindMenuList,
		setMindMenuList,
		sportsMenuList,
		setSportsMenuList,
		spaMenuList,
		setSpaMenuList,
	} = useContextApi()

	const classes = useStyles()
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [backgroundColor, setBackgroundColor] = useState('#7047EA')
	const [menuList, setMenuList] = useState([])
	const [navigateState, setNavigateState] = useState(false)
	const [rowMenuState, setRowMenuState] = useState(false)

	// Getting Current URL Path
	const currentPath = typeof window !== 'undefined' ? window.location.pathname : null
	const pathName = currentPath && currentPath?.split('/')?.pop()
	// Shuffling Row Menu
	const formattedRowMenu = rowMenuList.sort(function(a, b) {
		return (a.menuPath !== pathName) - (b.menuPath !== pathName)
	})

	// Side menu bar handling BG color and current Index
	const handleMenuList = (event, currentIndex, currentBgColor, currentName) => {
		setSelectedIndex(currentIndex)
		setBackgroundColor(currentBgColor)
	}

	// Handling Random Menu List
	const dynamicState = () => {
		if (pathName === '') {
			setMenuList(mainMenuList)
		} else if (pathName === 'marketplace') {
			setMenuList(mainMenuList)
		} else if (pathName === 'care') {
			setMenuList(careMenuList)
			setRowMenuState(true)
			setBackgroundColor('#7047EA')
		} else if (pathName === 'fitness') {
			setMenuList(fitnessMenuList)
			setRowMenuState(true)
			setBackgroundColor('#0095EB')
		} else if (pathName === 'mind') {
			setMenuList(mindMenuList)
			setRowMenuState(true)
			setBackgroundColor('#0CC593')
		} else if (pathName === 'spawellness') {
			setMenuList(spaMenuList)
			setRowMenuState(true)
			setBackgroundColor('#E1087E')
		} else if (pathName === 'sports') {
			setMenuList(sportsMenuList)
			setRowMenuState(true)
			setBackgroundColor('#EF5618')
		} else {
			setMenuList(mainMenuList)
			setNavigateState(true)
			setRowMenuState(false)
			setBackgroundColor('#7047EA')
		}
	}

	// const [menuPaths, setMenuPaths] = useState([])

	// useEffect(() => {
	// 	const paths = _.map(menuList, item => item?.menuPath)

	// 	setMenuPaths(paths)
	// }, [menuList])

	useEffect(() => {
		dynamicState()
	}, [pathName, dynamicState])

	// Get SideNavbar mainMenu Api
	const getMainMenu = useCallback(() => {
		const onSuccess = res => {
			setLoading(true)
			if (res?.data?.status === 'success') {
				let sortedMenu = _.sortBy(res?.data?.data, ['b2cMenuOrder', 'asc'])
				setMainMenuList(sortedMenu)
				let findSpa = sortedMenu?.map(item => (item?.mastTentGroupUuid === 'irokb9b8' ? {...item, b2cMenuName: 'Spa'} : item))
				let rowMenu = findSpa?.filter(data => data?.isRowMenu === true)
				setRowMenuList(rowMenu)
				setLoading(false)
			} else {
				setLoading(false)
				setMainMenuList([])
				setRowMenuList([])
			}
		}
		const onFailure = err => {
			setLoading(false)
		}
		getMenuListApi.getMenuList('mainmenu').then(onSuccess, onFailure)
	}, [])
	useEffect(() => {
		getMainMenu()
	}, [getMainMenu])

	// Get SideNavbar subMenu Api
	// const getSubMenu = useCallback(() => {
	// 	setLoading(true)
	// 	const onSuccess = res => {
	// 		setLoading(false)
	// 		if (res?.data?.status === 'success') {
	// 			let careList = res?.data?.data?.filter(data => data?.mastTentGroupUuid === 'fyi6pmtm')
	// 			let careSortedMenu = _.sortBy(careList, ['b2cMenuOrder', 'asc'])
	// 			setCareMenuList(careSortedMenu)
	// 			let fitnessList = res?.data?.data?.filter(data => data?.mastTentGroupUuid === 'e7z11j8m')
	// 			let fitnessSortedMenu = _.sortBy(fitnessList, ['b2cMenuOrder', 'asc'])
	// 			setFitnessMenuList(fitnessSortedMenu)
	// 			let mindList = res?.data?.data?.filter(data => data?.mastTentGroupUuid === '2nzdfwug')
	// 			let mindSortedMenu = _.sortBy(mindList, ['b2cMenuOrder', 'asc'])
	// 			setMindMenuList(mindSortedMenu)
	// 			let sportsList = res?.data?.data?.filter(data => data?.mastTentGroupUuid === 'ztyxtevg')
	// 			let sportsSortedMenu = _.sortBy(sportsList, ['b2cMenuOrder', 'asc'])
	// 			setSportsMenuList(sportsSortedMenu)
	// 			let spaList = res?.data?.data?.filter(data => data?.mastTentGroupUuid === 'irokb9b8')
	// 			let spaSortedMenu = _.sortBy(spaList, ['b2cMenuOrder', 'asc'])
	// 			setSpaMenuList(spaSortedMenu)
	// 			setLoading(false)
	// 		} else {
	// 			setLoading(false)
	// 			setCareMenuList([])
	// 			setFitnessMenuList([])
	// 			setMindMenuList([])
	// 			setSportsMenuList([])
	// 			setSpaMenuList([])
	// 		}
	// 	}
	// 	const onFailure = err => {
	// 		console.log('Sub Menu List', err)
	// 		setLoading(false)
	// 	}
	// 	getMenuListApi.getMenuList('submenu').then(onSuccess, onFailure)
	// }, [])

	// useEffect(() => {
	// 	getSubMenu()
	// }, [getSubMenu])

	useEffect(() => {
		if (navigationQuery) {
			navigationQuery === 'care' && document.getElementById('care').scrollIntoView(true)
			navigationQuery === 'fitness' && document.getElementById('fitness').scrollIntoView(true)
			navigationQuery === 'mind' && document.getElementById('mind').scrollIntoView(true)
			// navigationQuery === 'spawellness' && document.getElementById('spawellness').scrollIntoView(true)
			navigationQuery === 'sports' && document.getElementById('sports').scrollIntoView(true)
			navigationQuery === 'store' && document.getElementById('store').scrollIntoView(true)
		}
	}, [navigationQuery])
	console.log('menuList', menuList, navigationQuery)
	return (
		<>
			<div className={classes.scrollBarContainer}>
				<section className={classes.root} style={{backgroundColor: backgroundColor}}>
					{/* Top Row Menu bar  */}
					{/* <section style={rowMenuState ? {display: 'block'} : {display: 'none'}} className={classes.rowMenuRoot}>
						<List component='nav' className={classes.rowNavBar}>
							{formattedRowMenu?.map((item, idx) => {
								return (
									<Links href={`/${item?.menuPath}`} key={item?.b2cMenuOrder}>
										<ListItem className={classes.listWrap} button selected={idx === 0}>
											<section className={classes.rowMenuContent}>
												<Image alt='icon' src={item?.imageUrl} width={24} height={24} />
												<Typography variant='h5'>{item?.b2cMenuName}</Typography>
											</section>
										</ListItem>
									</Links>
								)
							})}
						</List>
					</section> */}

					{/* Side menu bar */}
					<List component='nav' className={classes.sideNavBar}>
						{menuList?.map((data, idx) => (
							<Link
								key={data?.b2cMenuName}
								onSetActive={event => {
									handleMenuList(event, idx, data?.colourCode)
								}}
								activeClass={'activeMenu'}
								to={data?.menuPath}
								spy={true}
								duration={500}
								offset={-60}
								// offset={'72px'}
								smooth={true}
								className={classes.scrollLink}>
								{/* Other Page navigation */}
								{/* `/${data?.menuPath}` */}
								{navigateState ? (
									<Links href={'/marketplace'}>
										<ListItem button selected={idx === selectedIndex} onClick={event => handleMenuList(event, idx, data?.colourCode)}>
											<ListItemIcon>
												<Image alt='icon' src={data?.imageUrl} width={24} height={24} />
											</ListItemIcon>
											<Typography variant='h5'>{data?.b2cMenuName}</Typography>
										</ListItem>
									</Links>
								) : (
									// sections to sectios navigation menu
									<ListItem
										key={data?.b2cMenuName}
										activeClass={'activeMenu'}
										button
											onClick={event => {
											console.log('data', data?.menuPath)
											handleMenuList(event, idx, data?.colourCode, data?.b2cMenuName)
										}}>
										<ListItemIcon>
											<Image alt='icon' src={data?.imageUrl} width={24} height={24} />
										</ListItemIcon>
										<Typography variant='h5'>{data?.b2cMenuName}</Typography>
									</ListItem>
								)}
							</Link>
						))}
					</List>
				</section>
			</div>
		</>
	)
}

export default SideNavbar
