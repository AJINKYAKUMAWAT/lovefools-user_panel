import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Image2 from "../../assets/images/shef.png";
import Image3 from "../../assets/images/image-1.png";
import Image4 from "../../assets/images/image-2.png";
import Image5 from "../../assets/images/image-3.png";
import Image6 from "../../assets/images/image-4.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "30px", padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Text Section */}
        <Grid
          item
          xs={12} // Full width on mobile
          sm={12} // Full width on small devices
          md={6} // Half width on medium devices
          lg={6} // Half width on large devices
          style={{ padding: "5%" }}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "700", marginBottom: "10px" }}
          >
            About Us
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            ad quas quasi quam porro excepturi necessitatibus cumque, saepe
            nulla veritatis dolorum velit optio impedit consequatur obcaecati ut
            repellat eius delectus placeat maiores reprehenderit! Quaerat
            accusantium debitis, eius praesentium dicta id, minus labore impedit
            sunt nihil culpa blanditiis fugit quasi, voluptatibus numquam
            molestias voluptatem? Velit doloribus magni totam ratione veritatis
            doloremque hic, earum, recusandae laboriosam iusto odio eius minima
            architecto dolores est illum ab officiis excepturi dignissimos
            voluptates eos, placeat maxime ducimus! Possimus consectetur nostrum
            odit quis velit impedit ducimus eum, illo fuga quasi sed
            exercitationem eligendi quam totam iste! Eveniet.
          </Typography>
          <Button
            variant="contained"
            style={{
              marginTop: 50,
              textTransform: "capitalize",
              borderRadius: 50,
              background: "#ED1C24",
            }}
          >
            Read More
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12} // Full width on mobile
          sm={12} // Full width on small devices
          md={6} // Half width on medium devices
          lg={6} // Half width on large devices
        >
          <Box
            sx={{
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "8%",
              transform: { xs: "rotate(90deg)", lg: "rotate(90deg)" }, // Rotates both the background and image
            }}
          >
            <Box
              sx={{
                height: { xs: "auto", md: "50vh" }, // Adjust height for different screen sizes
                background: "#D4BA97",
                width: "75%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: { md: "-44px" },
              }}
            >
              <Image src={Image3} className="image1" />
              <Image src={Image4} className="image3" />
              <Image src={Image5} className="image4" />
              <Image src={Image6} className="image2" />
              <Image
                src={Image2}
                alt="About Us"
                style={{
                  maxWidth: "100%", // Ensures the image is responsive
                  height: "auto",
                  transform: "rotate(-90deg)", // Un-rotates the image inside the rotated container
                  position: "relative",
                  left: "5%",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
