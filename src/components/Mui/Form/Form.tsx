import React, { ReactNode } from "react";

// components
import { Box } from "@mui/material";

interface FormProps {
   children: ReactNode;
}

const Form = ({ children }: FormProps) => {
   return <Box component="form">{children}</Box>;
};

export default Form;