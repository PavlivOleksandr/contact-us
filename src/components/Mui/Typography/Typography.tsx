import React from "react";

// components
import MuiTypography, {
   TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";

type TypographyVariantType =
   | "h1"
   | "h2"
   | "h3"
   | "h4"
   | "h5"
   | "h6"
   | "subtitle1"
   | "subtitle2"
   | "body1"
   | "body2"
   | "caption"
   | "button"
   | "overline"
   | "inherit";
type TypographyAlignType = "center" | "inherit" | "justify" | "left" | "right";

interface TypographyProps extends MuiTypographyProps {
   align?: TypographyAlignType;
   variant?: TypographyVariantType;
   children: string;
   fontSize?: string;
   className?: string;
   fontWeight?: string;
   fontFamily?: string;
}

const Typography = ({
   align,
   variant,
   children,
   fontSize,
   className,
   fontWeight,
   fontFamily,
   ...rest
}: TypographyProps) => {
   return (
      <MuiTypography
         align={align}
         variant={variant}
         fontSize={fontSize}
         className={className}
         fontWeight={fontWeight}
         fontFamily={fontFamily}
         {...rest}
      >
         {children}
      </MuiTypography>
   );
};

export default Typography;
