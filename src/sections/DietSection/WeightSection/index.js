import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DieticianCard from "../../../components/DieticianCard";
import Diet from '../../../components/DietCard'

const useStyles = makeStyles((theme) => ({
  mainsection: {
    opacity: 1,
    display: "flex",
    justifyContent: "space-evenly",
    paddingBlock: 50,
    paddingInlineStart: 84,
    [theme.breakpoints.down('xs')]: {
      paddingInline: 22,
      paddingBlock: 0,
    },
    [theme.breakpoints.up('sm')]: {
      paddingInlineStart: 96,
    },
  },
  heading: {
    color: theme.palette.care.main,
    fontSize: theme.typography.h4.fontSize,
    paddingBlockEnd: 16,
    [theme.breakpoints.down('xs')]: {
     fontSize: 18,
     paddingBlockEnd: 8,
    },
  },
  sectionone: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingBlockEnd: 52,
    [theme.breakpoints.down('xs')]: {
      paddingBlockEnd: 24,
     },
  },
  paratext: {
    color:theme.palette.paragraph.main,
    fontFamily: theme.typography.h4.fontFamily,
    fontSize: theme.typography.h5.fontSize,
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    '& .MuiSvgIcon-root':{
      fill: '#475677',
      width: '0.5em',
      height: '0.5em',
    },
  },
  sectiontwo: {
    display: "flex",
  },
  calendarsection: {
    display: "flex",
    gap: 8,
    alignItems:'center',
  },
  notepadsection: {
    display: "flex",
    gap: 8,
    alignItems:'center',
  },
  cardmainsec:{
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.up('md')]: {
   gap: 12,
    }
  },
}));
export default function DietWeightCard() {
  const classes = useStyles();
  return (
    <div className={classes.mainsection}>
      <div className={classes.sectionone}>
        <Typography variant="h5" className={classes.heading}>
          Lose Weight
        </Typography>
        <Typography variant="h5" className={classes.calendarsection}>
          <Image
            src="https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/weight-calendar.svg"
            width={18}
            height={18}
            alt="icons"
          />
          Sustainable Fat Loss
        </Typography>
        <Typography variant="h5" className={classes.notepadsection}>
          <Image
            src="https://ik.imagekit.io/lyfngo/web_b2c/public/images/icons/weight-notepad.svg"
            width={22}
            height={22}
            alt="icons"
          />
          Simple diet changes
        </Typography>
        <Typography variant="h5" className={classes.paratext}>
         <ArrowForwardIosIcon/>
          Choose your Expert
        </Typography>
        <Typography variant="h5" className={classes.paratext}>
        <ArrowForwardIosIcon/>
          First Session: Focus on personalised short term plan for a healthy
          start
        </Typography>
        <Typography variant="h5" className={classes.paratext}>
        <ArrowForwardIosIcon/>
          Later Sessions: Focus on monitoring progress and making incremental
          diet changes
        </Typography>
      </div>
      <div className={classes.cardmainsec}>
      <Diet
        backgroundImage= {`url(${"https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/weightbg1.png"})`}
        weight= {"Lose 10Kg Weight"}
        month = {"3 months"}
        offer={"10% off"}
        pricetext = {"Now starting at:"}
        priceone = {"Rs.200"}
        pricetwo = {"Rs.600"}
      />
      <Diet
        backgroundImage= {`url(${"https://ik.imagekit.io/lyfngo/web_b2c/public/images/picture/weightbg2.png"})`}
        weight= {"Lose 15Kg Weight"}
        month = {"3 months"}
        offer={"10% off"}
        pricetext = {"Now starting at:"}
        priceone = {"Rs.200"}
        pricetwo = {"Rs.600"}
      />
      </div>
    </div>
  );
}
