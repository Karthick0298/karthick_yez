import React, {useEffect} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

export default function PageFadeHorizondal({children, fromNegative = false}) {
	const fadeVariants = fromNegative
		? {
				hidden: {opacity: 0, x: -220},
				visible: {opacity: 1, x: 0},
		  }
		: {
				hidden: {opacity: 0, x: 220},
				visible: {opacity: 1, x: 0},
		  }

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
