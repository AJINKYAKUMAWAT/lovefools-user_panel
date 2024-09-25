import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, Modal } from "@mui/material";
import Image1 from "../../assets/images/Post1.png";
import Image2 from "../../assets/images/Post2.png";
import Image3 from "../../assets/images/Post3.png";
import Image4 from "../../assets/images/Post4.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReactPlayer from "react-player";
import Image from "next/image";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import axios from "axios";
import { AuthContextProvider } from "@/authcontext/AuthContext";

const Item = [
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image2,
  },
  {
    id: 3,
    image: Image3,
  },
  {
    id: 4,
    image: Image4,
  },
  {
    id: 5,
    image: Image1,
  },
  {
    id: 6,
    image: Image2,
  },
  {
    id: 7,
    image: Image3,
  },
  {
    id: 8,
    image: Image4,
  },
  {
    id: 9,
    image: Image1,
  },
  {
    id: 10,
    image: Image2,
  },
  {
    id: 11,
    image: Image3,
  },
  {
    id: 12,
    image: Image4,
  },
  {
    id: 13,
    image: Image2,
  },
  {
    id: 14,
    image: Image3,
  },
  {
    id: 15,
    image: Image4,
  },
  {
    id: 16,
    image: Image1,
  },
  {
    id: 17,
    image: Image2,
  },
  {
    id: 18,
    image: Image3,
  },
  {
    id: 19,
    image: Image4,
  },
  {
    id: 20,
    image: Image1,
  },
  {
    id: 21,
    image: Image2,
  },
  {
    id: 22,
    image: Image3,
  },
  {
    id: 23,
    image: Image4,
  },
];

const Gallery = () => {
  const [video, setVideo] = React.useState(false);
  const [photo, setPhoto] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [view, setView] = React.useState(12);
  const [fileData, setFileData] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const { id } = React.useContext(AuthContextProvider);

  const handleView = () => {
    setView((view) => view + 4);
  };

  const getGallery = () => {
    try {
      axios
        .post(`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_GALLERY}`)
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
            if (video) {
              const data = mergedResponses.filter((i) => i.type === "Video");
              setFileData(data);
            } else {
              const data = mergedResponses.filter((i) => i.type === "Photo");
              setFileData(data); // Save the merged data to the state
            }
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
      // setError('Unexpected error occurred');
    }
  };

  React.useEffect(() => {
    getGallery();
  }, [video]);

  // React.useLayoutEffect(() => {
  //   handleImage();
  // }, [id]);

  return (
    <section className="gallery-section common-section hover-img" id="Gallery">
        <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className="common-heading-h2 center-line"
              >
                <span> Gallery Events</span>
              </Typography>
              <Typography variant="h3" className="common-heading-h3">
              Some photos from Our Restaurant
              </Typography>

              <div className="filter-btn-wrap">
              <Button
                onClick={() => {
                  setPhoto(true);
                  setVideo(false);
                }}
                variant="contained"
                className="btn-primary btn-sm"
              >
                Photo
              </Button>
              <Button
                onClick={() => {
                  setPhoto(false);
                  setVideo(true);
                }}
                variant="contained"
                className="btn-secondary btn-sm"
              >
                Video
              </Button>
            </div>
            </div>
            
          </Grid>
         

          <Grid container item rowSpacing={3} spacing={3}>
              {Item?.slice(0, view).map((i, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={6}
                    md={3}
                    lg={3}
                  >
                    <Card className="gallary-card-w">  
                      {video ? (
                        <>
                            <div
                              onClick={() => {
                                // Correcting the way setUrl is called
                                handleOpen();
                                setUrl(i.image);
                              }}
                            >
                              <Button className="play-icon-btn">
                              <PlayCircleOutlineIcon className="play-icon" />
                              </Button>
                              {/* <Image
                            src={i.image}
                            alt="Video Thumbnail"
                           className="thumbnail"
                          /> */}

                              <Image
                                alt="Lovefools"
                                src={i.image}
                                className="gallary-thumbnail"
                              />
                            </div>
                        </>
                      ) : (
                        //   <Image
                        //   alt="thumbnail"
                        //     src={i.image}
                        // className="thumbnail"
                        //   />
                        <>
                            <Image
                           
                              alt="Lovefools"
                              src={i.image}
                               className="gallary-thumbnail"
                            />
                        </>
                      )}
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <Grid className="text-center view-more-btn-outer" item xs={12} sm={12} md={12} lg={12}>
          <Button
            onClick={handleView}
            variant="contained"
            className="btn-primary mt40"
          >
            View More
          </Button>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              {video ? (
                <ReactPlayer
                  url={url}
                  // playing
                  controls={true}
                  width="100%"
                  height="100%"
                />
              ) : (
                <Image
                  src={image}
                 alt="Gallery"
                />
              )}
            </Box>
          </Modal>
        </Grid>
      </Container>
    </section>
  );
};

export default Gallery;
