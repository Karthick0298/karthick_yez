import {makeStyles} from '@material-ui/core'
import OrderButton from '../../../components/OrderButton'

const useStyles = makeStyles(theme => ({}))
const App = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.OrderCancelled}>
				<OrderButton orderPlaced={'orderplaced'} backgroundColor={'#FFFFFF 0% 0% no-repeat padding-box'} fontColor={'#FF9C00'}></OrderButton>
				<OrderButton orderPlaced={'cancelled'} backgroundColor={'#FFFFFF 0% 0% no-repeat padding-box'} fontColor={'#E22C23'}></OrderButton>
				<OrderButton orderPlaced={'Confirm'} backgroundColor={'#FFFFFF 0% 0% no-repeat padding-box'} fontColor={'#08AA6D'}></OrderButton>
				<OrderButton orderPlaced={'Delivered'} backgroundColor={'#FFFFFF 0% 0% no-repeat padding-box'} fontColor={'#0813AA'}></OrderButton>
			</div>
		</div>
	)
}

export default App
