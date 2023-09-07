import {makeStyles, Divider, Typography} from '@material-ui/core'
import Image from 'next/image'
import moment from 'moment'
import ReadMore from '../../ProfileDetailsTabView/QuestionAnsTab/ReadMore'
import ReadMoreWrapper from '../../ReadMoreWrapper'

const useStyles = makeStyles(theme => ({
	root: {
		// border: '1px solid black',
		padding: 10,
	},

	mainContain: {
		display: 'flex',
		gap: 10,
		alignItems: 'flex-start',
	},
	content: {
		width: '100%',
	},
	listQuery: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		paddingBlock: 12,

		'& .MuiTypography-body1': {
			color: '#475677',
			fontFamily: 'poppins',
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	listName: {
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiTypography-h5': {
			fontWeight: 500,
			color: '#2A2A2A5C',
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			fontStyle: 'normal',
			fontWeight: 500,
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},
	contList: {
		display: 'flex',
		gap: 12,
		paddingBlock: 12,
	},
	contListOne: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		width: '100%',

		'& .MuiTypography-body1': {
			fontSize: 14,
			color: '#475677',
			fontFamily: 'poppins',
		},
	},
	viewList: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiTypography-h5': {
			fontWeight: 500,
			color: '#1473E6',
			[theme.breakpoints.up('xs')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
		'& .MuiTypography-h4': {
			fontWeight: 500,
			fontStyle: 'normal',
			color: '#2A2A2A5C',
			whiteSpace: 'pre',
			[theme.breakpoints.up('xs')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
		},
	},

	borderLine: {
		borderLeft: '2px solid #707070',
	},

	readMoreStyles: {
		[theme.breakpoints.up('xs')]: {
			fontSize: 12,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 14,
		},
	},

	//  No Data
	noData: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 220,
		[theme.breakpoints.down('sm')]: {
			height: 160,
		},
		'& .MuiTypography-h5': {
			color: '#475677',
			fontWeight: 500,
			marginBlockStart: 12,

			[theme.breakpoints.up('xs')]: {
				fontSize: 16,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 20,
			},
		},
	},
	mainContainer: {
		marginBlockEnd: 12,
	},
}))

export default function QaAnswered() {
	const classes = useStyles()
	const sampleData = [
		{
			id: 1,
			question: 'Throat infection',
			time: '2021-08-04T11:54:21+05:30',
			views: 123,
		},
		{
			id: 2,
			question: 'Skin irritation',
			time: '2021-04-04T11:54:21+05:30',
			views: 897,
		},
	]

	return (
		<div className={classes.root}>
			{sampleData.map(data => (
				<div key={data.id} className={classes.mainContainer}>
					<div className={classes.mainContain}>
						<Image src={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/logotab.svg'} alt='user-logo' width={54} height={54} />
						<div className={classes.content}>
							<div className={classes.listQuery}>
								<div className={classes.listName}>
									<Typography variant='h4'>{data.question}</Typography>
									<Typography variant='h5'>
										{moment(`${data.time}`)
											.startOf('hour')
											.fromNow()}
									</Typography>
								</div>
								<Typography variant='body1'>
									{
										'I have ulcers in throat but no pain and frequent feeling of drieness in throat mild fever of 99 and feeling of insomnia taken a course of antibiotic for 7 days.After the course period again symtomps are showing no doctors are available locally now except in hospitals.'
									}
								</Typography>
							</div>
							<div className={classes.contList}>
								<div className={classes.borderLine}></div>
								<div className={classes.contListOne}>
									<div className={classes.viewList}>
										<Typography variant='h5'>
											Answered by Dr.{'Sushma'} {'Raveendran'}
										</Typography>
										<Typography variant='h4'> {data.views} views</Typography>
									</div>
									<ReadMore
										moreText={' view answer'}
										lessText={' less answer'}
										classProps={classes.readMoreStyles}
										text={
											'Infections are General Physicianof 99 and feeling of insomnia taken a course of antibiotic for 7 days.After the course 99 and feeling of insomnia taken a course of antibiotic for 7 days.After the course period again symtomps are showing no doctors are available locally now except in hospitals.'
										}
									/>
								</div>
							</div>
						</div>
					</div>
					<Divider />
				</div>
			))}

			{/* When no  data then, the below block renders */}
			{false && (
				<div className={classes.noData}>
					<Image
						src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/Nodata/NoQaAns.png'
						alt=''
						width={100}
						height={100}
						className={classes.noDataImg}
					/>
					<Typography variant='h5'>No Questions answered yet</Typography>
				</div>
			)}
		</div>
	)
}
