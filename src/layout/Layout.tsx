import React from "react";

// components
import Header from "../components/Mui/Header/Header";
import Footer from "../components/Mui/Footer/Footer";
import HeaderContent from "../modules/HeaderContent/HeaderContent";
import FooterContent from "../modules/FooterContent/FooterContent";
import { Box } from "@mui/material";

interface IProps {
   children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
   return (
      <Box>
         <Header>
            <HeaderContent />
         </Header>
         <Box>{children}</Box>
         <Footer>
            <FooterContent />
         </Footer>
      </Box>
   );
};

export default Layout;
