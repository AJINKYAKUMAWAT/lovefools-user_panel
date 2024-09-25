import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";
import Image from "next/image";
import Image2 from "../../assets/images/shef.png";
import Image3 from "../../assets/images/image-1.png";
import Image4 from "../../assets/images/image-2.png";
import Image5 from "../../assets/images/image-3.png";
import Image6 from "../../assets/images/image-4.png";
import { AuthContextProvider } from "@/authcontext/AuthContext";
import axios from "axios";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";

const AboutUs = () => {
  const { id } = React.useContext(AuthContextProvider);
  const [aboutUs, setAboutUs] = React.useState([]);

  const getAboutUs = async () => {
    try {
      const data = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_CMS}`
      );
      console.log(data.data.data);
      return setAboutUs(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <section className="about-section common-section" id="About%20us">
      <Container className="about-container">
          <Grid container>
            {/* Text Section */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
             
            >
              <div className="info-wrap">
                <Typography variant="h2" className="common-heading-h2">
                  About Us
                </Typography>
                <p className="p16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi odit, tempora minima exercitationem consequatur veniam pariatur distinctio velit et nisi maiores nulla soluta tenetur. Eos nam perferendis animi eligendi.</p>
                <p className="p16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi odit, tempora minima exercitationem consequatur veniam pariatur distinctio velit et nisi maiores nulla soluta tenetur. Eos nam perferendis animi eligendi.</p>
               
                {/* {aboutUs.map((i) => {
                  return (
                    <Typography variant="h4" className="p16">
                      {i.section_Name === "About us" && i.description}
                    </Typography>
                  );
                })} */}

                <Button variant="contained" className="btn-primary mt40">
                  Read More
                </Button>
              </div>
            </Grid>

            {/* Image Section */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="mobile-first-col"
            >
              {/* <Box >
            <Box >
              <Image src={Image3} className="image1" />
              <Image src={Image4} className="image3" />
              <Image src={Image5} className="image4" />
              <Image src={Image6} className="image2" />
              <Image
                src={Image2}
                alt="About Us"
              />
            </Box>
          </Box> */}
              <div className="about-img-wrap">
                <Image
                  src={Image2}
                  alt="about-img-base"
                  className="about-img-base"
                />
                <Image
                  src={Image4}
                  alt="about-img1"
                  className="about-abs about-img1"
                />
                <Image
                  src={Image6}
                  alt="about-img2"
                  className="about-abs about-img2"
                />
                <Image
                  src={Image5}
                  alt="about-img3"
                  className="about-abs about-img3"
                />
                <Image
                  src={Image3}
                  alt="about-img4"
                  className="about-abs about-img4"
                />
              </div>
            </Grid>
          </Grid>
      </Container>
    </section>
  );
};

export default AboutUs;
