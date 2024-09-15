import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image1 from "../../assets/images/testimonial.png";
import Image from "next/image";
import Slider from "react-slick";

const Item = [
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
  { image: Image1 },
];

const StyledSlider = styled(Slider)(({ theme }) => ({
  "& .slick-prev, & .slick-next": {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .slick-prev": {
    left: 10,
    zIndex: 1,
  },
  "& .slick-next": {
    right: 10,
    zIndex: 1,
  },
}));

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "50px",
        background: "#D4BA97",
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
          <Box sx={{ padding: "0 10px" }}>Testimonial</Box>
          <Box
            sx={{ border: "1px solid black", width: "15%", marginLeft: "10px" }}
          />
        </Typography>{" "}
        <Typography textAlign="center">
          What they&apos;re saying about us
        </Typography>
      </Box>

      <Box sx={{ width: { xs: "90%", md: "80%", lg: "70%" } }}>
        <StyledSlider {...settings}>
          {Item.map((i, index) => (
            <Box key={index} sx={{ px: 2 }}>
              {" "}
              {/* Adding padding for each slide */}
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 320,
                  margin: "auto",
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                <Image
                  src={i.image}
                  alt={`Testimonial ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Card>
            </Box>
          ))}
        </StyledSlider>
      </Box>
    </Box>
  );
};

export default Testimonial;
