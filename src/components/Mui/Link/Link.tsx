import React from "react";

// helpers
import "./link.scss";

// components
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";

type LinkUnderlineType = "always" | "hover" | "none";
type LinkVariantType =
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

interface LinkProps extends MuiLinkProps {
   href: string;
   variant?: LinkVariantType;
   children: string;
   underline?: LinkUnderlineType;
}

const Link = ({
   href,
   variant,
   children,
   fontSize,
   fontWeight,
   underline = "none",
}: LinkProps) => {
   return (
      <MuiLink
         href={href}
         variant={variant}
         fontSize={fontSize}
         className={`link`}
         fontWeight={fontWeight}
         underline={underline}
      >
         {children}
      </MuiLink>
   );
};

export default Link;
