"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import Button from "@/components/common/Button";
import FormProvider from "@/components/common/FormProvider";
import { bookingSchema } from "@/schema/BookingSchema";
import ControllerSelect from "../common/ControllerSelect";
import { options } from "@/utils/constant";
import ControllerDateTimePicker from "../common/ControllerDateTimePicker";
import ControllerDatePicker from "../common/ControllerDatePicker";

const BookingForm = ({defaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit,formState:{errors} ,watch} = methods;
  console.log(errors);
  console.log("watch",watch('type'));
  
  

  const onSubmit = async (data) => {
    console.log("data",data);
    
    // handleEventListSubmit(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} className="booking-form">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-2">
        <ControllerSelect
            options={options}
            placeholder="Enter seat book "
            name="seatBook"
          />
          <ControllerDatePicker
            placeholder="Enter date "
            name="date"
          />
          <ControllerDateTimePicker
            placeholder="Enter time "
            name="time"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-2">
        <ControllerSelect
            options={options}
            placeholder="Enter type "
            name="type"
          />
          <ControllerSelect
            options={options}
            placeholder="Enter subType "
            name="subType"
          />
          <ControllerTextField
            type="text"
            placeholder="Enter payment "
            name="payment"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="submit">Booking Table</Button>
        </div>
    </FormProvider>
  );
};

export default BookingForm;
