import React, { useState, useEffect, useMemo } from "react";

// helpers
import "./header-content.scss";
import CartIcon from "../../resources/Icons/CartIcon";

// components
import Box from "@mui/material/Box";
import Menu from "../../components/Mui/Menu/Menu";
import Link from "../../components/Mui/Link/Link";
import IconFa from "../../components/Additional/Icons/IconFa";
import Drawer from "../../components/Mui/Drawer/Drawer";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "../../resources/Icons/MenuIcon";
import IconButton from "../../components/Mui/IconButton/IconButton";
import Typography from "../../components/Mui/Typography/Typography";
import DrawerContent from "../DrawerContent/DrawerContent";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const HeaderContent = () => {
   const anchorRef = React.useRef<HTMLButtonElement>(null);
   const [openMenu, setOpenMenu] = useState(false);
   const [openDrawer, setOpenDrawer] = useState(false);

   const handleClose = () => setOpenDrawer(false);

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
         <Box key={item.label} sx={{ padding: { xs: "0 16px", lg: "0 23px" } }}>
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

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth > 900) {
            setOpenDrawer(false);
         }
      }

      window.addEventListener("resize", handleResize);
   });

   return (
      <Box
         className="header-content-wrapper"
         sx={{ padding: { xs: "20px 0", sm: "20px 60px" } }}
      >
         <Typography variant="h5" fontSize="24px" fontWeight="800">
            Logo Here
         </Typography>
         <Box
            className="header-navigation-wrapper"
            sx={{ display: { xs: "none", md: "flex" } }}
         >
            <>{links}</>
            <Box className="header-icon-button-wrapper">
               <IconButton>
                  <IconFa name="user" size="sm" />
               </IconButton>
               <IconButton>
                  <CartIcon />
               </IconButton>
            </Box>
         </Box>
         <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setOpenDrawer(true)}>
               <MenuIcon />
            </IconButton>
         </Box>
         <Box sx={{ width: "100%", position: "absolute" }}>
            <Drawer
               PaperProps={{
                  sx: { width: { xs: "100%", sm: "50%" } },
               }}
               open={openDrawer}
               onClose={() => setOpenDrawer(false)}
               anchor="right"
            >
               <DrawerContent onClose={handleClose} />
            </Drawer>
         </Box>
      </Box>
   );
};

export default HeaderContent;
