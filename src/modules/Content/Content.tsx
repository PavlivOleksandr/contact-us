import React from "react";

// helpers
import "./content.scss";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormBlock from "../FormBlock/FormBlock";
import ContactInformation from "../ContactInformation/ContactInformation";

const Content = () => {
   return (
      <Box className="content-wrapper">
         <Grid
            container
            className="content"
            sx={{ width: { xs: "90%", sm: "80%" } }}
         >
            <Grid item xs={12} md={5}>
               <ContactInformation />
            </Grid>
            <Grid item xs={12} md={7}>
               <FormBlock />
            </Grid>
         </Grid>
      </Box>
   );
};

export default Content;
