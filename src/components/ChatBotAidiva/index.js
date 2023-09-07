import {Grid} from '@material-ui/core'
import AidivaBot from './AidivaBot'

const ChatBotAidiva = props => {
	const {setState} = props
	return (
		<>
			<Grid xs={12} md={12}>
				<Grid item xs={8.5} md={8.5}>
					<AidivaBot setState={setState} />
				</Grid>
			</Grid>
		</>
	)
}
export default ChatBotAidiva
