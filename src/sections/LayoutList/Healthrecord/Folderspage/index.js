import {makeStyles, Typography, IconButton} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import React, {useEffect, useState} from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import FolderIcon from '@material-ui/icons/Folder'
import {useRouter} from 'next/router'
import HealthRecords from '../../../../../Service/MyAccount/HealthRecords'
import _ from 'lodash'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import secureLocalStorage from 'react-secure-storage'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'

const useStyles = makeStyles(theme => ({
	arrowIconWrapper: {
		boxShadow: '0px 3px 6px #00000026',
		border: '1px solid #FFFFFF80',
		backdropFilter: 'blur(30px)',
		background: 'transparent linear-gradient(132deg, #FFFFFFCC 0%, #FFFFFFB3 100%) 0% 0% no-repeat padding-box',
		position: 'absolute',
		zIndex: '9',
		padding: 8,
		transform: 'translate(-17px,20px)',
		// '&:hover': {
		// 	backgroundColor: theme.palette.care.dark,
		// 	'& .MuiSvgIcon-root': {
		// 		fill: '#FFFFFF80',
		// 	},
		// },
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	arrowIcon: {
		color: '#6F6F6F',
		fontSize: 12,
	},
	folderSection: {
		padding: '51px 38px',
		display: 'flex',
		gap: 45,
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		'& .MuiPaper-root': {
			backgroundColor: '#E7E4F2',
			boxShadow: '0px 10px 22px #0000000D',
			borderRadius: 20,
			opacity: 1,
		},
		'& .MuiSvgIcon-root': {
			fontSize: '3.5rem',
		},
		'& .MuiCardContent-root': {
			width: 172,
			height: 172,
			[theme.breakpoints.down('xs')]: {
				width: 127,
				height: 148,
			},
			[theme.breakpoints.up('sm')]: {
				width: 150,
				height: 172,
			},
		},
		[theme.breakpoints.down('xs')]: {
			padding: 7,
			gap: 12,
			justifyContent: 'space-evenly',
			paddingBlockStart: 24,
		},
		[theme.breakpoints.up('sm')]: {
			gap: 12,
			padding: '40px 27px',
			justifyContent: 'space-evenly',
		},
		[theme.breakpoints.up('md')]: {
			gap: 29,
			padding: '40px 18px',
			justifyContent: 'flex-start',
		},
	},
	textoneStyle: {
		fontFamily: theme.typography.h5.fontFamily,
		fontWeight: 500,
		letterSpacing: 1,
		color: '#475677',
		opacity: 1,
		fontSize: theme.typography.h5.fontSize,
		paddingTop: 18,
		paddingLeft: 6,
		[theme.breakpoints.down('xs')]: {
			fontSize: 13,
		},
	},
	texttwoStyle: {
		textAlign: 'left',
		font: 'normal normal normal 14px/21px Poppins',
		letterSpacing: 0.7,
		color: '#475677',
		opacity: 0.7,
		fontSize: 12,
		paddingLeft: 6,
		[theme.breakpoints.down('xs')]: {
			fontSize: 8,
		},
	},
}))

export function stringToHslColor(str, s = 50, l = 50, a = 1) {
	let hash = 0
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 6) - hash)
	}
	var h = Math.abs(hash % 360)
	return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')'
}

function HealthCard(props) {
	const {toggleState, setToggleState} = props
	const [list, setList] = useState()
	const [category, setCategory] = useState()
	const [loading, setLoading] = useState(true)
	const classes = useStyles()
	const router = useRouter()
	const {currency} = router.query
	const custUuid = typeof window !== 'undefined' ? secureLocalStorage.getItem('custUuid') : ''
	const {practiceName} = useAuth()

	useEffect(() => {
		if (custUuid) {
			setTimeout(() => {
				HealthRecords.HealthRecordsDetails()
					.then(response => {
						setLoading(false)
						setList(response.data.data.healthRecordResponseList)
						const ClinicalNotes = response.data.data.CLINICAL_NOTES
						const VitalSign = response.data.data.VITAL_SIGN.map(data => data.uuid)
						const Prescriptions = response.data.data.PRESCRIPTIONS
						secureLocalStorage.setItem('ClinicalNotes', ClinicalNotes)
						secureLocalStorage.setItem('VitalSign', VitalSign)
						secureLocalStorage.setItem('Prescriptions', Prescriptions)
					})
					.catch(err => {
						console.log(err)
					})
			})
		}
	}, [practiceName, custUuid])

	// Handling Toggling btn Menu List and Menu List Content
	const handleToggle = () => {
		setToggleState(!toggleState)
	}

	return (
		<>
			<IconButton className={classes.arrowIconWrapper} onClick={handleToggle}>
				{toggleState ? <ArrowForwardIosRoundedIcon className={classes.arrowIcon} /> : <ArrowBackIosRoundedIcon className={classes.arrowIcon} />}
			</IconButton>
			<div className={classes.folderSection}>
				{!_.isEmpty(list) &&
					list?.map(item => (
						<Card
							className={classes.root}
							onClick={() =>
								router.push({
									pathname: _.toLower(_.join(_.split(item.folderName, ' '), '')),
									query: {uuid: item.categoryUuid, document: item.folderName},
								})
							}
							key={item?.categoryUuid}>
							<CardActionArea>
								<CardContent>
									<FolderIcon style={{fill: item.hexCode}}></FolderIcon>
									<Typography className={classes.textoneStyle}>{item.folderName}</Typography>
									<Typography className={classes.texttwoStyle}>{item.size} files</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				{/* <div>
				<Card
					className={classes.root}
					onClick={() =>
						router.push({
							pathname: 'clinicalnotesdetail',
							query: {uuid: '5o7obl13'},
						})
					}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#8724D2'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>ClinicalNotes</Typography>
							<Typography className={classes.texttwoStyle}>{list?.CLINICAL_NOTES?.map(item => item.uuid)}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div> */}
				{/* <div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=3', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#1858F8'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Prescriptions</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=4', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#F818BC'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Lab Orders</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=5', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#18F818'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Treatment Plan</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=6', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#F81864'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Completed Procedure</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=7', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#18F818'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Workout Plan</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=8', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#F81864'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Diet Plan</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>{' '}
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=9', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#18F818'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Workout Plan</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div>
				<Card className={classes.root} onClick={() => router.push('/myaccount/vitialsigndetails/?healthrecords=10', null, {shallow: true})}>
					<CardActionArea>
						<CardContent>
							<FolderIcon style={{fill: '#F81864'}}></FolderIcon>
							<Typography className={classes.textoneStyle}>Diet Plan</Typography>
							<Typography className={classes.texttwoStyle}>24 files</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div> */}
			</div>
		</>
	)
}
export default HealthCard
