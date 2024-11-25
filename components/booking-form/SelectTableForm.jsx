"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import Button from "@/components/common/Button";
import FormProvider from "@/components/common/FormProvider";
import { dateSchema, tableSchema } from "@/schema/BookingSchema";
import ControllerDateTimePicker from "../common/ControllerDateTimePicker";
import ControllerDatePicker from "../common/ControllerDatePicker";
import { convertTimeObjectToString, generateOptions } from "@/utils/utils";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL, options2 } from "@/utils/constant";
import ControllerSelect from "../common/ControllerSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import crown2 from "../../assets/images/crown_2.png";
import { Box } from "@mui/material";
import Image from "next/image";

const TableListForm = ({
  setActiveTab,
  setDefaultValues,
  defaultValues,
  handleOnsubmit,
}) => {
  const methods = useForm({
    resolver: yupResolver(tableSchema),
    defaultValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const [roomList, setRoomList] = useState([]);
  const [unBookTableList, setUnBookTableList] = useState([]);
  const [menu, setMenu] = useState(true);

  const getRoomList = async (params) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_ROOM_LIST}`
      );
      return setRoomList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUnBookList = async (params) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_BOOK_LIST}`,
        { ...params }
      );
      console.log("book", data);

      return setUnBookTableList(data.available);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomList();
  }, []);

  useEffect(() => {
    if (defaultValues?.date && defaultValues?.time) {
      const time = convertTimeObjectToString(defaultValues.time);
      getUnBookList({
        date: defaultValues.date,
        time: time,
        roomID: watch("room")?.value,
      });
    }
  }, [defaultValues, watch("room")]);

  useEffect(() => {
    const getFilteredData = unBookTableList.filter((res) => {
      return res._id === watch("table_number").value;
    });
    console.log("getFilteredData", getFilteredData[0]?.seatCount);

    setDefaultValues({
      ...defaultValues,
      quantity: getFilteredData[0]?.seatCount,
    });
  }, [watch("table_number")]);

  const onSubmit = (data) => {
    const prevData = { ...defaultValues, ...data };
    handleOnsubmit(prevData);
    setActiveTab(2);
  };

  const PrevBtn = () => {
    setActiveTab(0);
  };

  console.log("room",watch("room")?.label);
  

  return (
    <div className="flex items-center justify-center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="max-w-[400px] w-full mx-auto">
                <ControllerSelect
                  options={generateOptions(roomList, "_id", "room_name")}
                  placeholder="Select room"
                  name="room"
                  label="Room"
                />
              </div>
              <div className="max-w-[400px] w-full mx-auto">
                <ControllerSelect
                  // isDisabled={
                  //   watch("room")?.label === "Colaba Room" ? false : true
                  // }
                  options={generateOptions(
                    unBookTableList,
                    "_id",
                    "table_number"
                  )}
                  placeholder="Select table"
                  name="table_number"
                  label="Table"

                />
              </div>
            </div>
            {watch("room") && watch("room")?.label !== "Colaba Room" && (
              <div
                className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2 items-center justify-center"
                style={{ display: "flex" }}
              >
                <Box
                  onClick={() => {
                    setMenu(true)
                    setValue('table_number',{value:'',label:''})
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
                  // onClick={() => {
                  //   setMenu(false)
                  //   setMenuType({...menuType,Menu_Type:'2'})
                  //   setValue('menuType','2')
                  // }}
                  sx={{
                    // border: menu === false ? "5px solid red" : "2px solid #fff",
                    padding: 1,
                    borderRadius: 2,
                    background: "#fff",
                    width: 80,
                    cursor: "pointer",
                  }}
                >
                  <Image src={crown2} width={60} />
                </Box>
              </div>
            )}
            {watch("room") && watch("room")?.label !== "Colaba Room" &&errors?.table_number && <h4 style={{color:'red',textAlign:'center'}}>Please select the Table</h4>}

            <div className="flex justify-center space-x-4">
              <Button type="button" variant="bordered" onClick={PrevBtn}>
                Prev
              </Button>
              <Button type="submit">Next</Button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default TableListForm;
