import { Container, Grid } from "@material-ui/core"
import {Fragment} from "react"

import "./StatsCounter.css"

export default function StatsCounter() {
  return (
    <Fragment style={{backgroundColor: "#f2f7f9"}}>
      <Container style={{backgroundColor: "#f2f7f9", paddingTop: "20px"}}>
        <Grid container style={{backgroundColor: "#f2f7f9"}}>
          <Grid item xs={6} md={3} style={{padding: "10px"}}>
            <div className="dashboard-stats dashboard-stats-round">
              <div className="heading grass">
                <div className="heading-content text-center">
                  <div className="counter text-xxxl" data-count="116">0</div>
                </div>
              </div>
              <div className="dashboard-stats-content">
                <h1 className="title">Total Signals</h1>
              </div>
            </div>  
          </Grid>
          <Grid item xs={6} md={3} style={{padding: "10px"}}>  
            <div className="dashboard-stats dashboard-stats-round">
              <div className="heading grass">
                <div className="heading-content text-center">
                  <div className="counter text-xxxl" data-count="328">0</div>
                </div>
              </div>
              <div className="dashboard-stats-content">
                <h1 className="title">Happy Followers</h1>
              </div>
            </div>   
          </Grid>
          <Grid item xs={6} md={3} style={{padding: "10px"}}>
            <div className="dashboard-stats dashboard-stats-round">
              <div className="heading grass">
                <div className="heading-content text-center">
                  <div className="counter text-xxxl" data-count="116">0</div>
                </div>
              </div>
              <div className="dashboard-stats-content">
                <h1 className="title">Total Signals</h1>
              </div>
            </div>  
          </Grid>
          <Grid item xs={6} md={3} style={{padding: "10px"}}>  
            <div className="dashboard-stats dashboard-stats-round">
              <div className="heading grass">
                <div className="heading-content text-center">
                  <div className="counter text-xxxl" data-count="328">0</div>
                </div>
              </div>
              <div className="dashboard-stats-content">
                <h1 className="title">Happy Followers</h1>
              </div>
            </div>   
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}