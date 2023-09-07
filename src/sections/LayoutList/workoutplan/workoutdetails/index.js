import {Grid, IconButton, makeStyles, Typography} from '@material-ui/core'
import React, {useCallback, useEffect, useState} from 'react'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import {useRouter} from 'next/router'
import workoutslist from '../../../../../Service/MyAccount/workoutplan/workout'
import _ from 'lodash'
import {BeatLoader} from 'react-spinners'
import {getProfileImgUrl} from '../../../../../lib/Utils/profileUrlImage'
import Image from 'next/image'
import useAuth from '../../../../../lib/Utils/hooks/UseAuth'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		gap: '37%',
		alignItems: 'center',
	},
	bacicon: {
		color: '#6F6F6F',
		fontSize: 20,
		fontWeight: 600,
	},
	workouts: {
		'&.MuiGrid-root': {
			height: '210px',
			display: 'flex',
			justifyContent: 'space-between',
			borderRadius: '13px',
			margin: '10px',
			padding: '10px',
			'&:hover': {
				boxShadow: '0px 10px 13px -6px rgb(0 0 0 / 7%), 0px 20px 31px 3px rgb(0 0 0 / 0%), 0px 8px 38px 7px rgb(0 0 0 / 15%)',
				cursor: 'pointer',
			},
		},
	},
	mainworkout: {
		paddingBlockStart: '20px',
		paddingInline: '15px',
	},
	sideworkouts: {
		backgroundColor: '#0000000F',
		padding: '5px',
		borderRadius: '6px',
		width: '80px',
	},
}))

const WorkoutDetails = () => {
	const classes = useStyles()
	const router = useRouter()
	const {token, practiceName} = useAuth()
	const [workoutsList, setWorkoutsList] = useState([])
	const [loading, setLoading] = useState(true)
	const clientExerciseNameuuid = router?.query?.workout

	console.log('clientExerciseNameuuid', clientExerciseNameuuid)

	const worksOutData = useCallback(() => {
		const onSuccess = res => {
			if (res?.data?.status === 'success') {
				setWorkoutsList(res?.data?.data)
			}
		}
		const onFailure = _err => {}

		workoutslist.workOuts({clientExerciseNameuuid}).then(onSuccess, onFailure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clientExerciseNameuuid, practiceName])
	useEffect(() => {
		worksOutData()
	}, [worksOutData])

	const workoutdata = _.map(workoutsList, item => item?.tentExerciseName)

	console.log('workoutdata', workoutdata)
	return (
		<>
			<div className={classes.root}>
				<IconButton
					onClick={() => {
						router.back()
					}}
					style={{marginInlineStart: '10px'}}>
					<ArrowBackIosRoundedIcon className={classes.bacicon} />
				</IconButton>
				<Typography style={{color: '#707070', fontStyle: 'normal', fontSize: '21px'}}>Workout Plan</Typography>
			</div>
			<div className={classes.mainworkout}>
				<Grid container spacing={2} style={{justifyContent: 'flex-start'}}>
					{loading && _.isEmpty(workoutsList) ? (
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<BeatLoader size={12} margin={2} color={'#24A0ED'} />
						</div>
					) : (
						<>
							{!_.isEmpty(workoutsList) &&
								_.map(workoutsList, (data, idx) => (
									<Grid item xs={12} md={5} lg={3} className={classes.workouts} style={{backgroundColor: data?.colorCode}}>
										<div>
											<Image
												src={
													data.docDriveUuid
														? getProfileImgUrl(data?.docDriveUuid, token)
														: 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/download/workout.png'
												}
												alt='workout'
												width={110}
												height={120}
											/>

											<Typography
												style={{width: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBlockStart: '10px'}}>
												{data?.tentExerciseDescription}
											</Typography>

											<div>
												<Typography style={{fontSize: '16px'}}>
													{_.isEqual(data?.secondRest, null) ? '0' : data?.secondRest} <span style={{fontWeight: '600'}}>{data?.restTime}</span>
												</Typography>
											</div>
										</div>

										<div className={classes.sideworkouts}>
											<div>
												<Typography style={{fontSize: '14px'}}>Session</Typography>
												<Typography style={{fontSize: '16px', fontWeight: '600'}}>{_.isEqual(data?.lbs, null) ? '-' : data?.lbs}</Typography>
											</div>

											<div>
												<Typography style={{fontSize: '14px'}}>Reps</Typography>
												<Typography style={{fontSize: '16px', fontWeight: '600'}}>{_.isEqual(data?.reps, null) ? '-' : data?.reps}</Typography>
											</div>

											<div>
												<Typography style={{fontSize: '14px'}}>Sets</Typography>
												<Typography style={{fontSize: '16px', fontWeight: '600'}}>{_.isEqual(data?.sets, null) ? '-' : data?.sets}</Typography>
											</div>

											<div>
												<Typography style={{fontSize: '14px'}}>Fat</Typography>
												<Typography style={{fontSize: '16px', fontWeight: '600'}}>{_.isEqual(data?.fat, null) ? '-' : data?.fat}</Typography>
											</div>
										</div>
									</Grid>
								))}
						</>
					)}
				</Grid>
			</div>
		</>
	)
}

export default WorkoutDetails
