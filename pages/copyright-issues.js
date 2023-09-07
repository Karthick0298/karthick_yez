import {makeStyles, Typography} from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/background.png)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxSizing: 'border-box',
	},
	heading: {
		backgroundColor: '#DC143C',
		color: '#FFFFFF',
		textAlign: 'center',
		position: 'Sticky',
		top: 0,
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 10,
			fontSize: 16,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 20,
			fontSize: 20,
		},
	},
	SubHeading: {
		color: theme.palette.paragraph.main,
		[theme.breakpoints.up('xs')]: {
			fontSize: 14,
			paddingBlockStart: 6,
			paddingBlockEnd: 4,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
			paddingBlockStart: 10,
			paddingBlockEnd: 4,
		},
	},
	content: {
		// border: '1px dashed red',
		[theme.breakpoints.up('xs')]: {
			paddingBlock: 10,
			paddingInline: 10,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlock: 20,
			paddingInline: 40,
		},
		[theme.breakpoints.up('md')]: {
			paddingBlock: 20,
			paddingInline: 80,
		},

		'& .MuiTypography-body1': {
			color: theme.palette.paragraph.main,
			[theme.breakpoints.up('xs')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 16,
			},
		},
	},
	contentPrimary: {
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 4,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 8,
		},
	},
	contentSecondary: {
		paddingInlineStart: 14,
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 4,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 8,
		},
	},
	contentTertiary: {
		paddingInlineStart: 28,
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 4,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 8,
		},
	},
	contentFour: {
		paddingInlineStart: 32,
		[theme.breakpoints.up('xs')]: {
			paddingBlockEnd: 4,
		},
		[theme.breakpoints.up('sm')]: {
			paddingBlockEnd: 8,
		},
	},
	textInRed: {
		color: '#DC143C',
		[theme.breakpoints.up('xs')]: {
			fontSize: 14,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
		},
	},
}))

function CopyrightIssues() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h3' className={classes.heading}>
				Copyright issues
			</Typography>
			<div className={classes.content} style={{maxWidth: 1320, margin: 'auto'}}>
				<Typography variant='body1'>
					Rigelsoft Technologies Private Limited, on behalf of itself and its affiliates/group companies under the brand "Aidiva" is publisher of the
					internet resource <Link href='https://aidiva.com/'>aidiva</Link> and the mobile application 'Aidiva' (together, “Website”). Aidiva owns and
					operates the services provided through the Website.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					1. CONSENT:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>1.1 </span> By clicking on the "I accept' button at the end of page containing the Terms of Use or by providing us Your Personal
					Information or by making use of the features provided by the Website, You hereby consent to the collection, storage, processing, disclosure
					and transfer of Your Information in accordance with the provisions of this Privacy Policy.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>1.2 </span> You acknowledge that You are providing Your Personal Information out of Your free will.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>1.3 </span> You have the option not to provide us the Personal Information sought to be collected. You will also have an option to
					withdraw Your consent at any point, provided such withdrawal of consent is intimated to us in writing at <b>hello@Aidiva.com</b> . If You do
					not provide us Your Personal Information or if You withdraw the consent at any point in time, We shall have the option not to fulfill the
					purposes for which the said Personal Information was sought and we may restrict You from using the Website.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					2. CHANGES TO THE PRIVACY POLICY:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>2.1 </span> We may update this Privacy Policy from time to time. There is a tab at the end of the Privacy Policy which indicates when
					the Privacy Policy was last updated.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>2.2 </span> When We update Our Privacy Policy, the next time You visit the Website, the Website will provide a message which will
					intimate You of the amendments to the Privacy Policy. You will be required to provide Your consent to the amendments before You proceed. If
					You do not agree to the amendments, please do not use the Website any further.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					3. WHAT PERSONAL INFORMATION IS COLLECTED FROM YOU?
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>3.1 </span> The kinds of information that We collect about You include Personal Information and Non-Personal Information. Personal
					Information and Non-Personal Information are collectively referred to as <b>"Information"</b>.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>3.2 </span> Personal Information is data collected that can be used to uniquely identify or contact You. Personal Information for the
					purposes of this Privacy Policy shall include, but not be limited to:
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(i) </span> Name,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ii) </span> Birth date,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iii) </span> Email address,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iv) </span> Gender,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(v) </span> Financial information such as Bank account or credit card or debit card or other payment instrument details,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(vi) </span> Physical, physiological and mental health condition,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(vii) </span> Sexual orientation,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(viii) </span> Medical records and history,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ix) </span> Login ID and password,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(x) </span> Location,
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>3.3 </span> We may also seek permissions to use camera, microphone, and phonebook/contact data at points where required.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>3.4 </span> We may also collect information other than Personal Information from You through the Website when You visit and /or use
					the Website. Such information may be stored in server logs. Such Non-Personal Information would not assist us to identify You personally.
					Such Non-Personal Information may include.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(i) </span> Your usage details such as time, frequency, duration and pattern of use, features used and the amount of storage used,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ii) </span> Master and transaction data and other data stored in Your user account,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iii) </span> Internet Protocol address, browser type, browser language, referring URL, files accessed, errors generated, time zone,
					operating system and other visitor details collected in Our log files,
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					4. HOW WE COLLECT INFORMATION?
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					The methods by which We collect Your Information include but are not limited to the following:
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(i) </span> When You register on Our Website,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ii) </span> When You create a profile on Our Website or as part of Services
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iii) </span> When You provide Your Information to us,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iv) </span> When You use the features on Our Website and/or when You use Services,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(v) </span> When You access Website or Services,
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(vi) </span> By use of cookies (discussed below).
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					5. HOW THE INFORMATION COLLECTED IS USED?
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					We collect Your Information for various purposes, including the following:
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(i) </span> In order to enable You to use the Website and utilize the Services. Your financial information in order to process a
					payment which You need to make on the Website.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ii) </span> To respond to Your inquiries.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iii) </span> To provide You with information about products and services available on the Website.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(iv) </span> To personalize Your experience on the Website
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(v) </span> To help You address Your problems incurred on the Website including addressing any technical problems.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(vi) </span> For proper administering of the Website.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(vii) </span> To conduct internal reviews and data analysis for the Website (e.g., to determine the number of visitors to specific
					pages within the Website).
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(viii) </span> To improve the services, content and advertising on the Website.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(ix) </span> To protect the integrity of the Website, and.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(x) </span> To respond to judicial process and provide information to law enforcement agencies or in connection with an investigation
					on matters related to public safety, as permitted by law.
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(xi) </span> To conduct analytical studies on various aspects including user behaviour, user preferences etc
				</Typography>
				<Typography variant='body1' className={classes.contentTertiary}>
					<span>(xii) </span> To make disclosures as may be required under applicable law. (above uses collectively referred to as "Purpose(s)")
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					6. HOW INFORMATION MAY BE SHARED AND TRANSFERRED?
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>6.1 </span> We may exchange, transfer, share, part with all or any of Your Information, across borders and from Your country to any
					other countries across the world with Our affiliates / agents / third party service providers / partners / banks and financial institutions
					for the Purposes specified under this privacy Policy or as may be required by applicable law or in case of sale, acquisition, merger or
					bankruptcy involving Aidiva.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>6.2 </span> You acknowledge that some countries where We may transfer Your Information may not have data protection laws which are as
					stringent as the laws of Your own country.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>6.3 </span> You acknowledge that it is adequate that when Aidiva transfers Your Information to any other entity within or outside Your
					country of residence, Aidiva will place contractual obligations on the transferee which will oblige the transferee to adhere to the
					provisions of this Privacy Policy
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					7. HOW WE PROTECT YOUR INFORMATION?
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>7.1 </span> The security of Your Personal Information is important to us. We have adopted reasonable security practices and procedure
					to ensure that the Personal Information (protected health information) collected is secure. You agree that such measures are secured and
					adequate. We restrict access to Your Personal Information to Our and Our affiliates' employees, agents, third party service providers,
					partners, and agencies who need to know such Personal Information in relation to the Purposes as specified above in this Privacy Policy and
					provided that such entities agree to abide by this Privacy Policy.
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					<span>7.2 </span> While We will endeavor to take all reasonable and appropriate steps to keep secure any information which We hold about You
					and prevent unauthorized access, You acknowledge that the internet is not 100% secure and that We cannot provide any absolute assurance
					regarding the security of Your Personal Information. We nor any of the HCP on Aidiva will not be liable in any way in relation to any breach
					of security or unintended loss or disclosure of information caused by Us in relation to Your Personal Information.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					8. COOKIES:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					We may store temporary or permanent 'cookies' on Your computer. A cookie is a small piece of data that is sent to Your browser from a web
					server and stored on Your computer's hard drive. A cookie cannot read data off Your hard disk or read cookie files created by other sites.
					Once You close Your browser, the cookie simply terminates. For instance, by setting a cookie on Your browser, You would not have to log in a
					password more than once, thereby saving time while on the Websites. You can choose whether to accept cookies by changing the settings of
					Your browser. You can reset Your browser to refuse all cookies or allow Your browser to show You when a cookie is being sent. If You reject
					the cookies on the websites, You may still be able to use the Websites, but it shall be limited to certain minimal functionality. The only
					drawback to this is that You may be limited only to some areas of the Websites or limited to certain functions of the Websites. Some of Our
					business partners may use cookies on the Websites. Please note that We have no access to or control over such cookies. Aidiva and Our
					business partners may use cookies to better personalize the content, banners, and promotions that You see on the Websites.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					8. COOKIES:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					We may store temporary or permanent 'cookies' on Your computer. A cookie is a small piece of data that is sent to Your browser from a web
					server and stored on Your computer's hard drive. A cookie cannot read data off Your hard disk or read cookie files created by other sites.
					Once You close Your browser, the cookie simply terminates. For instance, by setting a cookie on Your browser, You would not have to log in a
					password more than once, thereby saving time while on the Websites. You can choose whether to accept cookies by changing the settings of
					Your browser. You can reset Your browser to refuse all cookies or allow Your browser to show You when a cookie is being sent. If You reject
					the cookies on the websites, You may still be able to use the Websites, but it shall be limited to certain minimal functionality. The only
					drawback to this is that You may be limited only to some areas of the Websites or limited to certain functions of the Websites. Some of Our
					business partners may use cookies on the Websites. Please note that We have no access to or control over such cookies. Aidiva and Our
					business partners may use cookies to better personalize the content, banners, and promotions that You see on the Websites.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					9. LINKS:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					The Websites may contain links to other third party sites. The third party sites are not under the control of Aidiva. Please note that
					Aidiva is not responsible for the privacy practices of such third party sites. Aidiva encourages You to be aware when You leave the Websites
					and to read the privacy policies of each and every third party site that collects personal information. If You decide to access any of the
					third-party sites linked to the Websites, You do this entirely at Your own risk. Any links to any partner of the Websites is the
					responsibility of the linking party, and Aidiva shall not be responsible for notification of any change in name or location of any
					information on the Websites.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					10. CORRECTING INACCURACIES OR UPDATING PERSONAL INFORMATION :
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					If Your Personal Information changes, or if You need to update or correct Your Personal Information or have any grievance with respect to
					the processing or use of Your Personal Information, for any reason, You may send updates and corrections to us at <b>hello@Aidiva.com</b>{' '}
					and We will take all reasonable efforts to incorporate the changes within a reasonable period of time. If Your Personal Information is
					stored as part of Your profile on the Website, You can update Your profile on the profile pages of the Websites. You are not allowed to use
					the Website or the Services of the Website if any of the terms of this Privacy Policy are not in accordance with the applicable laws of Your
					country.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					11. COMPLIANCE WITH LAWS:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					You are not allowed to use the Website or the Services of the Website if any of the terms of this Privacy Policy are not in accordance with
					the applicable laws of Your country.
				</Typography>
				<Typography variant='h3' className={classes.SubHeading}>
					12. GRIEVANCE OFFICER:
				</Typography>
				<Typography variant='body1' className={classes.contentSecondary}>
					We have appointed a Grievance Officer to address any concerns or grievances that You may have regarding the processing of Your Personal
					Information. If You have any such grievances, please write to Our Grievance Officer at <b>grievances@Aidiva.com</b> and Our officer will
					attempt to resolve Your issues in a timely manner.
				</Typography>

				<Typography variant='body1' className={classes.contentSecondary}>
					<b>
						Aidiva reserves the right, in its sole discretion, to change, modify, add or delete portions of the terms of this Privacy Policy at any
						time.
					</b>
				</Typography>
			</div>
		</div>
	)
}

export default CopyrightIssues
