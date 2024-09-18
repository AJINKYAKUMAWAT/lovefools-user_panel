import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Textarea from "@mui/joy/Textarea";
import { Email, Person, PhoneAndroid } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "50px",
        paddingX: { xs: "20px", md: "50px" }, // Add responsive padding
        background: "linear-gradient(to left, #D4BA97 30%, transparent 20%)",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "70%" }, // Adjust width for mobile and desktop
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
            width: "100%",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              width: "15%",
              marginRight: "10px",
            }}
          />
          <Box sx={{ padding: "0 10px" }}>Contact</Box>
          <Box
            sx={{ border: "1px solid black", width: "15%", marginLeft: "10px" }}
          />
        </Typography>{" "}
      </Box>

      <Box sx={{ width: { xs: "100%", md: "90%", lg: "65%" } }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12} // Full width on mobile
            md={6} // Half width on medium devices
          >
            <Box
              sx={{
                height: "100%",
                boxShadow: "0px 0px 2px 2px #f0cd30",
                borderRadius: "5px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29997.5144180167!2d73.78490183476559!3d19.9795645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726309757748!5m2!1sen!2sin"
                style={{ borderRadius: "5px", width: "100%" }}
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Grid
            item
            xs={12} // Full width on mobile
            md={6} // Half width on medium devices
          >
            <Box
              sx={{
                height: "100%",
                borderRadius: "5px",
                background: "#122c29",
                padding: { xs: "20px", md: "40px" }, // Add responsive padding
              }}
            >
              <Typography
                color="#fff"
                sx={{
                  fontWeight: "700",
                  paddingBottom: "7px",
                  fontSize: { xs: "1.4rem", md: "1.6rem" }, // Responsive font size
                  fontFamily:
                    "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <OutlinedInput
                  sx={{
                    marginTop: "10px",
                    height: "50px",
                    width: { xs: "90%", md: "100%" }, // Responsive width
                    background: "#fff",
                    borderRadius: "15px",
                    fontFamily:
                      "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                  }}
                  placeholder="Name"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="person icon" edge="start">
                        <Person />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <OutlinedInput
                  sx={{
                    marginTop: "10px",
                    height: "50px",
                    width: { xs: "90%", md: "100%" }, // Responsive width
                    background: "#fff",
                    borderRadius: "15px",
                    fontFamily:
                      "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                  }}
                  placeholder="Mobile No"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="phone icon" edge="start">
                        <PhoneAndroid />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <OutlinedInput
                  sx={{
                    marginTop: "10px",
                    height: "50px",
                    width: { xs: "90%", md: "100%" }, // Responsive width
                    background: "#fff",
                    borderRadius: "15px",
                    fontFamily:
                      "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                  }}
                  placeholder="Email ID"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="email icon" edge="start">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Textarea
                  minRows={3}
                  placeholder="Message"
                  sx={{
                    marginTop: "10px",
                    width: { xs: "90%", md: "100%" }, // Responsive width
                    background: "#fff",
                    borderRadius: "15px",
                    fontFamily:
                      "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                  }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  width: { xs: "90%", md: "auto" }, // Full width on mobile
                  borderRadius: "20px",
                  background: "#ED1C24",
                  fontFamily:
                    "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif",
                  letterSpacing: "0.2rem",
                  marginLeft:{xs:"1.2rem",md:"1.2rem",lg:"0"}
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
