"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/common/FormProvider";
import { bookingSchema } from "@/schema/BookingSchema";
import ControllerDateTimePicker from "../common/ControllerDateTimePicker";
import ControllerDatePicker from "../common/ControllerDatePicker";

const DateForm = ({ defaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, formState: { errors }, watch } = methods;

  const onSubmit = async (data) => {
    console.log("data", data);
    // handleEventListSubmit(data);
  };

  return (
    <div className="flex items-center justify-center">
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        className="booking-form bg-white p-6 rounded-lg shadow-md w-full max-w-[600px]"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="max-w-[250px] w-full mx-auto">
            <ControllerDatePicker
              placeholder="Enter date"
              name="date"
              label='Date'
            />
          </div>
          <div className="max-w-[250px] w-full mx-auto">
            <ControllerDateTimePicker
              placeholder="Enter time"
              name="time"
              label='Time'
            />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default DateForm;
