import React, { ReactNode } from "react";

// components
import MuiIconButton, {
   IconButtonProps as MuiIconButtonProps,
} from "@mui/material/IconButton";

interface IconButtonProps extends MuiIconButtonProps {
   children: ReactNode;
   className?: string;
}

const IconButton = ({ children, className, ...rest }: IconButtonProps) => {
   return (
      <MuiIconButton className={className} {...rest}>
         {children}
      </MuiIconButton>
   );
};

export default IconButton;
