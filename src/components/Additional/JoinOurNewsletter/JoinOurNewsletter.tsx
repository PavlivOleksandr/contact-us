import React from "react";

// helpers
import "./join-our-newsletter.scss";

// components
import Button from "../../Mui/Button/Button";
import TextField from "../../../components/Mui/TextField/TextField";
import Typography from "../../../components/Mui/Typography/Typography";
import { Box } from "@mui/material";

const JoinOurNewsletter = () => {
   return (
      <Box className="join-our-newsletter">
         <Typography
            fontSize="18ox"
            fontWeight="600"
            className="join-our-newsletter-title"
         >
            Join Our Newsletter
         </Typography>
         <TextField
            label=""
            placeholder="Your email address"
            className="join-our-newsletter-input"
            variant="outlined"
            endAdornment={<Button className="join-our-newsletter-button">Subscribe</Button>}
         />
         <Typography
            fontSize="13px"
            fontWeight="500"
            className="join-our-newsletter-description"
         >
            * Will send you weekly updates for your better tool management.
         </Typography>
      </Box>
   );
};

export default JoinOurNewsletter;
