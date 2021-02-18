import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { FaAngular } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ServiceCard({cardTitle, content, videoUrl}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
        
          {/* <FaAngular size={80} /> */}
          <iframe title="intro" width="100%" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </Typography>
        <Typography variant="h5" component="h2">
          {cardTitle}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        {/* <Typography variant="body2" component="p">
          {content}
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
    </Card>
  );
}