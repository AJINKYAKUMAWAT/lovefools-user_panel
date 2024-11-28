"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, Modal } from "@mui/material";
import Image1 from "../../assets/images/testimonial.png";
import Image from "next/image";
import Slider from "react-slick";
import quoteIcon from "../../assets/images/quotation.svg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import axiosInstance from "@/utils/axios";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import { AuthContextProvider } from "@/authcontext/AuthContext";
import avatar from "../../assets/images/avatar.svg";
import doubleQuate  from "../../assets/images/double-quate.svg";
const Item = [
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
  const [testimonialList, setTestimonialList] = React.useState([]);
  const { id } = React.useContext(AuthContextProvider);

  const getTestimonials = async () => {
    try {
      const response = await axiosInstance.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_TESTIMONIAL_LIST}`
      );
      return setTestimonialList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTestimonials();
  }, []);
  var settings = {
    dots: testimonialList.length > 3 ? true : true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For medium devices like tablets
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For smaller devices like smartphones
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 480, // For very small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For medium devices like tablets
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For smaller devices like smartphones
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 480, // For very small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <section className="testimonial-section common-section" id="Testimonial">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className="common-heading-h2 center-line"
              >
                <span> Testimonial</span>
              </Typography>
              <Typography variant="h3" className="common-heading-h3">
                What they are saying about us
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <StyledSlider {...settings}>
          {
            Array.from({length:3}).map((i,index) =>{
              return(
                <div className="testimonial-card" key={index}>
                <div className="testimonial-img">
                <Image
                            src={avatar} alt="avatar" />
                  </div>
                  <div className="testimonial-body">
                  <Image
                            src={doubleQuate} alt="double-quate" />
                    <p className="p16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eum fugit consequuntur accusamus doloribus praesentium.
                    </p>
                  </div>
                </div>
              )
            })
          }
</StyledSlider>
        
        
          </Grid>
        </Grid>
      </Container>
     
     
      {/* <Box
        className="common-section" 
      >
        <Container className="about-container info-wrap content-center">
          <Box 
          >
            <Box 
            >
              <Box 
              />
              <Typography
                variant="h4"
                className="common-heading-h2" >
                Testimonial
              </Typography>

              <Box 
              />
            </Box>{" "}
            <Typography>What they&apos;re saying about us</Typography>
          </Box>

          <Box 
          >
            <StyledSlider {...settings}>
              {testimonialList.map((i, index) => (
                <Box key={index}  >
                  {" "}
                  <PermIdentityIcon 
                  />
                  <Card 
                  >
                    <Box 
                    >
                      <Image src={quoteIcon} alt={`Testimonial ${index + 1}`} />
                      <Typography>
                        {i.description.slice(0, 55)}
                        {i.description.length > 55 ? "..." : ""}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </StyledSlider>
          </Box>
          <Box 
          >
            <StyledSlider {...settings2}>
              {testimonialList.map((i, index) => (
                <Box key={index}  >
                  {" "}
                  <PermIdentityIcon 
                  />
                  <Card 
                  >
                    <Box 
                    >
                      <Image src={quoteIcon} alt={`Testimonial ${index + 1}`} />
                      <Typography>
                        {i.description.slice(0, 55)}
                        {i.description.length > 55 ? "..." : ""}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </StyledSlider>
          </Box>
        </Container>
      </Box> */}
    </section>
  );
};

export default Testimonial;
