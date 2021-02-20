import { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  sectionHeading: {
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "0px",
    marginBottom: "0px"
  },
  line200px: { 
    width: "200px"
  },
  line150px: {
    width: "150px"
  },
  line100px: {
    width: "100px"
  },
  line: {
    backgroundColor: "black", 
    height: "2px", 
    margin: "0 auto", 
    marginTop: "2px"
  },
})

export default function SectionTitle({txt}) {

  const classes = useStyles();
  return(
    <Fragment>
      <h1 className={classes.sectionHeading}>{txt}</h1>
        <Fragment>
          <div className={`${classes.line200px} ${classes.line}`}></div>
          <div className={`${classes.line150px} ${classes.line}`}></div>
          <div className={`${classes.line100px} ${classes.line}`}></div>
        </Fragment>
    </Fragment>
  )
}