import { Container, Grid } from "@material-ui/core";
// import ServicesCard from "../../components/ServiceCard"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// import WorkIcon from '@material-ui/icons/WorkIcon';
// import SchoolIcon from '@material-ui/icons/SchoolIcon';
// import StarIcon from '@material-ui/icons/StarIcon';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Services() {

  const classes = useStyles();

    return (
      <div style={{position: "relative", top: "0px", paddingBottom: "60px", backgroundColor: '#f2f7f9'}}>
        <Container>
        <h1 style={{textAlign: "center", paddingTop: "30px", marginBottom: "0px"}}>Earn in 4 Simple Steps!</h1>
        <div>
            <div style={{height: "2px", width: "200px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
            <div style={{height: "2px", width: "150px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
            <div style={{height: "2px", width: "100px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
        </div>

        <VerticalTimeline animate={ false }  style={{marginTop: "20px"}}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#202f39', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #4cb44c' }}
            date="2011 - present"
            iconStyle={{ background: '#4cb44c', color: '#fff' }}
            icon={<HotelIcon />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #4cb44c' }}
            date="2010 - 2011"
            iconStyle={{ background: '#4cb44c', color: '#fff' }}
            icon={<HotelIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#202f39', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #4cb44c' }}
            date="2008 - 2010"
            iconStyle={{ background: '#4cb44c', color: '#fff' }}
            icon={<HotelIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  #4cb44c' }}
            date="2006 - 2008"
            iconStyle={{ background: '#4cb44c', color: '#fff' }}
            icon={<HotelIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
             
             
              
              {/* <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<HotelIcon />}
              /> */}
        </VerticalTimeline>
        
        </Container>
      </div>
    )
  }

  {/* <Container style={{marginTop: "20px"}}> */}
          {/* <Grid container>
            <Grid item xs={12}>
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      1st Step
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Join
                      </Typography>
                      <Typography>Join free telegram channel and get signals with 90% accuracy</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      2nd Step
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Copy
                      </Typography>
                      <Typography>Simply copy the signals provided by professional traders</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      3rd Step
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Trade
                      </Typography>
                      <Typography>Put trades in your account and cash the money!</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      4th Step
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Profit
                      </Typography>
                      <Typography>Get highly impressive and huge profit with low risk of investment!</Typography>
                    </Paper>
                  </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          </Grid> */}
        {/* </Container> */}