"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import FormProvider from "@/components/common/FormProvider";
import { bookingSchema } from "@/schema/BookingSchema";
import crown from "../../assets/images/crown.png";
import crown2 from "../../assets/images/crown_2.png";
import food_and_restaurant from "../../assets/images/food-and-restaurant.png";
import food_and_restaurant2 from "../../assets/images/food-and-restaurant_2.png";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const SelectMenuForm = ({ defaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const onSubmit = async (data) => {
    console.log("data", data);

    // handleEventListSubmit(data);
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      className="booking-form"
    >
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2 items-center justify-center"
        style={{ display: "flex" }}
      >
        <Box
          sx={{
            border: "2px solid #fff",
            padding: 1,
            borderRadius: 2,
            background: "#fff",
            width: 80,
          }}
        >
          <Image src={crown2} width={60} />
        </Box>
        <Box
          sx={{
            border: "2px solid #fff",
            padding: 1,
            borderRadius: 2,
            background: "#fff",
            width: 80,
          }}
        >
          <Image src={food_and_restaurant} width={60} />
        </Box>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2">
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography color="#fff !important" mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>          
        </Box>
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>
          
        </Box>
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>          
        </Box>
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>
          
        </Box>
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>          
        </Box>
        <Box className="flex items-center justify-center">
          <Box className='menuBox'>
            <Image src={crown} width={30} />
          </Box>
          <Box sx={{width:'100%'}}mt={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "1px dashed #000",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  width:'100%',
                }}
              />
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "#fff !important",
                  position:'absolute',
                  left:0,
                  top:-10,
                }}
              >
                Lobster Bisque
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#000",
                  px: 1,
                  zIndex: 1,
                  color: "white !important",
                  position:'absolute',
                  right:0,
                  top:-10
                }}
              >
                $5.95
              </Typography>
            </Box>
            <Typography mt={2}>Lorem ipsum dolor, sit amet</Typography>
          </Box>
          
        </Box>
      </div>
    </FormProvider>
  );
};

export default SelectMenuForm;
