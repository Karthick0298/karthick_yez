import React from 'react'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ScrollDialog from '../../../components/ScrollingDialog'

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiButton-text': {
			color: theme.palette.lyfngo.main,
			textTransform: 'capitalize',
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h6.fontSize,
			borderRadius: 24,
		},
		'& .MuiButton-root': {
			boxShadow: 'none',
			padding: 0,
		},
	},
}))

function TermsAndCondition() {
	const [open, setOpen] = React.useState(false)
	const [scroll, setScroll] = React.useState('paper')
	const classes = useStyles()
	const handleClickOpen = scrollType => () => {
		setOpen(true)
		setScroll(scrollType)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const descriptionElementRef = React.useRef(null)
	React.useEffect(() => {
		if (open) {
			const {current: descriptionElement} = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	return (
		<div className={classes.root}>
			<Button onClick={handleClickOpen('paper')}>Terms and Condition</Button>
			<ScrollDialog
				descriptionElementRef={descriptionElementRef}
				title='Terms and Condition'
				children={[...new Array(50)]
					.map(
						() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
					)
					.join('\n')}
				open={open}
				handleClose={handleClose}
				scroll={scroll}
			/>
		</div>
	)
}

export default TermsAndCondition
