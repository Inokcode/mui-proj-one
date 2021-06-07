import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    // console.log({ name });
    // console.log({ value });
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, setValues, handleInputChange };
};
//
const useStyles = makeStyles((theme) => ({
  rootFrom: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
export const Form = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.rootFrom} autoComplete="off">
      {props.children}
    </form>
  );
};
