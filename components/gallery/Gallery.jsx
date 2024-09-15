import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import Image1 from "../../assets/images/Post1.png";
import Image2 from "../../assets/images/Post2.png";
import Image3 from "../../assets/images/Post3.png";
import Image4 from "../../assets/images/Post4.png";
import Image from "next/image";

const Item = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Gallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "50px",
        background: "linear-gradient(to right, #D4BA97 30%, transparent 20%)",
      }}
    >
      <Box
        sx={{
          width: "70%",
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
          <Box sx={{ padding: "0 10px" }}>Gallery</Box>
          <Box
            sx={{ border: "1px solid black", width: "15%", marginLeft: "10px" }}
          />
        </Typography>{" "}
        <Typography textAlign="center">
          Some photos from Our Restaurant
        </Typography>
        <Box sx={{ display: "flex" }} gap={2}>
          <Button
            variant="contained"
            style={{
              marginTop: "14px",
              textTransform: "capitalize",
              borderRadius: 50,
              background: "#ED1C24",
              height: "36px",
            }}
          >
            Photo
          </Button>
          <Button
            variant="contained"
            style={{
              marginTop: "14px",
              textTransform: "capitalize",
              borderRadius: 50,
              background: "#ED1C24",
              height: "36px",
            }}
          >
            Video
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: { xs: "90%", md: "65%", lg: "65%" } }}>
        <Grid container item>
          {Item.map((i, index) => {
            return (
              <Grid
                key={index}
                item
                xs={4} // Full width on mobile
                sm={4} // Full width on small devices
                md={3} // Half width on medium devices
                lg={3} // Half width on large devices
                style={{ padding: "1%" }}
              >
                <Card sx={{ maxWidth: 300, maxHeight: 320 }}>
                  <Image src={i.image} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Button
        variant="contained"
        style={{
          marginTop: 50,
          textTransform: "capitalize",
          borderRadius: 50,
          background: "#ED1C24",
        }}
      >
        View More
      </Button>
    </Box>
  );
};

export default Gallery;
