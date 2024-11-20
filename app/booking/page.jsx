"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import BookingForm from "@/components/booking-form/BookingForm";
import CustomizedSteppers from "@/components/stepper/Stepper";
import { BookingsIcons } from "@/utils/constant";
import Button from "@/components/common/Button";
import DateForm from "@/components/booking-form/DateForm";
import TableForm from "@/components/booking-form/SelectTableForm";
import SelectMenuForm from "@/components/booking-form/SelectMenuForm";
import MobileVerificationForm from "@/components/booking-form/MobileVerification";
import PaymentDetails from "@/components/booking-form/PaymentDetails";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const defaultValues = useRef({
    seatBook: null,
    date: null,
    payment: "",
    subType: null,
    type: null,
  });
  return (
    <section
      className="about-section common-section overflow-auto"
      style={{ background: "#000000e5", height: "100vh", overflow: "auto" }}
    >
      <Box className="booking-banner-section flex justify-center overflow-auto mb-30">
        <Box sx={{ width: "90%", border: "1px solid #fff" }} className="mt-36">
          <CustomizedSteppers icons={BookingsIcons} activeTab={activeTab} />
          <Container sx={{ width: "80%" }} className="mt-10">
            {activeTab === 0 && <DateForm />}
            {activeTab === 1 && <TableForm />}
            {activeTab === 2 && <SelectMenuForm />}
            {activeTab === 3 && <MobileVerificationForm />}
            {activeTab === 4 && <PaymentDetails />}
            {/* <BookingForm defaultValues={defaultValues.current} /> */}
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => {
                  if (activeTab === 0) {
                    setActiveTab(0);
                  } else {
                    setActiveTab(activeTab - 1);
                  }
                }}
                type="submit"
              >
                Prev
              </Button>
              <Button
                onClick={() => {
                  if (activeTab === 4) {
                    setActiveTab(4);
                  } else {
                    setActiveTab(activeTab + 1);
                  }
                }}
                type="submit"
              >
                Next
              </Button>
            </div>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default Page;
