import React, { ReactNode } from "react";

// components
import { Toolbar } from "@mui/material";

type HeaderPositionType = "dense" | "regular" | undefined;

interface HeaderProps {
   variant?: HeaderPositionType;
   children: ReactNode;
}

const Header = ({ variant, children }: HeaderProps) => {
   return (
      <Toolbar className={`header`} variant={variant}>
         {children}
      </Toolbar>
   );
};

export default Header;
