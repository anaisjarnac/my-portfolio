import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";
import Upload from "./Upload";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  ok: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  dialog: {
    backgroundColor: "#F29F24",
    fontFamily: "Staatliches, cursive",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
  },
  container: {
    //  backgroundColor: "#FFA1B0",
    //  borderRadius: "30px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "black",
    width: "50%",
    backgroundColor: "#80A4B2",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    marginBottom:" 10%",
    "&:hover": {
      background: "#FFDFA3",
    },
    
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
  contact: {
    margin: "20px",
    color: "black",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "25px",
    fontFamily: "'Poppins', sans-serif",
    // borderBottom: "1px solid",
    // paddingBottom: "20px",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
   
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  hr: {
    width: "30%",
    marginTop: "8%",
    marginBottom: "10%",
    size: "30px",
    height: "3px",
    backgroundColor: "black",
    border : "none"
  },
  alert: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "15px",
    marginTop: "20px",
  },
  back: {
    textAlign: "center",
    fontSize: "50px",
    color: "#FFC864",
    margin: "30px"
  },
  
  contain: {
    
    backgroundImage: "url('/assets/martin.jpg')",
    width: "100%",
    height: "100%",
 backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  },
}));

export default function Form() {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    title: "",
    description: "",
    date: "",
    category: "",
    img: "",
    stack: "",
  });

  const createProjects = () => {
    axios.post('http://localhost:3030/projects', form)};

  const handleTextFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createProjects();
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.contain}>
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div>
    
        <Typography className={classes.contact}>
        <Link to={"/projets"}>< KeyboardBackspaceIcon className={classes.back}/></Link>
        <br />
          <strong>CREER UN NOUVEAU PROJET</strong>
        </Typography>
        <hr className={classes.hr}></hr>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                autoComplete="title"
                name={"title"}
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Titre du Projet"
                autoFocus
                onChange={handleTextFieldChange}
                value={form.title}
                required={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Année de création"
                name={"date"}
                autoComplete="date"
                onChange={handleTextFieldChange}
                value={form.date}
                required={false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="category"
                label="Catégorie"
                name={"category"}
                autoComplete="category"
                onChange={handleTextFieldChange}
                value={form.category}
                required={false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="stack"
                label="Technologie utilisée"
                name={"stack"}
                autoComplete="stack"
                onChange={handleTextFieldChange}
                value={form.stack}
                required={false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                id="outlined-textarea"
                required
                label="Description du projet"
                multiline
                variant="outlined"
                onChange={handleTextFieldChange}
                value={form.description}
                name={"description"}
                rows={4}
                rowsMax={7}
                fullWidth
                required={false}
              />
            </Grid>
    
              <Upload />
            
          </Grid>
          <div className={classes.button}>
            <Button
              type="submit"
              onClick={() => setOpen(true)}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Créer 
            </Button>
          </div>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" className={classes.dialog}>
              {"Votre projet est maintenant en ligne !"}
            </DialogTitle>
            <DialogActions>
              <Button
                className={classes.ok}
                onClick={() => setOpen(false)}
                color="primary"
                autoFocus
              >
                <strong>cimer</strong>
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </Container>
    </div>
  );
}