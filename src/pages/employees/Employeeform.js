import { Grid } from "@material-ui/core";
import React from "react";
import { useForm, Form } from "../../components/useForm";
// import Input from "../../components/controls/Input";
// import RadioGroup from "../../components/controls/RadioGroup";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  departmentID: "",
  hireDate: new Date(),
  isPermanent: false,
};
const EmployeeForm = () => {
  //
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This filed is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    if ("departmentID" in fieldValues)
      temp.departmentID =
        fieldValues.departmentID.length != 0 ? "" : "This filed is required";
    setErrors({ ...temp });

    //
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  //
  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.alert("Testing");
    if (validate()) {
      window.alert("Testing");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentID"
            label="Department"
            value={values.departmentID}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentID}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              // color="primary"
              // size="large"
              text="Submit"
              type="submit"
            />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
