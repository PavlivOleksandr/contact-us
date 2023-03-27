import React, { ReactNode } from "react";

// helpers
import "./text-field.scss";

// components
import { TextField as MuiTextField } from "@mui/material";

interface TextFieldProps {
   id?: string;
   label: string;
   name?: string;
   type?: string;
   variant?: "standard" | "outlined";
   className?: string;
   placeholder?: string;
   endAdornment?: ReactNode;
}

const TextField = ({
   id,
   label,
   name,
   type,
   variant = "standard",
   className,
   placeholder,
   endAdornment,
}: TextFieldProps) => {
   return (
      <MuiTextField
         id={id}
         name={name}
         label={label}
         placeholder={placeholder}
         variant={variant}
         type={type}
         fullWidth
         className={`${className} text-field`}
         InputLabelProps={{ shrink: true }}
         InputProps={{
            endAdornment: endAdornment,
         }}
      />
   );
};

export default TextField;
