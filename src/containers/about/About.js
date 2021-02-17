import { Container, Grid } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import about from "../../assets/images/about.jpeg"

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     // padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

export default function About() {
  
  // const classes = useStyles();
    return (
      <div style={{position: "relative", top: "44px", backgroundColor: "#fff"}}>
        <h1 style={{textAlign: "center", paddingTop: "30px", paddingBottom: "0px", marginBottom: "0px"}}>About Us</h1>
        <div>
          <div style={{height: "2px", width: "200px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
          <div style={{height: "2px", width: "150px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
          <div style={{height: "2px", width: "100px", backgroundColor: "black", margin: "0 auto", marginTop: "2px"}}></div>
        </div>

        <div style={{paddingTop: "20px", paddingBottom: "40px"}}>
          <Container>

            <Grid container>
              <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                <img src={about} alt="Logo" style={{width: "80%", borderRadius: "40px"}} />
               
              </Grid>
              <Grid item xs={12} md={6}>
                <p>
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </p>
                
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }