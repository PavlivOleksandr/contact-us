import React from "react";

// helpers
import "./contact-us.scss";

// conponents
import Box from "@mui/material/Box";
import Content from "../Content/Content";
import Typography from "../../components/Mui/Typography/Typography";

const ContactUs = () => {
   return (
      <Box className="contact-us">
         <Box className="title-wrapper">
            <Typography
               sx={{ fontSize: { xs: "24px", sm: "40px" } }}
               fontWeight="700"
               className="title"
            >
               Contact Us
            </Typography>
            <Typography
               sx={{ fontSize: { xs: "14px", sm: "18px" } }}
               fontWeight="500"
               className="description"
            >
               Any question or remarks? Just write us a message!
            </Typography>
         </Box>
         <Content />
      </Box>
   );
};

export default ContactUs;
