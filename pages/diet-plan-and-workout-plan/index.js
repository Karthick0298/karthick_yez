import React from 'react'
import Head from 'next/head'
import WorkoutPlanning from '../../src/sections/Landingpage/WorkoutPlan'

const WorkoutPlan = () => {
	const meta = {
		title: 'Diet plan and workout plan - LYFnGO allows you to explore and create plans',
		description: `Create any tailor-made diet or workout plan according to the health requirement of the customer.`,
	}

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta?.description} />
				<meta property='og:title' content={meta?.title} />
				<meta property='og:description' content={meta?.description} />
				<meta property='og:image' content='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Logo/diet_workoutplan.png' />
				<meta name='google' content='nositelinkssearchbox' key='sitelinks' />
				<meta name='google' content='notranslate' key='notranslate' />
				<link rel='canonical' href='https://lyfngo.com/diet-plan-and-workout-plan' />
			</Head>
			<WorkoutPlanning />
		</div>
	)
}

export default WorkoutPlan
