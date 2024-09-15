import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Divider, Grid } from "@mui/material";
import Image1 from "../../assets/images/Group1.png";
import Image2 from "../../assets/images/Group2.png";
import Image3 from "../../assets/images/Group3.png";
import Image4 from "../../assets/images/Group4.png";
import Image5 from "../../assets/images/Group5.png";
import Image6 from "../../assets/images/Group6.png";
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
    image: Image5,
  },
  {
    image: Image6,
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

const Events = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#D4BA97",
        marginTop: "-35px",
        paddingBottom: "50px",
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
          <Box sx={{ padding: "0 10px" }}>Old Events</Box>
          <Box
            sx={{ border: "1px solid black", width: "15%", marginLeft: "10px" }}
          />
        </Typography>{" "}
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde
          sunt et earum. Explicabo doloribus quibusdam accusamus unde sed nulla
          nisi nihil, illum quis, commodi sequi sit. Totam, adipisci reiciendis.
        </Typography>
      </Box>

      <Box sx={{ width: { xs: "90%", md: "65%", lg: "65%" } }}>
        <Grid container item>
          {Item.map((i, index) => {
            return (
              <Grid
                key={index}
                item
                xs={6} // Full width on mobile
                sm={6} // Full width on small devices
                md={4} // Half width on medium devices
                lg={4} // Half width on large devices
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

export default Events;
