"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import FormProvider from "@/components/common/FormProvider";
import { bookingSchema } from "@/schema/BookingSchema";
import ControllerSelect from "../common/ControllerSelect";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL, options } from "@/utils/constant";
import { useEffect, useState } from "react";
import { convertTimeObjectToString, generateOptions } from "@/utils/utils";
import axios from "axios";

const TableForm = ({ defaultValues,setDefaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
    mode: "onBlur",
  });

  const {formState: { errors }, watch } = methods;
  const [roomList, setRoomList] = useState([])
  const [unBookTableList, setUnBookTableList] = useState([])

  
  const getRoomList = async (params) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_ROOM_LIST}`);
      return setRoomList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUnBookList = async (params) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_BOOK_LIST}`,
        {...params}
      );
      return setUnBookTableList(data.available);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomList();
  },[])  

  useEffect(() => {
    const time = convertTimeObjectToString(defaultValues.time)
    getUnBookList({date:defaultValues.date, time:time,roomID:watch('room')?.value});
  },[watch('room')])

  useEffect(()=>{
    if(watch('floor') && watch('room') && watch('table_number')){
      setDefaultValues({...defaultValues,floor:watch('floor'),room:watch('room'),table_number:watch('table_number')})
    }
  
  },[watch('floor'),watch('room'),watch('table_number')])
  
  return (
    <div className="flex items-center justify-center">
      <FormProvider
        methods={methods}
        className="booking-form bg-white p-6 rounded-lg shadow-md w-full max-w-[600px]"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2">
         <div className="md:w-[250px]">
         <ControllerSelect
            options={generateOptions(roomList, "_id","room_name")}
            placeholder="Enter type"
            name="room"
            label='Select room'
          />
         </div>
          <ControllerSelect
            options={generateOptions(unBookTableList, '_id','table_number')}
            placeholder="Enter subType"
            name="table_number"
            label='Select table'
          />
        </div>
        
      </FormProvider>
    </div>
  );
};

export default TableForm;
