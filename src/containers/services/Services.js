import { Container, Grid } from "@material-ui/core";
import ServicesCard from "../../components/ServiceCard"

export default function Services() {
    return (
      <div style={{position: "relative", top: "0px", paddingBottom: "60px", backgroundColor: '#f2f7f9'}}>
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <h1 style={{textAlign: "center", paddingTop: "30px", marginBottom: "0px"}}>Your Path To Successful Trading</h1>
                    <div>
                        <div style={{height: "2px", width: "200px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                        <div style={{height: "2px", width: "150px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                        <div style={{height: "2px", width: "100px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
                    </div>
                    <Grid container spacing={2} style={{marginTop: "30px"}}>
                      <Grid item xs={12} sm={6} lg={3}>
                        <ServicesCard cardTitle="Join" content="this is just content" />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3}>
                        <ServicesCard cardTitle="Copy" content="this is just content" />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3}>
                        <ServicesCard cardTitle="Trade" content="this is just content" />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3}>
                        <ServicesCard cardTitle="Get Profit" content="this is just content" />
                      </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Container>
      </div>
    )
  }