import React from 'react';

import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import HotelIcon from '@material-ui/icons/Hotel'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import SectionTitle from "../components/SectionTitle"
import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  servicesSection: {
    position: "relative", 
    top: "0px", 
    paddingBottom: "60px", 
    backgroundColor: '#f2f7f9'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Services() {

  const classes = useStyles();
    return (
      <div className={classes.servicesSection}>
        <Container>
          <SectionTitle txt="Earn in 4 Simple Steps!" />
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
          </VerticalTimeline>
        </Container>
      </div>
    )
  }