import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ModalProject from './ModalProject';
import {
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 430,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    textAlign: 'center',
    margin:"10px",
    color: "#75A19B"
  },
  hr: {
    width: "20%",
    height: "1px",
    backgroundColor: "#75A19B",
    border: "none",
    
  },
  cat: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    textAlign: 'center',
    color: "#9EA074"
  },
  cat2: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "10px",
    textAlign: 'center',
    color: "#CF7C83"
  },
  icon: {
    marginLeft: "250px",
    color: "#566B5B"
  },
}));

export default function RecipeReviewCard({ title, category, img, description, date}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);
  

  const sampleDelete = async () => {
    const result = await axios.delete('http://localhost:3030/projects/${id}');
    console.log(result);
  };

  return (
    <Card className={classes.root}>
     <div>
     <IconButton aria-label="settings" className={classes.icon}>
            <HighlightOffIcon onClick={sampleDelete}/>
            {/* // onClick={() => setOpen(true)} */}
            
          </IconButton>
     <h1 className={classes.title}>{title}</h1>
      <hr className={classes.hr}></hr>
      <p className={classes.cat}>{category}</p>
      </div>
      <p className={classes.cat2}>{description}</p>
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
        
      />
       <ModalProject className={classes.modal}/>
       <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" className={classes.dialog}>
              {"Votre projet a bien été supprimé !"}
            </DialogTitle>
            <DialogActions>
              <Button
                className={classes.ok}
                onClick={() => setOpen(false)}
                color="primary"
                autoFocus
              >
                <strong>Ok</strong>
              </Button>
            </DialogActions>
          </Dialog>
    </Card>
  );
}