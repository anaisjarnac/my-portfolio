import React from "react";
import Button from "@material-ui/core/Button";
import ProjectsList from "./components/ProjectsList";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCEAE8",
  },
  button: {
margin: "40px",
backgroundColor: "white"
  },
  hr: {
    width: "10%",
    marginBottom: "10px",
    height: "2px",
    backgroundColor: "white",
    border: "none",
    marginBottom: "50px"
  },
  title: {
    color: "white",
    fontFamily: "Inter', sans-serif",
    marginTop: "50px"
  },
  back: {
    textAlign: "center",
    fontSize: "50px",
    color: "red",
  }
}));

const Project = [
  {
    img: "./assets/alriq.png",
    title: "La guiguette",
    category: "Développement Web",
    date: "2021",
    description: "Projet sur la guinguette d'alriq",
    stack: "HTML / CSS / JavaScript",
  },
  {
    img: "./assets/sos.jpeg",
    title: "SOS-Apérobots",
    category: "Développement Web",
    date: "2021",
    description: "Deliveroo on Mars",
    stack: "Javascript / React",
  },
  {
    img: "./assets/toctoc.png",
    title: "Toc-Toc",
    category: "Développement Web",
    date: "2021",
    description: "Rencontre entre particuliers & propriétaires",
    stack: "Javascript / React / NodeJS",
  },
  {
    img: "./assets/fiver.png",
    title: "Fiverr",
    category: "Développement Web",
    date: "2021",
    description: "Rencontre des freelances de ton quartier",
    stack: "Javascript / React",
  },
  {
    img: "./assets/velo.png",
    title: "Cargo Bike Trade",
    category: "Développement Web",
    date: "2021",
    description: "Market Place de Vélo Cargo",
    stack: "Javascript / React / Mysql / Express / NodeJs",
  },
  {
    img: "./assets/pack.jpg",
    title: "Le temps des cerises",
    category: "Design",
    date: "2016",
    description: "Packaging marque café local",
    stack: "Adobe",
  },
];

function MyProjets(props) {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <Link to={"/"}>< KeyboardBackspaceIcon className={classes.back}/></Link>
        <br />
      <h1 className={classes.title}>Mes Projets</h1>
      <hr className={classes.hr}></hr>
      <ProjectsList mesProjets={Project} className={classes.grid}/>
      <Link to={"/nouveauprojet"}><Button variant="outlined" className={classes.button}>
        Ajouter un projet
        <AddIcon />
      </Button>
      </Link>
    </div>
  );
}

export default MyProjets;
