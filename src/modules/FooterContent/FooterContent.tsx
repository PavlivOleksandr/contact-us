import React from "react";

// helpers
import "./footer-content.scss";
import { IconFaName } from "../../components/Additional/Icons/IconFa";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "../../components/Mui/Link/Link";
import IconFa from "../../components/Additional/Icons/IconFa";
import Typography from "../../components/Mui/Typography/Typography";
import JoinOurNewsletter from "../../components/Additional/JoinOurNewsletter/JoinOurNewsletter";

type ContactInfoArrayType = {
   icon: IconFaName;
   info: string;
};

const FooterContent = () => {
   const contactInfoArray: ContactInfoArrayType[] = [
      { icon: "phone", info: "+1012 3456 789" },
      { icon: "message", info: "demo@gmail.com" },
      {
         icon: "location",
         info: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
      },
   ];

   const companyArray = [
      { label: "About", path: "" },
      { label: "Contact", path: "" },
      { label: "Blogs", path: "" },
   ];

   const legalArray = [
      { label: "Privacy Policy", path: "" },
      { label: "Terms & Services", path: "" },
      { label: "Terms of Use", path: "" },
      { label: "Refund Policy", path: "" },
   ];

   const quickLinksArray = [
      { label: "Techlabz Keybox", path: "" },
      { label: "Downloads", path: "" },
      { label: "Forum", path: "" },
   ];

   return (
      <Box className="footer-content">
         <Typography
            sx={{ padding: "20px" }}
            fontSize="36px"
            fontWeight="800"
            className="footer-title"
         >
            Logo Here
         </Typography>
         <Grid container sx={{ marginTop: { xs: "20px" } }}>
            <Grid item xs={9} md={4} lg={3}>
               <Typography
                  className="footer-reach-us-title"
                  fontWeight="600"
                  sx={{
                     paddingBottom: "20px",
                     fontSize: { xs: "14px", sm: "18px" },
                  }}
               >
                  Reach Us
               </Typography>
               {contactInfoArray.map((item) => (
                  <Box
                     key={item.info}
                     className="footer-contact-info-item"
                     sx={{
                        display: { xs: "flex", md: "block" },
                        flexDirection: { xs: "column", md: "unset" },
                        alignItems: { xs: "flex-start" },
                        maxWidth: { xs: "180px", md: "360px" },
                     }}
                  >
                     <IconFa name={item.icon} className="contact-info-icon" />
                     <Typography
                        sx={{
                           marginLeft: { xs: "0", md: "25px" },
                           fontSize: { xs: "12px", sm: "16px" },
                           marginTop: { xs: "10px", md: "0" },
                        }}
                        className="info"
                     >
                        {item.info}
                     </Typography>
                  </Box>
               ))}
            </Grid>
            <Grid
               item
               xs={3}
               md={2}
               lg={2}
               sx={{
                  display: "flex",
                  justifyContent: {
                     xs: "flex-end",
                     md: "center",
                  },
               }}
            >
               <Box>
                  <Typography
                     className="footer-reach-us-title"
                     fontWeight="600"
                     sx={{
                        paddingBottom: "20px",
                        fontSize: { xs: "14px", sm: "18px" },
                     }}
                  >
                     Company
                  </Typography>
                  {companyArray.map((item) => (
                     <Box key={item.label} className="footer-contact-info-item">
                        <Link
                           href={item.path}
                           className="info"
                           fontSize={{ xs: "12px", sm: "16px" }}
                        >
                           {item.label}
                        </Link>
                     </Box>
                  ))}
               </Box>
            </Grid>
            <Grid
               item
               xs={9}
               md={3}
               lg={2}
               sx={{
                  display: { xs: "block", md: "flex" },
                  justifyContent: "center",
                  marginTop: { xs: "20px", md: "0" },
               }}
            >
               <Box>
                  <Typography
                     className="footer-reach-us-title"
                     fontWeight="600"
                     sx={{
                        paddingBottom: "20px",
                        fontSize: { xs: "14px", sm: "18px" },
                     }}
                  >
                     Legal
                  </Typography>
                  {legalArray.map((item) => (
                     <Box key={item.label} className="footer-contact-info-item">
                        <Link
                           href={item.path}
                           className="info"
                           fontSize={{ xs: "12px", sm: "16px" }}
                        >
                           {item.label}
                        </Link>
                     </Box>
                  ))}
               </Box>
            </Grid>
            <Grid
               item
               xs={3}
               md={2}
               lg={2}
               sx={{
                  display: "flex",
                  justifyContent: {
                     xs: "flex-end",
                     md: "center",
                  },
                  marginTop: { xs: "20px", md: "0" },
               }}
            >
               <Box>
                  <Typography
                     className="footer-reach-us-title"
                     fontWeight="600"
                     sx={{
                        paddingBottom: "20px",
                        fontSize: { xs: "14px", sm: "18px" },
                     }}
                  >
                     Quick Links
                  </Typography>
                  {quickLinksArray.map((item) => (
                     <Box key={item.label} className="footer-contact-info-item">
                        <Link
                           href={item.path}
                           className="info"
                           whiteSpace="nowrap"
                           fontSize={{ xs: "12px", sm: "16px" }}
                        >
                           {item.label}
                        </Link>
                     </Box>
                  ))}
               </Box>
            </Grid>
            <Grid
               item
               xs={12}
               md={12}
               lg={3}
               sx={{ display: "flex", justifyContent: "flex-end" }}
            >
               <JoinOurNewsletter />
            </Grid>
         </Grid>
      </Box>
   );
};

export default FooterContent;
