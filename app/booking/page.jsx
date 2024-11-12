"use client";
import React, { useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import BookingForm from "@/components/booking-form/BookingForm";
import CustomizedSteppers from "@/components/stepper/Stepper";
import { BookingsIcons } from "@/utils/constant";

const Page = () => {
  const defaultValues = useRef({
    seatBook: null,
    date: null,
    payment: "",
    subType: null,
    type: null,
  });
  return (
    <section className="about-section common-section ">
      <Box className="booking-banner-section flex justify-center items-center">
        <Box sx={{width:'90%'}}>
          <CustomizedSteppers icons={BookingsIcons} />
          <Container sx={{ width: "70%", marginTop: "30px" }}>
            <BookingForm defaultValues={defaultValues.current} />
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default Page;
