import React from "react";

// helpers
import "./contact-information.scss";
import Ellipse from "../../resources/Img/Ellipse.png";
import EllipseMobile from "../../resources/Img/EllipseMobile.png";

// components
import Box from "@mui/material/Box";
import IconButton from "../../components/Mui/IconButton/IconButton";
import Typography from "../../components/Mui/Typography/Typography";
import IconFa, { IconFaName } from "../../components/Additional/Icons/IconFa";

type ContactInfoType = {
   icon: IconFaName;
   info: string;
};

const ContactInformation = () => {
   const socialIconArray: IconFaName[] = ["twitter", "instagram", "discord"];

   const contactInfoArray: ContactInfoType[] = [
      { icon: "phone", info: "+1012 3456 789" },
      { icon: "message", info: "demo@gmail.com" },
      {
         icon: "location",
         info: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
      },
   ];

   return (
      <Box
         className="contact-info-wrapper"
         sx={{ padding: { xs: "20px", sm: "30px" } }}
      >
         <Box
            className="contact-info-title-wrapper"
            sx={{ textAlign: { xs: "center", md: "left" } }}
         >
            <Typography
               sx={{ fontSize: { xs: "20px", sm: "28px", md:'24px', lg:'28px' } }}
               fontWeight="600"
               className="contact-info-title"
               whiteSpace="nowrap"
            >
               Contact Information
            </Typography>
            <Typography
               fontSize="18px"
               className="contact-info-description"
               whiteSpace="nowrap"
               sx={{
                  fontSize: { xs: "11px", sm: "18px", md: "15px", lg: "18px" },
               }}
            >
               Say something to start a live chat!
            </Typography>
         </Box>
         <Box
            className="contact-info"
            sx={{
               padding: {
                  xs: "5px 0 40px 0",
                  md: "80px 0 207px 0",
                  lg: "80px 0 154px 0",
               },
            }}
         >
            {contactInfoArray.map((item) => (
               <Box
                  key={item.info}
                  className="contact-info-item"
                  sx={{
                     flexDirection: { xs: "column", md: "unset" },
                     maxWidth: { xs: "100%", md: "250px", lg: "350px" },
                     alignItems: { xs: "center", md: "unset" },
                     padding: { xs: "5px 0", md: "20px 0" },
                  }}
               >
                  <IconFa name={item.icon} className="contact-info-icon" />
                  <Typography
                     sx={{
                        textAlign: { xs: "center", md: "left" },
                        marginLeft: { xs: "0", md: "25px" },
                        marginTop: { xs: "10px", md: "0" },
                        maxWidth: { xs: "220px", sm: "280px", md: "unset" },
                        fontSize: { xs: "12px", sm: "16px" },
                     }}
                     className="info"
                  >
                     {item.info}
                  </Typography>
               </Box>
            ))}
         </Box>
         <Box className="icons-content-wrapper">
            <Box
               className="social-button-wrapper"
               sx={{
                  display: { xs: "flex", md: "block" },
                  justifyContent: { xs: "center", md: "unset" },
               }}
            >
               {socialIconArray.map((item) => (
                  <IconButton key={item} className="social-button" size="small">
                     <IconFa name={item} size="sm" />
                  </IconButton>
               ))}
            </Box>
            <Box
               className="ellipse-wrapper"
               sx={{
                  width: { xs: "150px", md: "220px", lg: "220px" },
                  height: { xs: "150px", md: "220px", lg: "220px" },
                  display: { xs: "none", sm: "block" },
               }}
            >
               <img className="ellipse" alt='' src={Ellipse} />
            </Box>
            <Box
               className="ellipse-wrapper"
               sx={{
                  width: { xs: "110px", md: "220px", lg: "220px" },
                  height: { xs: "110px", md: "220px", lg: "220px" },
                  display: { xs: "block", sm: "none" },
               }}
            >
               <img className="ellipse" alt='' src={EllipseMobile} />
            </Box>
         </Box>
      </Box>
   );
};

export default ContactInformation;
