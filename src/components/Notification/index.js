import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { openDialog } from 'app/store/fuse/dialogSlice'
import { Dialog, DialogContent, Typography, Badge, Grid, Avatar, Stack, IconButton } from '@material-ui/core'
import { CheckCircleOutline, HighlightOff, CloseRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
// import { openDialog } from '../../store/fuse/dialogSlice'


const data = {
    profile_img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Iida Niskanen",
    message: "Dry Skin, Dermatologist",
}


const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        padding: 16,
        // [theme.breakpoints.down('xs')]: {
        // 	paddingTop: 0,
        // },
    },
    patientName: {
        color: '#414A58',
        opacity: 1,
        font: "14px/21px Poppins"
    },
    messageTxt: {
        font: '12px/18px Poppins',
        opacity: 0.72,
    },
    circleIcon: {
        fontSize: '28px !important',
        color: '#28A645 !important ',
        opacity: 1,
        cursor: 'pointer'
    },
    declineIcon: {
        fontSize: '28px !important',
        color: '#414A58',
        opacity: 0.72,
        cursor: 'pointer'
    },
    closeRoundedIcon: {
        fontSize: '10px !important',
        color: '#414A58',
        opacity: 0.72,
        cursor: 'pointer'
    },
    dialogCard: {
        borderRadius: '30px',
        position: 'relative'
    }
}))

const Notification = ({ isAlert, notificationData = {}, customerDetail = {}, handleCloseNotification = () => { }, handleAccept = () => { }, handleDecline = () => { } }) => {
    const classes = useStyles()
    const {
        CallAttenderDetails : {tentUserFirstName } = {}, CallInitiatorDetails = {}, MeetingDetails={},
    } = notificationData
    // const dispatch = useDispatch()
    // const options  = useSelector(({ fuse }) => fuse.dialog.options.children)
    let avatarText = `${data.name.split(' ')[0][0]}${data.name.split(' ')[1][0]}`
    let name = "Fida Niskanen"


    console.log(tentUserFirstName, 'notificationData.meetingUuid')

    return (
        <Dialog fullWidth maxWidth='xs' open={isAlert} aria-labelledby='Loader Popup' >
            <DialogContent className={classes.dialogCard}>
                <Grid container direction="column" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <IconButton  > */}
                    <div onClick={() => handleDecline(MeetingDetails.meetingUuid)} style={{ justifyContent: 'flex-end', padding: '0px', display: 'flex', position: 'absolute', right: '15px' }} >
                        {/* <CloseRounded className={classes.closeRoundedIcon} /> */}
                        <HighlightOff className={classes.declineIcon} />
                    </div>
                    {/* </IconButton> */}
                    <Grid direction="row" spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <Badge color="secondary" variant="dot"></Badge> */}

                        <Grid direction="column" >
                            <Avatar alt={avatarText} src={data.profile_img}>{avatarText}</Avatar>
                            <Typography className={classes.patientName} >{tentUserFirstName ? tentUserFirstName : "UnKnown"}</Typography>

                            {/* <Typography className={classes.messageTxt}>{data.message}</Typography> */}
                        </Grid>


                    </Grid>
                    <Grid direction="row" spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>

                        <Typography >Calling....</Typography>

                        {/* <Grid spacing={1} onClick={() => handleDecline(notificationData.meetingUuid)}>
                            <HighlightOff className={classes.declineIcon} />
                            <Typography style={{ color: '#414A58', opacity: 0.72 }}>Decline</Typography>
                        </Grid> */}
                        {/* <Grid direction="column" spacing={1} onClick={() => handleAccept(notificationData.meetingUuid)}>
                            <CheckCircleOutline className={classes.circleIcon} />
                            <Typography style={{ color: '#414A58', opacity: 0.72 }}>Accept</Typography>
                        </Grid>
                        <Grid direction="column" spacing={1} onClick={() => handleDecline(notificationData.meetingUuid)}>
                            <HighlightOff className={classes.declineIcon} />
                            <Typography style={{ color: '#414A58', opacity: 0.72 }}>Decline</Typography>
                        </Grid>
                        <Grid direction="column" spacing={1}>
                            <IconButton onClick={handleCloseNotification} >
                                <CloseRounded className={classes.closeRoundedIcon} />
                            </IconButton>
                        </Grid> */}
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog >
    )
}

export default Notification
