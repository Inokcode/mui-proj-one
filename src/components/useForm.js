import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export const useForm = (initialFValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    // console.log({ name });
    // console.log({ value });
    setValues({
      ...values,
      [name]: value,
    });
    //
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };
  return { values, setValues, handleInputChange, errors, setErrors, resetForm };
};
//
//
//
//

//
//
//
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
  const { children, ...other } = props;
  return (
    <form className={classes.rootFrom} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
