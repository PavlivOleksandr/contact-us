import React from "react";

// conponents
import {
   FormControlLabel as MuiFormControlLabel,
   FormControlLabelProps,
} from "@mui/material";

const FormControlLabel = ({ value, label, control }: FormControlLabelProps) => {
   return <MuiFormControlLabel value={value} label={label} control={control} />;
};
export default FormControlLabel;
