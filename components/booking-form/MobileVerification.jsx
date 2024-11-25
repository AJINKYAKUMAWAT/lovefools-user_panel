"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControllerTextField from "@/components/common/ControllerTextField";
import Button from "@/components/common/Button";
import FormProvider from "@/components/common/FormProvider";
import { dateSchema, verificationSchema } from "@/schema/BookingSchema";
import ControllerDateTimePicker from "../common/ControllerDateTimePicker";
import ControllerDatePicker from "../common/ControllerDatePicker";

const DateForm = ({
  setActiveTab,
  handleClose,
  defaultValues,
  handleOnsubmit,
}) => {
  const methods = useForm({
    resolver: yupResolver(verificationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (data) => {
    const prevData = { ...defaultValues, ...data };
    if (data.otp !== "123456") {
      setError("otp", {
        type: "manual",
        message: "OTP does not match", // This message will appear in the form error
      });
    } else {
      handleOnsubmit(prevData);
      setActiveTab(4);
    }
  };

  const PrevBtn = () => {
    setActiveTab(2);
  };

  return (
    <div className="flex items-center justify-center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="max-w-[250px] w-full mx-auto">
                <ControllerTextField
                  placeholder="Enter mobile no"
                  name="mobile"
                  label="Mobile no"
                />
              </div>
              <div className="max-w-[250px] w-full mx-auto">
                <ControllerTextField
                  placeholder="Enter email"
                  name="email"
                  label="Email Id"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6">
              <div className="max-w-[250px] w-full mx-auto">
                <ControllerTextField
                  type="text"
                  placeholder="Enter otp"
                  name="otp"
                  label="OTP"
                />
              </div>
            </div>

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

export default DateForm;
