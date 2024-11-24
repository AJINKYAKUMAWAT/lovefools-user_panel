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
import { useEffect, useState } from "react";
import { API_ENDPOINT, MenuType, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import axios from "axios";

const SelectMenuForm = ({ defaultValues, setDefaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
    mode: "onBlur",
  });
  const [menu, setMenu] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [subMenu, setSubMenu] = useState('All')
  const [menuType, setMenuType] = useState({})

  const {
    formState: { errors },
    watch,
  } = methods;

  const getMenuList = async (params) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_MENU_LIST}`,
        {...params}
      );
      return setMenuList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectMenu = (data) => {
    setDefaultValues({
      ...defaultValues,
      menuType: data.menuType,
      subMenuType: data.subMenuType,
      receiptName: data.menu_Name,
    });
  };

  useEffect(() => {
    getMenuList({...menuType});
  }, [menuType]);

  const selectSubMenu = (item) => {
    setSubMenu(item)
    console.log("item",item);
    
    if(item === "All"){
      getMenuList({})
    }else if(item === 'Veg'){
      setMenuType({...menuType,Sub_Menu_Type:"1"})
    }else if(item === 'NonVeg'){
      setMenuType({...menuType,Sub_Menu_Type:"2"})
    }else if(item === 'Drink'){
      setMenuType({...menuType,Sub_Menu_Type:"3"})
    }
  }

  return (
    <FormProvider methods={methods} className="booking-form">
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2 items-center justify-center"
        style={{ display: "flex" }}
      >
        <Box
          onClick={() => {
            setMenu(true)
            setMenuType({...menuType,Menu_Type:'1'})
          }}
          sx={{
            border: menu ? "5px solid red" : "2px solid #fff",
            padding: 1,
            borderRadius: 2,
            background: "#fff",
            width: 80,
            cursor: "pointer",
          }}
        >
          <Image src={crown2} width={60} />
        </Box>
        <Box
          onClick={() => {
            setMenu(false)
            setMenuType({...menuType,Menu_Type:'2'})
          }}
          sx={{
            border: menu === false ? "5px solid red" : "2px solid #fff",
            padding: 1,
            borderRadius: 2,
            background: "#fff",
            width: 80,
            cursor: "pointer",
          }}
        >
          <Image src={food_and_restaurant} width={60} />
        </Box>
      </div>
      <div
        className="grid grid-cols-4 gap-4 md:grid-cols-4 mb-2 items-center justify-center"
        style={{ display: "flex" }}
      >
        {MenuType.map((item) => {
          return (
            <Box
           
              sx={{
                borderRadius: 2,
                gap: 5,
                width: 50,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <Typography
               onClick={()=>selectSubMenu(item)}
                sx={{
                  color:subMenu === item ? 'red !important' : '#fff !important',
                  marginBottom: "0px !important",
                }}
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2">
        {menuList?.map((item) => {
          return (
            <Box
              className="flex items-center justify-center grid-menustyle menuStyle cursor-pointer"
              onClick={() => selectMenu(item)}
            >
              <Box className="menuBox">
                <Image src={crown} width={30} />
              </Box>
              <Box sx={{ width: "100%" }} mt={3}>
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
                      width: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      backgroundColor: "#000",
                      px: 1,
                      zIndex: 1,
                      color: "#fff !important",
                      position: "absolute",
                      left: 0,
                      top: -10,
                    }}
                  >
                    {item.menu_Name}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "#000",
                      px: 1,
                      zIndex: 1,
                      color: "white !important",
                      position: "absolute",
                      right: 0,
                      top: -10,
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Typography color="#fff !important" mt={2}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </div>
    </FormProvider>
  );
};

export default SelectMenuForm;
