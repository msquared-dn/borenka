import { useState, Fragment } from "react";
import classes from "./home.module.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useLocation } from "react-router-dom";
import { IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ParkIcon from "@mui/icons-material/Park";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const pages = [
  { label: "Дома", path: "/home", icon: <HomeIcon /> },
  { label: "За Нас", path: "/about", icon: <AccountCircle /> },
  { label: "Засади Дрво", path: "/map", icon: <ParkIcon /> },
  { label: "Организатори", path: "/organizations", icon: <GroupWorkIcon /> },
  { label: "Контакт", path: "/contact", icon: <PhoneIcon /> },
];

export const MobileDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const drawer = (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon
            sx={{ margin: "15px", fill: "var(--text-secondary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </div>
        <Box
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ textAlign: "center" }}
          style={{ display: "grid", justifyContent: "center" }}
        >
          <List>
            {pages.map((page, index) => (
              <ListItem
                key={page.label}
                disablePadding
                sx={{ textAlign: "center" }}
              >
                <Link
                  to={page.path}
                  key={index}
                  onClick={() => setMobileOpen(false)}
                  className={
                    pathname === page.path ? classes.active : classes.link
                  }
                  style={{ width: "100%" }}
                >
                  {page.icon}
                  {page.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
      <div className={classes.socialMediaMobile}>
        <a href="https://www.instagram.com/scoutsmacedonia/?hl=en">
          <InstagramIcon />
        </a>
        <a href="https://www.instagram.com/borenka.mk/?hl=en">
          <FacebookIcon />
        </a>
      </div>
      <p
        style={{
          color: "#bae8c7",
          marginBottom: "50px",
          marginTop: "auto",
          textAlign: "center",
        }}
      >
        Copyright v1.0.0
      </p>
    </>
  );

  return (
    <div className={classes.mobileContainer}>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setMobileOpen(!mobileOpen)}
          edge="start"
        >
          <MenuIcon sx={{ fill: "#014040" }} />
        </IconButton>
      </Box>
      <Fragment key="right">
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "var(--primary)",
              borderLeft: " 3px solid var(--secondary)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Fragment>
    </div>
  );
};
