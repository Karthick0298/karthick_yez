import React, {useEffect} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const fadeVariants = {
	visible: {opacity: 1, scale: 1},
	hidden: {opacity: 0, scale: 0},
}

export default function FadeVariantContent({children}) {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])
	return (
		<motion.div ref={ref} animate={controls} transition={{duration: 1}} initial='hidden' variants={fadeVariants} className='fade'>
			{children}
		</motion.div>
	)
}
