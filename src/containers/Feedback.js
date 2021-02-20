import { Container, Grid } from "@material-ui/core";
import SectionTitle from "../components/SectionTitle";
import ServicesCard from "../components/ServiceCard"

export default function Feedback() {
  return (
    <div style={{position: "relative", top: "0px", paddingBottom: "60px", backgroundColor: '#fff'}}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <SectionTitle txt={"Customer Feedback"} />
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