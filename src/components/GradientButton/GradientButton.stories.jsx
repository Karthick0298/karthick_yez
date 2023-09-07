import React from 'react'

import Button from './index'

export default {
	title: 'components/Button',
	component: Button,
}

const Template = ({color}) => {
	return (
		<Button variant='contained' color={color}>
			Subscribe
		</Button>
	)
}

export const GradientButton = Template.bind({})
