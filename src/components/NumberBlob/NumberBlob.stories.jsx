import React from 'react'

import NumberBlob from './index'

export default {
	title: 'components/NumberBlob',
	component: NumberBlob,
}

const Template = () => (
	<>
		<NumberBlob end={100} suffix='+' duration={5} blobName={'doctors'} backgroundColor={'#2680EB32'} textColor={'#2680EB'} />
		<NumberBlob end={1000} suffix='+' duration={5} blobName={'Users'} backgroundColor={'#00B59232'} textColor={'#00B592'} />
		<NumberBlob end={25} suffix='+' duration={5} blobName={'Specialities'} backgroundColor={'#EF920032'} textColor={'#EF9200'} />
		<NumberBlob end={15020} suffix='+' duration={5} blobName={'Review'} backgroundColor={'#E0474E32'} textColor={'#E0474E'} />
	</>
)

export const blob = Template.bind({})
