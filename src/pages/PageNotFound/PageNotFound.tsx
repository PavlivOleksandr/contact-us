import React from "react";

// helpers
import "./page-not-found.scss";
import { useNavigate } from "react-router-dom";

// components
import Box from "@mui/material/Box";
import Button from "../../components/Mui/Button/Button";
import Typography from "../../components/Mui/Typography/Typography";

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <Box className="page-not-found">
         <Box className="cloud-element">
            <Box
               sx={{ display: { xs: "none", md: "block" } }}
               className="cloud-element-bg"
            >
               <Box className="cloud-shadow-first-elenet"></Box>
               <Box className="cloud-shadow-second-elenet"></Box>
               <Box className="cloud-shadow-third-elenet"></Box>
            </Box>
            <Typography
               sx={{ fontSize: { xs: "40px", sm: "86px" } }}
               fontWeight="700"
               className="cloud-title"
            >
               oops!
            </Typography>
            <Typography
               sx={{ fontSize: { xs: "16px", sm: "26px" } }}
               fontWeight="700"
               className="cloud-description"
            >
               Error 404 : Page Not Found
            </Typography>
            <Button className="cloud-button" onClick={() => navigate(-1)}>
               Go Back
            </Button>
         </Box>
      </Box>
   );
};

export default PageNotFound;
