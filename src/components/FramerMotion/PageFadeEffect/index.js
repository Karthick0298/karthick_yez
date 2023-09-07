import React, {useEffect} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const fadeVariants = {
	hidden: {opacity: 0, y: 80},
	visible: {opacity: 1, y: 0},
}

export default function PageFadeEffect({children}) {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])
	return (
		<motion.div ref={ref} animate={controls} transition={{duration: 0.85}} initial='hidden' variants={fadeVariants} className='fade'>
			{children}
		</motion.div>
	)
}
