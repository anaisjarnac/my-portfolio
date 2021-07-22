import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
alriq: {
    width: "20%"
},
contain: {
    display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
}}))

function ModalViewProject({title, category, img, description, date}) {
    const classes = useStyles();
    return (
        
        <div className={classes.contain}>
            <h1>MON PROJET : LA GUINGUETTE</h1>
            <img src="./assets/alriq.png" className={classes.alriq}/>
            <p>{description}</p>
            <Typography className={classes.title}>{title}</Typography>
             <p>{category}</p>
        </div>
    );
}

export default ModalViewProject;