import React from "react";

// components
import RadioIcon from "../../../resources/Icons/RadioIcon";
import RadioCheckIcon from "../../../resources/Icons/RadioCheckIcon";
import { Radio as MuiRadio, RadioProps } from "@mui/material";

const Radio = (props: RadioProps) => {
   return (
      <MuiRadio
         {...props}
         checkedIcon={<RadioCheckIcon />}
         icon={<RadioIcon />}
      />
   );
};

export default Radio;
