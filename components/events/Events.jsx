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
import { Box, Button, Divider, Grid, Container } from "@mui/material";
import Image7 from "../../assets/images/burger.jpg";
import gallayIcon from "../../assets/images/gallay-icon.svg";
import Image from "next/image";
import axios from "axios";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import { AuthContextProvider } from "@/authcontext/AuthContext";

const Item = [
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
  {
    name: "Big and Juicy Wagyu Beef Cheese Burger",
    image: Image7,
    date: "15 Dec 2024",
    time: "9AM to 11AM",
  },
];

const Events = () => {
  const [view, setView] = React.useState(6);
  const [fileData, setFileData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = React.useContext(AuthContextProvider);

  const handleView = () => {
    setView((view) => view + 3);
  };
  const getEvents = () => {
    try {
      axios
        .post(`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_EVENTS}`)
        .then((res) => {
          const photoIds = res.data.data || []; // Ensure photoIds is an array
          console.log("Fetched photoIds:", photoIds);

          if (!photoIds.length) {
            console.error("No events found");
            setError("No events found");
            return [];
          }

          // Use Promise.all to fetch all files in parallel
          return Promise.all(
            photoIds.map((item) => {
              console.log("Fetching file for item:", item);
              return axios
                .get(API_ENDPOINT.GET_FILE(item._id))
                .then((fileRes) => {
                  console.log("File response for item:", fileRes);
                  return { ...item, fileData: fileRes.data };
                })
                .catch((fileErr) => {
                  console.error(
                    `Error fetching file for item ${item._id}:`,
                    fileErr
                  );
                  return { ...item, fileData: null }; // Handle individual file fetch failures
                });
            })
          );
        })
        .then((mergedResponses) => {
          console.log("Merged responses:", mergedResponses);

          if (mergedResponses.length) {
            setFileData(mergedResponses); // Save the merged data to the state
          } else {
            setError("No files fetched");
          }
        })
        .catch((err) => {
          console.error("Error fetching events:", err);
          setError("Error fetching events");
        });
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("Unexpected error occurred");
    }
  };

  React.useEffect(() => {
    getEvents();
  }, []);

  const convertDateTime = (isoString) => {
    // Create a Date object from the ISO string
    const dateObj = new Date(isoString);

    // Extract date parts (day, month, year)
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getUTCFullYear();

    // Time adjustments for 9AM to 11AM
    // Adjust the hours to match the desired output (9AM and 11AM)
    const startHour = 9; // Starting at 9AM
    const endHour = 11; // Ending at 11AM

    // Format the time as AM/PM
    const startTime = startHour + "AM";
    const endTime = endHour + "AM";

    // Combine date and time parts
    const formattedDateTime = `${day} ${month} ${year}-${startTime} to ${endTime}`;

    return formattedDateTime;
  };

  return (
    <section className="events-section common-section" id="Event">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className="common-heading-h2 center-line"
              >
                <span> Old Events</span>
              </Typography>
              <p className="p16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eligendi odit, tempora minima exercitationem
                consequatur veniam pariatur distinctio velit et nisi maiores
                nulla soluta tenetur. Eos nam perferendis animi eligendi.
              </p>
            </div>
          </Grid>

          <Grid container item rowSpacing={3} spacing={3} className="event-grid">
            {Item?.slice(0, view).map((i, index) => {
              return (
                <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                  <Box className="event-card hover-img">
                    <Image
                      alt="Lovefools"
                      src={i.image}
                      className="event-img"
                    />

                    <Image
                      alt="Lovefools"
                      src={gallayIcon}
                      className="gallay-icon-img"
                    />

                    <div className="event-body">
                      <Typography variant="h3" className="common-heading-h3">
                        {i.name}
                      </Typography>
                      <div className="d-flex-time">
                        <Typography className="p14">
                          {i.date}-{i.time}
                        </Typography>
                        <Button className="read-more-btn">Read More</Button>
                      </div>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            className="text-center view-more-btn-outer"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Button
              onClick={handleView}
              variant="contained"
              className="btn-primary mt40"
            >
              View More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Events;
