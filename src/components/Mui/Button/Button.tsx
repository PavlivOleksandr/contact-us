import React from "react";

// helpers
import "./button.scss";

// components
import {
   Button as MuiButton,
   ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
   children: string;
   className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
   return (
      <MuiButton {...rest} className={`${className} button`}>
         {children}
      </MuiButton>
   );
};

export default Button;
