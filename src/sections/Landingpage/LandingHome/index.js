import {Button, ButtonBase, List, makeStyles, Typography, useMediaQuery} from '@material-ui/core'
import {useRouter} from 'next/router'
import React from 'react'
import Image from 'next/image'
import useStyles from './style'
import Link from 'next/link'
import LandingFooter from '../../../components/LandingFooter'
import Header from '../../../components/LandingHeader'
import {flashLink, flashRegister} from '../../../../lib/Utils/linkWindow'
import FadeVariant from '../../../components/FramerMotion/PageFade'

function LandingHome() {
	const classes = useStyles()
	const router = useRouter()
	const isXs = useMediaQuery('(max-width:1024)')

	return (
		<>
			<Header />
			<div className={classes.backColor}>
				<FadeVariant>
					<div>
						<div className={classes.backPink}></div>
					</div>
					<div className={classes.root}>
						<div className={classes.wrapper}>
							<div className={classes.imageSection}>
								<Image
									src='https://ik.imagekit.io/lyfngo/web_b2c/public/images/staticPages/girlWithArrow.png'
									alt='lyfngo gym and fitness management software'
									width={801}
									height={462}
								/>
							</div>
							<div className={classes.buttonLogin}>
								<Button onClick={() => router.push('/marketplace')}>CONSUMER LOGIN</Button>
								<Button onClick={flashLink}>BUSINESS LOGIN</Button>
							</div>
							<div className={classes.mainWrapper}>
								<div className={classes.leftSection}>
									<div className={classes.contentColor}>
										<Typography variant='h5'>FOR EVERYONE</Typography>
										<Typography variant='h2'>
											Your life's health and wellness, served by LYFnGO
											<div className={classes.mainScroll}>
												<div className={classes.secScroll}>
													<div className={`${classes.business} ${classes.care}`}>Book your appointment</div>
													<div className={`${classes.business} ${classes.fitness}`}>Book sports facilities </div>
													<div className={`${classes.business} ${classes.mind}`}>Online consultation</div>
													<div className={`${classes.business} ${classes.sports}`}>Buy membership packages</div>
													<div className={`${classes.business} ${classes.spa}`}> Access marketplace</div>
												</div>
											</div>
										</Typography>
										<Button onClick={() => router.push('/marketplace')}>EXPLORE THE MARKETPLACE</Button>
									</div>
								</div>
								<div className={classes.rightSection}>
									<div className={classes.contentColor1}>
										<Typography variant='h5'>FOR BUSINESS OWNERS</Typography>
										<Typography variant='h2'>
											Productivity made simple software for your
											<div className={classes.mainScroll1}>
												<div className={classes.secScroll2}>
													<div className={`${classes.business} ${classes.b1}`}>Clinic</div>
													<div className={`${classes.business} ${classes.b2}`}>Home care</div>
													<div className={`${classes.business} ${classes.b3}`}>Wellness</div>
													<div className={`${classes.business} ${classes.b4}`}>Fitness studio</div>
													<div className={`${classes.business} ${classes.b5}`}>Sports academy</div>
												</div>
											</div>
										</Typography>
										<Button
											onClick={() => {
												router.push('/features')
											}}>
											EXPLORE THE FEATURES
										</Button>
									</div>
								</div>
							</div>
						</div>

						{/* MOBILE */}
						<div className={classes.mobileRoot}>
							<div>
								<div className={classes.buttonChange}>
									<Button onClick={flashLink}>BUSINESS LOGIN</Button>
								</div>
								<Image
									// eslint-disable-next-line max-len
									src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/Forbusiness.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672828119535'
									width={360}
									height={420}
									alt='practice management software lyfngo near me'
								/>
								<div className={classes.ContentMobile}>
									<Typography variant='h5'>FOR BUSINESS OWNERS</Typography>
									<Typography variant='h2'>
										Productivity made simple software for your
										<div className={classes.mainScroll2}>
											<div className={classes.secScroll2}>
												<div className={`${classes.business} ${classes.b1}`}>Clinic</div>
												<div className={`${classes.business} ${classes.b2}`}>Home care</div>
												<div className={`${classes.business} ${classes.b3}`}>Wellness</div>
												<div className={`${classes.business} ${classes.b4}`}>Fitness studio</div>
												<div className={`${classes.business} ${classes.b5}`}>Sports academy</div>
											</div>
										</div>
									</Typography>
									<Button
										onClick={() => {
											router.push('/features')
										}}>
										EXPLORE THE FEATURES
									</Button>
								</div>
							</div>
							<div>
								<div className={classes.buttonChange}>
									<Button
										onClick={() => {
											router.push('/marketplace')
										}}>
										CONSUMER LOGIN
									</Button>
								</div>
								<Image
									// eslint-disable-next-line max-len
									src='https://ik.imagekit.io/LyfngoDev/B2C/StaticPages/Images/Foreveryone1.svg?updatedAt=1672833714963&ik-s=4f407df0b8d7367fdd49956dc5651dbfebabf115'
									width={400}
									height={337}
									alt='hospital management software India lyfngo '
								/>
								<div className={classes.ContentMobile}>
									<Typography variant='h5'>FOR EVERYONE</Typography>
									<Typography variant='h2'>
										Your life's health and wellness, served by LYFnGO{' '}
										<div className={classes.mainScroll3}>
											<div className={classes.secScroll3}>
												<div className={`${classes.business} ${classes.care}`}>book your appointment</div>
												<div className={`${classes.business} ${classes.fitness}`}>book sports facilities </div>
												<div className={`${classes.business} ${classes.mind}`}>online consultation</div>
												<div className={`${classes.business} ${classes.sports}`}>buy membership packages</div>
												<div className={`${classes.business} ${classes.spa}`}> access marketplace</div>
											</div>
										</div>
									</Typography>
									<Button onClick={() => router.push('/marketplace')}>EXPLORE THE MARKETPLACE</Button>
								</div>
							</div>
						</div>
					</div>
				</FadeVariant>
			</div>
			<LandingFooter />
		</>
	)
}

export default LandingHome
