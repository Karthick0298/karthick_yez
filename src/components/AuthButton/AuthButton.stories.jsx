import React from 'react'

import Button from './index'

export default {
	title: 'components/Button',
	component: Button,
}

const Template = ({color}) => {
	return (
		<Button variant='contained' color={color}>
			Submit
		</Button>
	)
}

export const AuthButton = Template.bind({})
