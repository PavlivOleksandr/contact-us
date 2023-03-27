import React from "react";

// components
import { RadioGroup as MuiRadioGroup, RadioGroupProps } from "@mui/material";

const RadioGroup = ({
   row,
   name,
   value,
   children,
   defaultValue,
   ...rest
}: RadioGroupProps) => {
   return (
      <MuiRadioGroup
         row={row}
         name={name}
         value={value}
         defaultValue={defaultValue}
         {...rest}
      >
         {children}
      </MuiRadioGroup>
   );
};

export default RadioGroup;
