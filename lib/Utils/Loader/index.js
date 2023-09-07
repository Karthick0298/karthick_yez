import {BeatLoader} from 'react-spinners'

function ButtonLoader(props) {
	const {size, color} = props
	return (
		<>
			<BeatLoader size={size} color={color} />
		</>
	)
}
export default ButtonLoader
