import { Container, Grid } from "@material-ui/core"

import "./StatsCounter.css"

export default function StatsCounter() {
    return (
        <Container>
            <Grid container style={{marginBottom: "30px"}}>
              <Grid item xs={6} sm={6} md={3}>
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
              <Grid item sm={6} md={3}>  
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

              <Grid item xs={6} sm={6} md={3}>
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
              <Grid item sm={6} md={3}>  
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
    )
}