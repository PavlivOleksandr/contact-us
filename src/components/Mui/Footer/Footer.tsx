import React, { ReactNode } from "react";

// helpers
import "./footer.scss";

// conponents
import BottomNavigation from "@mui/material/BottomNavigation";

interface FooterProps {
   children: ReactNode;
}
const Footer = ({ children }: FooterProps) => {
   return <BottomNavigation className="footer">{children}</BottomNavigation>;
};

export default Footer;
