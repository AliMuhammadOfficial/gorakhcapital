import { Container, Grid } from "@material-ui/core";
import ServicesCard from "../../components/ServiceCard"

export default function Feedback() {
    return (
      <div style={{position: "relative", top: "0px", paddingBottom: "60px", backgroundColor: '#fff'}}>
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <h1 style={{textAlign: "center", paddingTop: "30px", marginBottom: "0px"}}>Customer Feedbacks</h1>
                    <div>
                        <div style={{height: "2px", width: "200px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                        <div style={{height: "2px", width: "150px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                        <div style={{height: "2px", width: "100px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                    </div>
                    <Grid container spacing={2} style={{marginTop: "30px"}} >
                      <Grid item xs={12} sm={6} lg={4} >
                        <ServicesCard  style={{height: "600px"}} cardTitle="Feedback about Forex..." videoUrl="https://www.youtube.com/embed/looq3Dzp6Y8" />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <ServicesCard cardTitle="Copy" />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <ServicesCard cardTitle="Trade" />
                      </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Container>
      </div>
    )
  }