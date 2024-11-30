"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container, Skeleton } from "@mui/material";
import Image from "next/image";
import Image2 from "../../assets/images/aboutUs.png";
import { AuthContextProvider } from "@/authcontext/AuthContext";
import axios from "axios";
import {
  AboutUsSection,
  API_ENDPOINT,
  NEXT_PUBLIC_API_URL,
} from "@/utils/constant";

const AboutUs = () => {
  const { id } = React.useContext(AuthContextProvider);
  const [aboutUs, setAboutUs] = React.useState(null);
  const [view, setView] = React.useState(232);
  const [loading, setLoading] = React.useState(false);

  const getAboutUs = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_CMS}`
      );
      setLoading(false);
      return setAboutUs(data.data.data[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const nextLine = aboutUs?.description?.split("\n").join("\n");

  const slicedText = nextLine?.slice(0, view);

  const slicedLines = slicedText?.split("\n");

  const handleView = () => {
    setView((view) => view + 232);
  };

  React.useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <section className="about-section common-section" id="About%20us">
      <Container className="about-container">
        <Grid container>
          {/* Text Section */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="info-wrap">
              {loading ? (
                <Skeleton variant="rectangular" width={450} height={450} />
              ) : (
                <>
                  <Typography variant="h2" className="common-heading-h2">
                    {aboutUs?.section_Name}
                  </Typography>

                  {slicedLines?.map((line, index) => (
                    <p key={index} className="p16">
                      {line}
                      {index === slicedLines.length - 1 &&
                      nextLine.length > view
                        ? "..."
                        : ""}
                    </p>
                  ))}
                  <Button
                    variant="contained"
                    className="btn-primary mt40"
                    onClick={handleView}
                  >
                    Read More
                  </Button>
                </>
              )}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} className="mobile-first-col">
            <div className="about-img-wrap">
              <Image
                src={Image2}
                alt="about-img-base"
                className="about-img-base"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUs;
