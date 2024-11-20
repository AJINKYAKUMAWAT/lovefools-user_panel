"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import FormProvider from "@/components/common/FormProvider";
import { bookingSchema } from "@/schema/BookingSchema";
import ControllerSelect from "../common/ControllerSelect";
import { options } from "@/utils/constant";

const TableForm = ({ defaultValues }) => {
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-2">
         <div className="md:w-[250px]">
         <ControllerSelect
            options={options}
            placeholder="Enter type"
            name="floor"
            label='Select floor'
          />
         </div>
          <ControllerSelect
            options={options}
            placeholder="Enter subType"
            name="room"
            label='Select room'
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-2">
          <ControllerTextField
            type="text"
            placeholder="Enter payment"
            name="perPerson"
            label='How many person ?'
            
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default TableForm;
