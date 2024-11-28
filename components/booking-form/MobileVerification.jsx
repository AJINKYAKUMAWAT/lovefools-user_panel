import React, { useState, useEffect } from "react";

const DateForm = ({
  setActiveTab,
  handleClose,
  defaultValues,
  handleOnsubmit,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [timer, setTimer] = useState(0);

  const methods = useForm({
    resolver: yupResolver(verificationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, setError, watch } = methods;

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
  };

  const sendWhatsAppMessages = async () => {
    const payload = {
      phone: "+918830601265",
      message: `Lovefools booking confirmation OTP ${generateRandomNumber()}`,
    };

    if (watch("mobile").length === 10) {
      try {
        const data = await axios.post("https://api.wassenger.com/v1/messages", {
          payload,
          headers: {
            "Content-Type": "application/json",
            Token:
              "53d9b10ad2585e1b35fc491ec47cee86c2e269734f998c2c81fd6495a77e49b5907dbb4ed261b163",
          },
        });

        // Disable button and start timer
        setIsButtonDisabled(true);
        setButtonText("Resend");
        setTimer(30); // 30 seconds timer
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Timer logic
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isButtonDisabled) {
      setIsButtonDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer, isButtonDisabled]);

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
                <Button
                  onClick={sendWhatsAppMessages}
                  disabled={isButtonDisabled}
                >
                  {buttonText}
                  {isButtonDisabled && timer > 0 && ` (${timer}s)`}
                </Button>
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
