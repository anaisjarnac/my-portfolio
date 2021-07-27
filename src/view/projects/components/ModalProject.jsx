import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    textAlign: "center",
    color: "white",
  },
  alriq: {
    width: "30%",
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    marginLeft: "100px",
    marginTop: "20px",
    width: "30%",
    fontFamily: "poppins, sans-serif",
    fontSize: "10px",
    color: "#566B5B",
    borderColor: "#566B5B",
    "&:hover": {
      backgroundColor: "#EA9FA5",
      color: "white",
      border: "none",
    },
  },
  toolbar: {
    backgroundColor: "#93BCB0",
  },
  text: {
    fontFamily: "poppins, sans-serif",
    fontSize: "20px",
    color: "#566B5B",
    textAlign: "center",
  },
  techno: {
    fontFamily: "poppins, sans-serif",
    fontSize: "20px",
    color: "#566B5B",
    textAlign: "center",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalProject({ devPro }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [unicproject, setUnicProject] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://toctoc-api.herokuapp.com/flat/${props.match.params.id}`)
  //     .then((response) => {
  //       setUnicProject(response.data);
  //     });
  // }, [props.match.params.id]);

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Voir Plus
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {/* {unicproject.title} */}
              <h1>MON PROJET : LA GUINGUETTE</h1>
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <p className={classes.text}>
            Crée en <strong>2021</strong>
          </p>
          <img src="./assets/alriq.png" alt="" className={classes.alriq} />
          <p className={classes.text}>
            La guinguette de chez alric projet blabla
          </p>
          <p className={classes.text}>Catégorie : Developpement web</p>
          <p className={classes.techno}>
            Technologie utilisée : Réact - HTML - CSS
          </p>
        </div>
      </Dialog>
    </div>
  );
}
