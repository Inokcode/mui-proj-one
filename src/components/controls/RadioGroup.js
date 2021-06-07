import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

const RadioGroup = (props) => {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <MuiRadioGroup row={true} name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            label={item.title}
            control={<Radio />}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
