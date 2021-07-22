import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    fontFamily: "'Barlow', sans-serif",
    fontSize: "20px",
    textAlign: 'center',
    
  }
}));

export default function RecipeReviewCard({ title, category, img, description, date}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <p>{category}</p>
      <CardHeader className={classes.title}
        action={
          <IconButton aria-label="settings">
            <HighlightOffIcon />
          </IconButton>
          
        }
        
        // title= {devPro.title}  
        // subheader={devPro.category}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
      />
       <ModalProject />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {description}
        </Typography>
        <p>Créé en {date}</p>
    
      </CardContent>
    </Card>
  );
}