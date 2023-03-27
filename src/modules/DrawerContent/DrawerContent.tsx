import React, { useMemo, useState } from "react";

// helpers
import "./drawer-content.scss";

// components
import Box from "@mui/material/Box";
import Menu from "../../components/Mui/Menu/Menu";
import Link from "../../components/Mui/Link/Link";
import IconFa from "../../components/Additional/Icons/IconFa";
import MenuItem from "@mui/material/MenuItem";
import CartIcon from "../../resources/Icons/CartIcon";
import Typography from "../../components/Mui/Typography/Typography";
import IconButton from "../../components/Mui/IconButton/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface DrawerContentProps {
   onClose: () => void;
}

const DrawerContent = ({ onClose }: DrawerContentProps) => {
   const anchorRef = React.useRef<HTMLButtonElement>(null);
   const [openMenu, setOpenMenu] = useState(false);

   const links = useMemo(() => {
      const linkArray = [
         { label: "Home", path: "/home" },
         { label: "Features", path: "/features" },
         { label: "Blog", path: "/blog" },
         { label: "Shop", path: "/shop" },
         { label: "About", path: "/about" },
         { label: "Contact", path: "/" },
      ];
      return linkArray.map((item, index) => (
         <Box key={item.label} className="link">
            {item.label !== "Features" ? (
               <Link
                  key={item.label}
                  href={item.path}
                  fontSize="16px"
                  fontWeight={index === 5 ? "600" : "400"}
               >
                  {item.label}
               </Link>
            ) : (
               <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
                  <Box
                     ref={anchorRef}
                     className="menu-wrapper"
                     onClick={() => setOpenMenu(!openMenu)}
                  >
                     <Typography>{item.label}</Typography>
                     <IconFa
                        className="row-icon"
                        name={openMenu ? "angleUp" : "angleDown"}
                     />
                     <Menu
                        anchorEl={anchorRef.current}
                        onClose={() => setOpenMenu(false)}
                        open={openMenu}
                     >
                        {new Array(3).fill(null).map((_, i) => (
                           <MenuItem key={i}>Feature {i + 1}</MenuItem>
                        ))}
                     </Menu>
                  </Box>
               </ClickAwayListener>
            )}
         </Box>
      ));
   }, [openMenu]);

   return (
      <Box className="draver">
         <Box>
            <Box className="draver-header-wrapper">
               <Typography
                  variant="h5"
                  fontSize="24px"
                  fontWeight="800"
                  className="draver-title"
               >
                  Logo Here
               </Typography>
               <IconButton onClick={onClose}>
                  <IconFa name="times" />
               </IconButton>
            </Box>
            <Box className="draver-links-wrapper">{links}</Box>
         </Box>

         <Box className="draver-icons-wrapper">
            <IconButton>
               <IconFa name="user" size="sm" />
            </IconButton>
            <IconButton>
               <CartIcon />
            </IconButton>
         </Box>
      </Box>
   );
};

export default DrawerContent;
