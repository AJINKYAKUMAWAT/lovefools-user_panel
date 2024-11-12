"use client";
import React, { useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import BookingForm from "@/components/booking-form/BookingForm";

const Page = () => {
  const defaultValues = useRef({
    seatBook:null,
    date:null,
    payment:'',
    subType:null,
    type:null
  })
  return (
    <section className="about-section common-section">
      <Box className="booking-banner-section content-center">
        <Container sx={{ width: "75%" }}>
        <BookingForm defaultValues={defaultValues.current}/>
        </Container>
      </Box>
    </section>
  );
};

export default Page;
