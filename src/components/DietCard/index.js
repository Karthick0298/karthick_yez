// import {Card, makeStyles, Typography} from '@material-ui/core'
// import DietButton from '../../components/DietButton'

// const useStyles = makeStyles(theme => ({
// 	cardmain: {
// 		'& .MuiCard-root': {
// 			paddingInline: 20,
// 			paddingBlock: 24,
// 			boxShadow: '0px 40px 40px #c5c3f926',
// 			borderRadius: 10,
// 		},
// 		'& .MuiTypography-h5': {
// 			fontFamily: theme.typography.h3.fontFamily,
// 			fontSize: theme.typography.h4.fontSize,
// 			color: '#FAFAFA',
// 			paddingBottom: 8,
// 		},
// 		'& .MuiTypography-h6': {
// 			fontFamily: theme.typography.h3.fontFamily,
// 			fontSize: theme.typography.h6.fontSize,
// 			color: '#FAFAFA',
// 			paddingBottom: 8,
// 		},
// 	},
// }))
// export default function DietCard({}) {
// 	const classes = useStyles()
// 	return (
// 		<div>
// 			<Card className={classes.cardmain}></Card>
// 		</div>
// 	)
// }
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Offer from "../../components/DietButton";
const useStyles = makeStyles((theme) => ({
  StayHome: {
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
  },
  cardmain:{
   display:'flex',
   flexDirection:'column',
   gap: 190,
    paddingBlock: 14,
    paddingInline: 24,
    [theme.breakpoints.down('xs')]: {
      display:'none',
    },
  },
  cardheading: {
    display: "flex",
    gap: 80,
  },
  weighttext:{
 color:'#FAFBFC;',
 fontSize:theme.typography.h6.fontSize,
 paddingBottom: 8,
  },
  monthtext:{
    color:'#FAFBFC;',
    fontSize:theme.typography.h6.fontSize,
    paddingBottom:12,
  },
  pricesec:{
   display:'flex',
   gap: 12,
  },
  pricetexttwo:{
    color:'#FAFBFC;',
    fontSize:theme.typography.h6.fontSize,
    paddingBottom:12,
    opacity:0.6,
  },
}));

function DietCard({
  backgroundImage,
  weight,
  month,
  pricetext,
  priceone,
	pricetwo,
  
}) {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.StayHome}
        style={{ backgroundImage: backgroundImage }}
      >
        <div className={classes.cardmain}>
          <div className={classes.cardheading}>
            <div>
              <Typography variant="h5" className={classes.weighttext}>{weight}</Typography>
              <Typography variant="h5" className={classes.monthtext}>{month}</Typography>
            </div>
              <Offer>10% off</Offer>
          </div>
          <div className={classes.pricemain}>
          <Typography variant="h5" className={classes.monthtext}>{pricetext}</Typography>
          <div className={classes.pricesec}>
          <Typography variant="h5" className={classes.monthtext}>{priceone}</Typography>
          <Typography variant="h5" className={classes.pricetexttwo}>{pricetwo}</Typography>
          </div>
          <Offer>Book Session</Offer>
          </div>
        </div>
      </div>
    </>
  );
}

export default DietCard;
