import React from "react";

// helpers
import "./form-block.scss";
import LetterSend from "../../resources/Img/LetterSend.png";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Form from "../../components/Mui/Form/Form";
import Radio from "../../components/Mui/Radio/Radio";
import Button from "../../components/Mui/Button/Button";
import TextField from "../../components/Mui/TextField/TextField";
import Typography from "../../components/Mui/Typography/Typography";
import RadioGroup from "../../components/Mui/RadioGroup/RadioGroup";
import FormControlLabel from "../../components/Mui/FormControlLabel/FormControlLabel";

const FormBlock = () => {
   const inputItemsArray = [
      { id: "firstName", name: "firstName", label: "First Name", type: "text" },
      { id: "lastName", name: "lastName", label: "Last Name", type: "text" },
      { id: "email", name: "email", label: "Email", type: "email" },
      { id: "number", name: "number", label: "Phone Number", type: "number" },
   ];

   const radioItemsArray = [
      { value: "1", label: "General Inquiry" },
      { value: "2", label: "General Inquiry" },
      { value: "3", label: "General Inquiry" },
      { value: "4", label: "General Inquiry" },
   ];

   return (
      <Box
         className="form-block"
         sx={{ padding: { xs: "30px 0 0 0", sm: "30px 30px 0 30px" } }}
      >
         <Form>
            <Grid
               container
               rowSpacing={{ xs: 1, lg: 6 }}
               columnSpacing={{ xs: 1, md: 3 }}
            >
               {inputItemsArray.map((item) => (
                  <Grid key={item.id} item xs={12} lg={6}>
                     <TextField
                        id={item.id}
                        name={item.name}
                        label={item.label}
                        type={item.type}
                     />
                  </Grid>
               ))}
            </Grid>
            <Box
               className="radio-wrapper"
               sx={{ padding: { xs: "20px 0", lg: "40px 0" } }}
            >
               <Typography
                  className="radio-block-title"
                  fontSize="14px"
                  fontWeight="600"
               >
                  Select Subject?
               </Typography>
               <Box>
                  <RadioGroup row>
                     <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, md: 2, lg: 3 }}
                        whiteSpace="nowrap"
                     >
                        {radioItemsArray.map((item) => (
                           <Grid key={item.value} item xs={6} lg={3} className="radio-control">
                              <FormControlLabel
                                 value={item.value}
                                 label={item.label}
                                 control={<Radio />}
                              />
                           </Grid>
                        ))}
                     </Grid>
                  </RadioGroup>
               </Box>
            </Box>
            <Box>
               <TextField label="Message" placeholder="Write your message..." />
            </Box>
            <Box
               className="button-block"
               sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "flex-end" },
               }}
            >
               <Button
                  sx={{
                     padding: "10px 40px",
                     width: { xs: "100%", sm: "unset" },
                  }}
                  variant="contained"
               >
                  Send Message
               </Button>
               <Box
                  className="letter-send-wrapper"
                  sx={{ width: { xs: "60%", sm: "unset" } }}
               >
                  <img className="letter-send" alt="LetterSend" src={LetterSend} />
               </Box>
            </Box>
         </Form>
      </Box>
   );
};

export default FormBlock;
