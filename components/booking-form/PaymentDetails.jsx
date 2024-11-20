import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const PaymentDetails = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Email ID</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              ajink3994@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>
              Mobile No.
            </Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              +91 7263994600
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Date</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              20 Dec 2024
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Floor</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              ajink3994@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Table</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              +91 7263994600
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Menu</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              Ala Cart
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>Total</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              ajink3994@gmail.com
            </Typography>
          </Box>
        </Grid>

        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>SGST</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              +91 7263994600
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} className="paymentDetails">
          <Box>
            <Typography sx={{ color: "#fff !important" }}>CGST</Typography>
            <Typography sx={{ color: "#a39f9f !important" }}>
              20 Dec 2024
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentDetails;
