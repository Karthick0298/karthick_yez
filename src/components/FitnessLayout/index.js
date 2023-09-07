import {useState, useEffect, useCallback} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import _ from 'lodash'

const Layout = ({children}) => {
	return (
		<>
			<Header />
			<Sidebar
				display={''}
				CareText={fitness?.b2cMenuName || 'Fitness'}
				FitnessText={care?.b2cMenuName || 'Care'}
				MindText={mind?.b2cMenuName || 'Mind'}
				SportsText={sports?.b2cMenuName || 'Sports'}
				SpaText={spa?.b2cMenuName || 'Spa and Wellness'}
				CareLink={'/fitness'}
				FitnessLink={'/care'}
				MindLink={'/'}
				SportsLink={'/'}
				SpaLink={'/'}
				CareIcon={fitness?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/fitness.svg'}
				FitnessIcon={care?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/care.svg'}
				MindIcon={mind?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/yoga.svg'}
				SportsIcon={sports?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/sport.svg'}
				SpaIcon={spa?.imageUrl || 'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/spa.svg'}
				Care={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Icon metro-stethoscope.svg'}
				Fitness={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Nurse.svg'}
				Mind={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/apple.svg'}
				Sports={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/physical-therapy.svg'}
				Spa={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/monitor.svg'}
				ShoppingCart={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/Icon metro-lab.svg'}
				Live={'https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/careIcons/shopping-cart.svg'}
				Heading1={'Doctors'}
				Heading2={'Nurses'}
				Heading3={'Dietician'}
				Heading4={'Physiotherapy'}
				Heading5={'Consult'}
				Heading6={'Lab/Scan'}
				Heading7={'Store'}
				doctors={'/care/submenu/doctors'}
				nurse={'/care/submenu/nurses'}
				dietician={'/care/submenu/dietician'}
				physiotherapy={'/care/submenu/physiotherapy'}
				consult={'/care/submenu/consult'}
				lab={'/care/submenu/lab'}
				store={'/care/submenu/store'}
			/>
			{children}
			<Footer backgroundImage={`url(${'https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/BackgroundCare.jpg'})`} />
		</>
	)
}

export default Layout
