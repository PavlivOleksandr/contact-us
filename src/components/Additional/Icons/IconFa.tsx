import React, { memo } from "react";

// helpers
import "./icon-fa.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
   faTwitter,
   faInstagram,
   faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
   faTimes,
   faAngleUp,
   faEnvelope,
   faAngleDown,
   faPhoneVolume,
   faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// components
import {
   FontAwesomeIcon,
   FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export const icons = {
   // Solid
   times: faTimes,
   phone: faPhoneVolume,
   angleUp: faAngleUp,
   message: faEnvelope,
   location: faLocationDot,
   angleDown: faAngleDown,

   // Regular
   user: faUser,

   // Brands
   discord: faDiscord,
   twitter: faTwitter,
   instagram: faInstagram,
};

export type IconFaName = keyof typeof icons;

type IconFaSizeType = "2x" | "1x" | "sm" | "xs";

type IconFaProps = {
   name: IconFaName;
   size?: IconFaSizeType;
   className?: string;
} & Omit<FontAwesomeIconProps, "icon">;

const IconFa = memo(
   ({ name, size = "1x", className, ...rest }: IconFaProps) => {
      return (
         <FontAwesomeIcon
            {...rest}
            icon={icons[name]}
            className={`icon-fa ${size} ${className}`}
            size={size}
         />
      );
   }
);

export default IconFa;
