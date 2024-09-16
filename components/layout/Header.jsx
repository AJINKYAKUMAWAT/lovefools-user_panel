"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import Image from "next/image";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About us",
  "Receipt",
  "History",
  "Event",
  "Gallery",
  "Testimonial",
  "Contact us",
];

export default function Header(props) {
  const [scrolling, setScrolling] = React.useState(false);

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if window is defined before accessing properties
      if (typeof window !== "undefined") {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    // Explicitly assert the type of window as Window
    const currentWindow = window;

    // Check if window is defined before adding the event listener
    if (typeof currentWindow !== "undefined") {
      currentWindow.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      // Check if window is defined before removing the event listener
      if (typeof currentWindow !== "undefined") {
        currentWindow.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, display:'flex',alignItems:'center',justifyContent:'center'  }}>
      <Image src={logo1} alt="" style={{width:'55%'}} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} sx={{fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: scrolling ? "#122c29" : "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ background: { xs: "#122c29", md: "transparent" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "flex", md: "none", sm: "none", lg: "none" },
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Image src={logo} alt="" style={{width:'55%'}} />
            </Typography>
          
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Image src={logo} alt="" width="150" />
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 2,
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: "#000", fontWeight: "600", marginLeft: "10px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                      textTransform: "capitalize",
                      color: index === 0 ? "#ED1C24" : "#fff",
                      fontWeight:index===0 ? '700':'500'
                    }}
                  >
                    {item}
                  </Typography>
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{ background: "#ED1C24", borderRadius: "20px",fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif"  }}
              >
                Book Table
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}
